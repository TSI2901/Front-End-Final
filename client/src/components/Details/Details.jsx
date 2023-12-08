import { Link, useNavigate } from "react-router-dom";       
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import { useParams } from "react-router-dom"
import { remove } from "../../services/movieService";
import { formatDate } from "../../utils/dataUtil";
import { getOne } from "../../services/movieService";
import './Details.css'



export default function Details() {
    const { id } = useParams();
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        title: '',
        _ownerId: '',
        img: '',
        description: '',
        _createdOn: ''
    });


    useEffect(() => {
        getOne(id)
            .then((result) => {
                setMovie(result);
            }).catch((e) => {
                console.log(e);
            });
    }, [id]);
    const deleteClickHandler = async () => {
        console.log("ddd")
        const hasConfirmed = confirm(`Are you sure you want to delete this movie "${movie.title}"?`);

        if (hasConfirmed) {
            await remove(id);

            navigate('/Catalog');
        }
    }


    return (
        
        <div className="details">
            <h1>{movie.title}</h1>
            <div className="content">
                <div className="details-image-container">
                    <img src={movie.img} alt={movie.title} />
                </div>
                <div className="details-body">
                    
                    <p><span>Description: </span> {movie.description}</p>
                    <p><span>Added on: </span> {formatDate(movie._createdOn)}</p>
                    <div className="btn-container">
                <Link className="btn" to={`/Catalog`}>Go back</Link>
                {movie._ownerId === userId &&
                    <>
                    <button className="btn"  title="Delete" onClick={deleteClickHandler}>Delete</button>
                    <Link className="btn"to={`/${'Edit'}/${id}`}>Edit</Link>
                    </>
                }
                </div>
                </div>
                
            </div>
           
        </div>
        
    )
}