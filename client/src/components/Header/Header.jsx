import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

import './Header.css'

export default function Header() {
  const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    if (userId !== undefined){
       return (
           <header>
               <img onClick={()=>{navigate(`/`)}} src="../../../public/toni_logo.png" className="img"/>
               <div className="header">
                   <div>
                   <Link to={`/Catalog`} className="nav-button">Catalog</Link>
               </div>
            <nav>

                <div id="user">
                    <Link to="/Add" className="nav-button">Add Movie</Link>
                    <Link to="/MyMovies" className="nav-button">My Movies</Link>
                    <Link to="/Logout" className="nav-button">Logout</Link>
                </div>
            </nav>
               </div>
        </header>
       )
    }
    else {
        return (
            <header>
                <img onClick={()=>{navigate(`/`)}} src="../../../public/toni_logo.png" className="img"/>
                <div className="header">
                    <Link to={`/Catalog`} className="nav-button">Catalog</Link>
                <nav>
                    <div id="guest">
                        <Link to="/Login" className="nav-button">Login</Link>
                        <Link to="/Register" className="nav-button">Register</Link>
                    </div>
                </nav>
                </div>
            </header>
        );
    }
}