import { Link } from "react-router-dom";
import './NotFound.css'
export default function NotFound(){
    return(
        <div className="error-container">
            <h1>404</h1>
            <p>Oops! Page not found.</p>
            <Link className="btnHome" to={'/'}>Go Home</Link>
        </div>
    )
}