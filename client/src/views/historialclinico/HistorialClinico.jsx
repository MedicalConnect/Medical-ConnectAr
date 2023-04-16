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
            <li className="nav-item dropdown list-style: none btn btn-info">
              <a
                className="nav-link dropdown-toggle "
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ingrese Aquí
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
      <div>
        <img
          src="https://img.freepik.com/vector-gratis/grupo-personal-medico-que-lleva-iconos-relacionados-salud_53876-43071.jpg"
          alt="imagen medical connect"
          className="imageform justify-content-center
            align-items-center"
        />
      </div>
      <form className="formulario ">
        <div class="row mb-3">
          <h4 className="h4">Historia Clinica</h4>
          <label for="colFormLabel" class="col-sm-3 col-form-label">
            Antecedentes Medicos:{" "}
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              placeholder="antecedentes medicos"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabel" class="col-sm-3 col-form-label">
            Antecedentes Quirurjicos:{" "}
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              placeholder="resumen..."
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabel" class="col-sm-3 col-form-label">
            Alergias:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              placeholder="resumen..."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="colFormLabel" className="col-sm-3 col-form-label">
            Medicamentos:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              placeholder="resumen..."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="colFormLabel" className="col-sm-3 col-form-label">
            Hábitos:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              placeholder="resumen..."
            />
          </div>
        </div>
        <button className="boton" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default HistorialClinico;
