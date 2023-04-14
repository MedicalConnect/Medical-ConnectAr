import { Landing } from "./views/index"; //views de index
import { Route, Routes, useLocation } from "react-router-dom"; //para rutear en app y trabajar directo en los componentes.
import QuienesSomos from "./views/quienesSomos/QuienesSomos";
import Contactanos from "./views/contactanos/Contactanos";
import ContribucionesSociales from "./views/contribuciones/ContribucionesSociales";
import NoticiasSalud from "./views/noticiasalud/NoticiasSalud";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Planes from "./views/planes/Planes";
import IngresoPacientes from "./views/ingresopacientes/IngresoPacientes";
import IngresoMedicos from "./views/ingresomedicos/IngresoMedicos";
import IngresoAdmin from "./views/ingresoadmin/IngresoAdmin";

//import NavBar from "./components/NavBar/NavBar" ////por si existe navbar.

function App() {
  const location = useLocation();

  return (
    <div>
      {/* {location.pathname !== "/" && <NavBar/>} */}{" "}
      {/*Esto para que la navbar aparezca en todos lados menos...*/}
      <NavBar />
      <Routes>
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contribuciones" element={<ContribucionesSociales />} />
        <Route path="/noticias" element={<NoticiasSalud />} />
        <Route path="/ingresopaciente" element={<IngresoPacientes />} />
        <Route path="/ingresomedico" element={<IngresoMedicos />} />
        <Route path="/ingresoadmin" element={<IngresoAdmin />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
