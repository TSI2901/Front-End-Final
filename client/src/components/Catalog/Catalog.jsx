import { useContext, useEffect, useState } from 'react'
import CatalogItem from '../CatalogItem/CatalogItem';
import './Catalog.css'
import { remove } from '../../services/movieService.js';
import { getAll } from '../../services/movieService.js';
import MovieDetails from '../Details/Details.jsx';
import { formatDate } from '../../utils/dataUtil.js';
import MovieDeleteModal from '../DeleteModal/DeleteModal.jsx';
import  AuthContext  from '../../context/authContext.jsx'

 

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const {userId} = useContext(AuthContext)
    useEffect(() => {
        setIsLoading(true);

        getAll()
            .then(result => setMovies(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);
    
    const movieInfoClickHandler = async (movieId) => {
        setSelectedMovie(movieId);
        setShowInfo(true);
    };


   
 



   

    return(
        <div className="catalog">
            <div className="catalog-item">
            
            {movies.map(movie =>(
                <CatalogItem
                key={movie._id}
                userId={userId}
                title={movie.title}
                imgUrl = {movie.img}
                ownerId={movie._ownerId}
                id = {movie._id}
                createdOn={formatDate(movie._createdOn)}
                />
            ))}     
            </div>
        </div>
    )
}
export default Catalog