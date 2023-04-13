import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-Toggler">
          <a className="navbar-brand" href="#">
            {/* <img
              src="../image/logo-ico.ico"
              width="50"
              alt="logo de la página web"
            /> */}
          </a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#sobre-mi"
              >
                Quienes Somos?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Contactanos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonios">
                Planes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Noticias Salud
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contribuciones Sociales ❤️
              </a>
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
              <button type="button" className="btn btn-info">
                Ingrese Aquí
              </button>
            </a>
            <ul className="dropdown-menu ">
              <li>
                <a className="dropdown-item" href="#">
                  Ingreso Pacientes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ingreso Médicos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ingreso Admin
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
