import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getOne} from '../../services/movieService'
import {edit} from '../../services/movieService'


const EditKeys = {
    title: 'title',
    description: 'description',
    img: 'img',
}

export default function Edit(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [movie, setMovie] = useState({
        [EditKeys.title]: '',
        [EditKeys.description]: '',
        [EditKeys.img]: '',
    });

    useEffect(() => {
        getOne(id)
            .then(result => {
                setMovie(result)
            }).catch((e) => {
                navigate(Paths.Details(id));
            });
    }, [id]);

    const editMovieSubmitHandler = async (e) => {
        e.preventDefault();

        const movie = Object.fromEntries(new FormData(e.currentTarget));

       edit(id, movie).then(() => {
            navigate(Paths.Details(id));
        }).catch((e) => {
            navigate('/Catalog');
        });
    }

    const onChange = (e) => {
        setMovie(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


    return(
        <div className="row container mx-auto">
            <h2 className="text-center">Edit Review</h2>
            <hr />
            <div>
                <form onSubmit={editMovieSubmitHandler} >
                    <div>
                        <label className="form-label" htmlFor="title">Title</label>
                        <input
                            onChange={onChange}
                            name={EditKeys.title}
                            value={movie[EditKeys.title]}
                            className="form-control"
                            id="title" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">description</label>
                        <input
                            onChange={onChange}
                            name={EditKeys.description}
                            value={movie[EditKeys.description]}
                            className="form-control"
                            id="description" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="img">Image Url</label>
                        <input
                            onChange={onChange}
                            name={EditKeys.img}
                            value={movie[EditKeys.img]}
                            type="img"
                            className="form-control"
                            id="img" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <input className="btn color-orange mb-2 w-100 p-3 fw-bold" type="submit" value="Edit" />
                    </div>
                </form>
            </div>
        </div>
    )
}