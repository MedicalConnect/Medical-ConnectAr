import React from "react";
import styles from "./perfilMedico.module.css";
import {Link} from "react-router-dom"

const perfilMedico = () => {
  let nombre = "doctor";

  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Bienvenido/a {`${nombre}`}</h1>
        <h2 className={styles.subtitle1}>
          Accede a la historia clinica de los pacientes de la sala de espera
        </h2>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle btn btn-success"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Estado
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Conectado
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                En consulta
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Desconectado
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.acordeon}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-light-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Actualizar mis datos
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <Link to={"/actualizarmedico"}>
                <button className={styles.boton1}>Ir a actualizar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-light-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Lista de pacientes en espera
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <ul className={styles.listaDesordenada}>
                  <li>Paciente 1</li>
                  <Link to={"/videoconsulta"}>
                  <button>Comenzar videoconsulta</button>
                  </Link>
                  <li>Paciente 2</li>
                  <button>Comenzar videoconsulta</button>
                  <li>Paciente 3</li>
                  <button>Comenzar videoconsulta</button>
                  <li>Paciente 4</li>
                  <button>Comenzar videoconsulta</button>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-light-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Mis atenciones medicas
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <ul className={styles.listaDesordenada}>
                  <li>atencion 1</li>
                  <li>atencion 2</li>
                  <li>atencion 3</li>
                  <li>atencion 4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default perfilMedico;
