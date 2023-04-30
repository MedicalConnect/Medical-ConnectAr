import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar2.css";
import { useDispatch } from "react-redux";
import { loginLogOut } from "../../redux/actions/actions";

const NavBar2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("reduce-state");
    dispatch(loginLogOut());
    navigate("/");
  };

  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
