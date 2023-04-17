import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbar-toggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <Link to="/">
            <img
              className="navbar-brand"
              src="https://cdn.discordapp.com/attachments/1094314281123717204/1097344521290911865/medical-connect.PNG.png"
              alt="logo de la página web"
            />
          </Link>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/quienessomos"
              >
                Quienes Somos?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactanos">
                Contactanos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planes">
                Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">
                Noticias Salud
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contribuciones">
                Contribuciones Sociales ❤️
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ">
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <button type="button" className="btn btn-outline-info botton-ingreseaqui">
                Ingrese Aquí
                </button>
            </a>
            <ul className="dropdown-menu ">
              <li>
                <Link className="dropdown-item" to="/ingresopaciente">
                  Ingreso Pacientes
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/ingresomedico">
                  Ingreso Médicos
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/ingresoadmin">
                  Ingreso Admin
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
