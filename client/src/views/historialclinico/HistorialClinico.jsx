import React from "react";
import { Link } from "react-router-dom";
import "./HistorialClinico.css";

const HistorialClinico = () => {
  return (
    <div>
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
      </div>

      <section className="pl-5 bg-gradiente-white-sky-blue">
        <h2>Hola "nombre"</h2>
      </section>

      <div className="h5subtitulo">
        <h5>
          Completa la información de tu historia clinica, esto es de mucha
          utilidad para que tengas una mejor atención
        </h5>
      </div>
      <div className="row ">
        <label for="colFormLabel" className="texto1 col-sm-2 col-form-label">
          Antecedentes Medicos
        </label>
        <div className="col-sm-4">
          <input
            type="email"
            className="form-control"
            id="colFormLabel"
            placeholder="Enfermedades en control y tratamiento periodico.."
          />
        </div>
        <label for="colFormLabel" className="col-sm-2 col-form-label">
          Antecedentes Medicos
        </label>
        <div className="col-sm-4">
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="Enfermedades en control y tratamiento periodico.."
          />
        </div>
        <label for="colFormLabel" className="col-sm-2 col-form-label">
          Antecedentes Medicos
        </label>
        <div className="col-sm-4">
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="Enfermedades en control y tratamiento periodico.."
          />
        </div>
        <label for="colFormLabel" className="col-sm-2 col-form-label">
          Antecedentes Medicos
        </label>
        <div className="col-sm-4">
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="Enfermedades en control y tratamiento periodico.."
          />
        </div>
        <label for="colFormLabel" className="col-sm-2 col-form-label">
          Antecedentes Medicos
        </label>
        <div className="col-sm-4">
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="Enfermedades en control y tratamiento periodico.."
          />
        </div>
      </div>
    </div>
  );
};

export default HistorialClinico;
