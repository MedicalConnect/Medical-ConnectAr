import { Landing } from "./views/index"; //views de index
import { Route, Routes, useLocation } from 'react-router-dom'; //para rutear en app y trabajar directo en los componentes.
//import NavBar from "./components/NavBar/NavBar" ////por si existe navbar.

function App() {

  const location = useLocation()

  return (
    <div>
      {/* {location.pathname !== "/" && <NavBar/>} */} {/*Esto para que la navbar aparezca en todos lados menos...*/}
      
      <Routes>
        {/* <Route path='/home' element= { <Home/> } />
        <Route path='/create' element= { <Form/> } />
        <Route path='/home/:id' element= { <Detail/> } /> */}
        <Route path='/' element= { <Landing/> } />
      </Routes> {/*EJEMPLO RUTEO. REMPLAZAR*/}
    </div>
  )
}

export default App
