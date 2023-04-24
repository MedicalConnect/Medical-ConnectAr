import SubiendoImagenes from "./views/SubiendoImagenes";
import {
  Landing,
  QuienesSomos,
  Contactanos,
  ContribucionesSociales,
  NoticiasSalud,
  NavBar,
  Footer,
  IngresoPacientes,
  IngresoMedicos,
  IngresoAdmin,
  PerfilMedico,
  PerfilPaciente,
  HistorialClinico,
  Formpaciente,
  FormMedico,
  ActualizarPaciente,
  ActualizarMedico,
  SalaDeEspera,
  Videoconsulta,
  AtencionFinalizada,
  IniciarSesion,
  Planes,
} from "./views/index"; //views de index
import { Route, Routes, useLocation } from "react-router-dom"; //para rutear en app y trabajar directo en los componentes.

//import NavBar from "./components/NavBar/NavBar" ////por si existe navbar.

function App() {
  const location = useLocation();
  // const excludedRoutes = [
  //   "/actualizarpaciente",
  //   "/actualizarmedico",
  //   "/saladeespera",
  // ];
  // const includeRoutes = [
  //   "/actualizarpaciente",
  //   "/actualizarmedico",
  //   "/saladeespera",
  // ];

  return (
    <div>
      {/* {!excludedRoutes.includes(location.pathname) && <NavBar />}
      {includeRoutes.includes(location.pathname) && <NavBar2 />} */}
      <NavBar />
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
        <Route path="/actualizarpaciente" element={<ActualizarPaciente />} />
        <Route path="/actualizarmedico" element={<ActualizarMedico />} />
        <Route path="/saladeespera/:atencionId" element={<SalaDeEspera />} />
        <Route path="/videoconsulta/:atencionId" element={<Videoconsulta />} />
        <Route path="/atencionfinalizada" element={<AtencionFinalizada />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/" element={<Landing />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
