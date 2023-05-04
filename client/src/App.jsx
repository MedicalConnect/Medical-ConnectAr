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
  PerfilAdmin,
  PagoPublico,
  Planes,
} from "./views/index"; //views de index
import { Route, Routes,useLocation,useNavigate } from "react-router-dom"; //para rutear en app y trabajar directo en los componentes.
//import NavBar from "./components/NavBar/NavBar" ////por si existe navbar.
import NavBar2 from "../src/components/NavBar2/NavBar2";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

function App() {
  const navigate = useNavigate();
   const location = useLocation();
   const { user, isAuthenticated, isLoading } = useAuth0();
  const userlogin = useSelector((state) => state.userLogin);
  const userAdmin = useSelector((state) => state.adminLogin);

  const privateRouter = [
    "/perfilpaciente",
    "/perfilmedico",
    "/historialclinico",
    "/actualizarpaciente",
    "/actualizarmedico",
    "/saladeespera",
    "/videoconsulta",
    "/atencionfinalizada",
    "/perfiladmin",
    "/videoconsulta/:id"
  ];
  
 
  const publicRouter = [
    "/quienessomos",
    "/contactanos",
    "/contribuciones",
    "/noticias",
    "/ingresopaciente",
    "/ingresomedico",
    "/ingresoadmin",
    "/creacionpaciente",
    "/creacionmedico",
    "/iniciarsesion",
    "/ingresoadmin",
    "/",
    "/planes",
    "/saladeespera/:atencionId",
    "/videoconsulta/:atencionId",
    "/atencionfinalizada/:atencionId"

  ]

  useEffect(() => {
    if (!userlogin || !userAdmin || !isAuthenticated ) {
      if (privateRouter.includes(location.pathname)) {
        navigate("/");
      }
    }
  }, [userlogin,userAdmin,isAuthenticated]);

  return (
    <>
      {publicRouter.includes(location.pathname) && <NavBar />}
      {privateRouter.includes(location.pathname) && <NavBar2 />}
      <Routes>
        <Route path="/historialclinico" element={<HistorialClinico />} />    ❤
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/contribuciones" element={<ContribucionesSociales />} />
        <Route path="/noticias" element={<NoticiasSalud />} />
        <Route path="/ingresopaciente" element={<IngresoPacientes />} />
        <Route path="/ingresomedico" element={<IngresoMedicos />} />
        <Route path="/ingresoadmin" element={<IngresoAdmin />} />
        <Route path="/creacionpaciente" element={<Formpaciente />} />
        <Route path="/creacionmedico" element={<FormMedico />} />
        <Route path="/perfilmedico" element={<PerfilMedico />} /> ❤
        <Route path="/perfilpaciente" element={<PerfilPaciente />} />❤
        <Route path="/actualizarpaciente" element={<ActualizarPaciente />} />❤
        <Route path="/actualizarmedico" element={<ActualizarMedico />} />❤
        <Route path="/saladeespera/:atencionId" element={<SalaDeEspera />} />❤
        <Route path="/videoconsulta/:atencionId" element={<Videoconsulta />} />❤
        <Route
          path="/atencionfinalizada/:atencionId"
          element={<AtencionFinalizada />}
        />❤
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/ingresoadmin" element={<IngresoAdmin />} />
        <Route path="/perfiladmin" element={<PerfilAdmin />} />❤
        <Route path="/" element={<Landing />} />
        <Route path="/planes" element={<PagoPublico />} />
        <Route path="/pago" element={<Planes />} />❤
      </Routes>
      <Footer />
    </>
  );
}

export default App;
