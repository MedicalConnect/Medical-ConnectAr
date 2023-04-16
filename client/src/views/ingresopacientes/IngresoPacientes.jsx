import React from "react";
import "./IngresoPacientes.css";
import { Link } from "react-router-dom";

const IngresoPacientes = () => {
  return (
    <div>
      <div className="h5subtitulo">
        <h5>
          ¿No tienes cuenta? ¡Crea tu cuenta fácil y rápido y comienza a recibir
          atención médica sin salir de casa con Docmovi, servicio médico online
          y presencial al alcance de todos!
        </h5>
      </div>

      <section>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to={"/creacionpaciente"}>
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
