import {
  Landing,
  QuienesSomos,
  Contactanos,
  ContribucionesSociales,
  NoticiasSalud,
  NavBar,
  Footer,
  Planes,
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
  AtencionFinalizada
} from "./views/index"; //views de index
import { Route, Routes, useLocation } from "react-router-dom"; //para rutear en app y trabajar directo en los componentes.

//import NavBar from "./components/NavBar/NavBar" ////por si existe navbar.

function App() {
  const location = useLocation();
  const excludedRoutes = [
    "/ingresopaciente",
    "/ingresomedico",
    "/ingresoadmin",
    "/creacionpaciente",
    "/creacionmedico",
    "/actualizarpaciente",
    "/actualizarmedico",
    "/saladeespera",
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
        <Route path="/actualizarpaciente" element={<ActualizarPaciente />} />
        <Route path="/actualizarmedico" element={<ActualizarMedico />} />
        <Route path="/saladeespera" element={<SalaDeEspera />} />
        <Route path="/videoconsulta" element={<Videoconsulta />} />
        <Route path="/atencionfinalizada" element={<AtencionFinalizada />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
