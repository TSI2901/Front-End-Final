import './CatalogItem.css'
import { Link, useNavigate } from "react-router-dom";
import { remove } from '../../services/movieService.js';

export default function CatalogItem({
    title,
    imgUrl,
    id,
    ownerId,
    userId,
    createdOn
}){
    const navigate = useNavigate();
    const deleteClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete this movie "${title}"?`);

        if (hasConfirmed) {
            await remove(id);

            navigate('/Catalog');
        }
    }

    return(
        <div className="item">
            <img src={imgUrl} alt={title}></img>
            <h5>{title}</h5>
            <p> Added on: {createdOn}</p>
                <Link to={`/${'Details'}/${id}`}>Details</Link>
                {ownerId === userId &&
                    <>
                    <Link to={`/${'Edit'}/${id}`}>Edit</Link>
                    </>
                }
                
        </div>
    )
}   