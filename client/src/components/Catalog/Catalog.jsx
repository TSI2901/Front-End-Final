import { useEffect, useState } from 'react'
import CatalogItem from '../CatalogItem/CatalogItem';
import './Catalog.css'
function Catalog() {
    const [movies, setMovies] = useState([]);

    

    return(
        <div className="catalog">
            
            {movies.map(movie =(
                <CatalogItem
                key ={movie.Id}
                Id = {movie.Id}
                imgUrl = {movie.ImgUrl}
                title={movie.title}
                duration={movie.duration}
                categoty={movie.categoty}
                />
            ))}
            
        </div>
    )
}
export default Catalog