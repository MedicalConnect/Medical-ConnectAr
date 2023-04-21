import React, { useState } from "react";
import styles from "./perfilPaciente.module.css";
import { useSelector } from "react-redux";
import ModalMedicos from "./modalMedicos";
import {Link} from "react-router-dom"

const PerfilPaciente = () => {
  const userlogin = useSelector((state) => state.userLogin);

  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>
          Bienvenido/a {`${userlogin?.nombre}`}
        </h1>
        <h2 className={styles.subtitle1}>
          Si es la primera vez que ingresas, no olvides llenar tu historia
          clinica antes de solicitar una videoconsulta, gracias por utilizar
          Medical Connect!!
        </h2>
        <ModalMedicos />
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
              <Link to={"/actualizarpaciente"}>
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
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Historia Clinica
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <Link to="/historialclinico">
                  <button className={styles.boton2}>
                    Ir a historia clínica
                  </button>
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
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
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

export default PerfilPaciente;
