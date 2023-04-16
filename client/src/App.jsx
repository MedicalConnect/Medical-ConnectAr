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
import Formpaciente from "./views/crearcuentamedico/FormPaciente";
import FormMedico from "./views/crearcuentapaciente/FormMedico";
import PerfilMedico from "./views/PerfilMedico/PerfilMedico";
import PerfilPaciente from "./views/PerfilPaciente/PerfilPaciente";
import HistorialClinico from "./views/historialclinico/HistorialClinico";
import AtencionFinalizada from "./views/atencionFinalizada/AtencionFilanizada";
import Videoconsulta from "./views/videoconsulta/Videoconsulta";

//import NavBar from "./components/NavBar/NavBar" ////por si existe navbar.

function App() {
  const location = useLocation();
  const excludedRoutes = [
    "/ingresopaciente",
    "/ingresomedico",
    "/ingresoadmin",
    "/creacionpaciente",
    "/creacionmedico",
  ];

  return (
    <div>
      {!excludedRoutes.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/historialclinico" element={<HistorialClinico />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contribuciones" element={<ContribucionesSociales />} />
        <Route path="/noticias" element={<NoticiasSalud />} />
        <Route path="/ingresopaciente" element={<IngresoPacientes />} />
        <Route path="/ingresomedico" element={<IngresoMedicos />} />
        <Route path="/ingresoadmin" element={<IngresoAdmin />} />
        <Route path="/creacionpaciente" element={<Formpaciente />} />
        <Route path="/creacionmedico" element={<FormMedico />} />
        <Route path="/perfilmedico" element={<PerfilMedico />} />
        <Route path="/perfilpaciente" element={<PerfilPaciente />} />
        <Route path="/atencionfinalizada" element={<AtencionFinalizada />} />
        <Route path="/videoconsulta" element={<Videoconsulta />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
