import React from "react";
import { Link } from "react-router-dom";
import "./IngresoMedicos.css";

const IngresoMedicos = () => {
  return (
    <div>
  
      <section className="pl-5 bg-gradiente-white-sky-blue">
        <h2>Ingreso de Médicos</h2>
      </section>

      <div className="h5subtitulo">
        <h5>
          Presta servicio a tus pacientes de forma remota utilizando Medical
          Connect, una plataforma de telemedicina de alta calidad utilizada por
          médicos y pacientes de todo el mundo.
        </h5>
      </div>

      <section>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to={"/creacionmedico"}>
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

export default IngresoMedicos;
