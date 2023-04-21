import React, { useEffect } from "react";
import styles from "./perfilMedico.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getEsperaAttention } from "../../redux/actions/actions";
import axios from "axios";

const PerfilMedico = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const atencionEnEspera = useSelector((state) => state.atencionEnEspera);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(atencionEnEspera);
  }, [atencionEnEspera]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getEsperaAttention(userLogin?.id));
    }, 40000);
    return () => clearInterval(intervalId);
  }, [dispatch, userLogin]);

  const iniciarVideollamada = async (atencion) => {
    const response = await axios.post(
      `http://localhost:3001/atenciones/videocall/${atencion.id}`
    );
    console.log({ response });
    // redirigir a la página de videollamada
  };
  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Bienvenido/a {`${userLogin?.nombre}`}</h1>
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
                Disponible
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Ocupado
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
                <button className={styles.boton1}>Ir a actualizar</button>
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
                <div className="accordion-item">
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      {atencionEnEspera &&
                      atencionEnEspera.filter(
                        (atencion) => atencion.estado === "enespera"
                      ).length === 0 ? (
                        <p>No hay pacientes en la sala de espera.</p>
                      ) : (
                        <ul className={styles.listaDesordenada}>
                          {atencionEnEspera
                            .filter(
                              (atencion) => atencion.estado === "enespera"
                            )
                            .map((atencion) => (
                              <li key={atencion.pacienteId.name}>
                                atencion {atencion.pacienteId.name}
                                <button
                                  className="btn btn-primary"
                                  onClick={() => iniciarVideollamada(atencion)}
                                >
                                  Iniciar videoconsulta
                                </button>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default PerfilMedico;
