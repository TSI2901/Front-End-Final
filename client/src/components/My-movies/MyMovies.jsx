import { useContext, useEffect, useState } from 'react'
import CatalogItem from '../CatalogItem/CatalogItem.jsx';
import './MyMovies.css'

import { getAllByOwner } from '../../services/movieService.js';

import { formatDate } from '../../utils/dataUtil.js';

import  AuthContext  from '../../context/authContext.jsx'

 

function MyMovies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {userId} = useContext(AuthContext)
    useEffect(() => {
        setIsLoading(true);

        getAllByOwner(userId)
            .then(result => setMovies(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    
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
export default MyMovies