import React from "react";
import "./IngresoPacientes.css";
import { Link } from "react-router-dom";

const IngresoPacientes = () => {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar  navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
          <li className="nav-item dropdown list-style: none">
            <a
              className="nav-link dropdown-toggle"
              href=""
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ingrese Aquí
            </a>
            <ul className="dropdown-menu">
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
        </nav>
      </div>

      <section className="pl-5 bg-gradiente-white-sky-blue">
        <h2>Ingreso de Pacientes</h2>
      </section>

      <div className="h5subtitulo">
        <h5>
          ¿No tienes cuenta? ¡Crea tu cuenta fácil y rápido y comienza a recibir
          atención médica sin salir de casa con Docmovi, servicio médico online
          y presencial al alcance de todos!
        </h5>
      </div>

      <section>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link>
            <button className=" btn-primary" type="button">
              CREAR CUENTA
            </button>
          </Link>
          <Link>
            <button className=" btn-primary1" type="button">
              INGRESAR
            </button>
          </Link>
        </div>
      </section>

      <section className="d-grid gap-2 col-6 mx-auto">
        <a className="btn btn-primary disabled">Ingresa por Google Aquí</a>
        <a
          href="#"
          className="btn2 btn-secondary disabled "
          tabindex="-1"
          role="button"
          aria-disabled="true"
        >
          <i className="bi bi-google"></i>
        </a>
      </section>
    </div>
  );
};

export default IngresoPacientes;
