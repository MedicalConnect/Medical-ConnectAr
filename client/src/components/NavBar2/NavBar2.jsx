import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar2.css";
import { useDispatch, useSelector } from "react-redux";
import { loginLogOut, setLogOutAdmin } from "../../redux/actions/actions";
import { useAuth0 } from '@auth0/auth0-react';

const NavBar2 = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allAttentions = useSelector((state) => state.allAtentions);
  const userLogin = useSelector((state) => state.userLogin);
  const userAdmin = useSelector((state) => state.adminLogin);

  const logOut = () => {
    localStorage.removeItem("reduce-state");
    if (userLogin || isAuthenticated) {
      logout({ logoutParams: { returnTo: "https://medical-connect.vercel.app" } })
      dispatch(loginLogOut());
      navigate("/");
    } else {
      dispatch(setLogOutAdmin());
      navigate("/");
    }
  };

  useEffect(() => {
    if (userLogin?.rol === "paciente") {
      const atencionEnCurso = allAttentions?.find(
        (atencion) =>
          atencion.status !== "finalizada" && atencion.status !== "cancelada"
      );
      if (atencionEnCurso) {
        navigate(`/saladeespera/${atencionEnCurso.id}`);
      }
    }
  }, [allAttentions, userLogin]);

  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="" onClick={() => navigate("/")}>
            <img
              className="logonav2"
              src="https://cdn.discordapp.com/attachments/1094314281123717203/1099525596247232512/medical-connect.PNG.png"
              alt="logo medical connect"
              width="30"
              height="24"
            />
          </a>
          <button onClick={() => logOut()} type="button" className="bottoncs">
            Cerrar Sesion
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar2;
