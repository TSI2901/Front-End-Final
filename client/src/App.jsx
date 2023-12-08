import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AddMovie from './components/Add/Add.jsx';
import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Logout from './components/Logout/Logout'
import Home from './components/Home/Home.jsx';
import NotFound from './components/Not-Found/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';
import Edit from './components/Edit/Edit.jsx';
import MovieDetails from './components/Details/Details.jsx';
import MyMovies from './components/My-movies/MyMovies.jsx';

import { AuthProvider } from './context/authContext.jsx'


function App() {
  
  return (
    // 
    <BrowserRouter> 
    <AuthProvider>
      <Header/>
      <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/Add'} element={<AddMovie />} />
          <Route path={'*'} element={<NotFound />} />
          <Route path={'/Catalog'} element={<Catalog />} />
          <Route path={'/MyMovies'} element={<MyMovies />} />
          <Route path={'/Edit/:id'} element={<Edit />} />
          <Route path={'/Details/:id'} element={<MovieDetails />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/Logout'} element={<Logout />} />
          <Route path={'/Register'} element={<Register />} /> 
        </Routes>
  
    </AuthProvider>

    </BrowserRouter>
  )
}

export default App
