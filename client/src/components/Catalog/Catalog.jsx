import { useEffect, useState } from 'react'
import CatalogItem from '../CatalogItem/CatalogItem';
import './Catalog.css'
import * as request from '../../lib/requests';
import AddMovie from '../Add/Add';
import MovieDetails from '../Details/Details.jsx';
import { formatDate } from '../../utils/dataUtil.js';
import { uniqueID } from '../../utils/idUtil.js';

 

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);

        request.getAll()
            .then(result => setMovies(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);
    console.log(movies)
    
    const movieInfoClickHandler = async (movieId) => {
        setSelectedMovie(movieId);
        setShowInfo(true);
    };
   
    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const movieCreateHandler = async (e) => {
        // Stop page from refreshing
        e.preventDefault();


        // Get data from form data
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Create new user at the server
        const newMovie = await request.create(data);

        // Add newly created user to the local state
        setMovies(state => [...state, newMovie]);

        // Close the modal
        setShowCreate(false);
    };

    const hideCreateMovie = () => {
        setShowCreate(false);
    };

    return(
        <div className="con">
        <div className="catalog">
            
            {movies.map(movie =>(
                <CatalogItem
                key={movie._id}
                title={movie.title}
                imgUrl = {movie.img}
                id = {movie._id}
                createdOn={formatDate(movie._createdOn)}
                onInfoClick={movieInfoClickHandler}
                />
            ))}

            
            
        </div>
        {showCreate && (
                <AddMovie
                onClose={hideCreateMovie}
                onCreate={movieCreateHandler}
            />
            )}  
        {showInfo && (
                <MovieDetails
                    onClose={() => setShowInfo(false)}
                    movieId={selectedMovie}
                />
            )}
        <button className="btn-add btn" onClick={createUserClickHandler}>Add new movie</button>
        </div>
    )
}
export default Catalog