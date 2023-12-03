import Catalog from './components/Catalog/Catalog'
import './App.css'



function App() {
  
  return (
    // <AuthProvider>
    //   <Header />
    //   <div className='app'>
    //     <Routes>
    //       <Route path={'/'} />
    //       <Route path={'/Catalog'}  element={<Catalog/>}/>
    //       <Route path={'/Add'} element={<Add />} />
    //       <Route path={'/Login'} element={<Login />} />
    //       <Route path={'/Logout'} element={<Logout />} />
    //       <Route path={'/Register'} element={<Register />} />
    //       <Route path={'NotFound'} element={<NotFound />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </AuthProvider>
    <div className="con">
      <Catalog/>
    </div>
    
  )
}

export default App
