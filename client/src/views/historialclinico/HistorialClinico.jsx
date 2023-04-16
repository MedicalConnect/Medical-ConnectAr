import React from "react";
import { Link } from "react-router-dom";
import "./HistorialClinico.css";

const HistorialClinico = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="" alt="logo medical connect" width="30" height="24" />
          </a>
          <button type="button" className="btn btn-info">
            cerrar sesion
          </button>
        </div>
      </nav>

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
