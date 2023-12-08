import { create } from '../../services/movieService.js';
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../../context/authContext";
import { uniqueID } from '../../utils/idUtil.js';
import './Add.css'
export default function Create(){
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    console.log(userId);    

    const movieSubmitHandler = async (values) => {
        event.preventDefault();
        const tempData = Object.fromEntries(new FormData(values.currentTarget));
        const movieData = {
                title: tempData.title,
                description: tempData.description,
                img: tempData.img,
                _ownerId: userId,
                _createdOn: new Date().toISOString()
        }
        console.log(movieData);

        try{
            await create(movieData)

            navigate(`/Catalog`);
        }
        catch(err){
            console.log(err);
            navigate("/");
        }
    };
    return(
        <div className="create">
            <h1> Add Movie </h1>
            <form id="form" onSubmit={movieSubmitHandler}>
            <section>
                <h2>Title</h2>
                <div className="input">
                    <input id="title" name="title"></input>
                </div>
            </section>


            <section>
                <h2>Photo</h2>
                <textarea id="img" name="img" placeholder="Photo Url"></textarea>
            </section>
            <section>
                <h2>Description</h2>
                <div className="description">
                   <textarea id="description" name="description" placeholder="Enter the details of the movie"></textarea>
                </div>
            </section>
                <input type="submit" className="button" value={"Add Movie"} />
            
            </form>
        </div>
    )
}