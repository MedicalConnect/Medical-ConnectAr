import React, { useEffect } from "react";
import styles from "./perfilMedico.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getEsperaAttention } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const PerfilMedico = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const atencionEnEspera = useSelector((state) => state.atencionEnEspera);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (userLogin) {
      dispatch(getEsperaAttention(userLogin?.id));
    }
  }, [userLogin]);

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
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Sala de espera
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {atencionEnEspera?.length ? (
                <div className="row justify-content-start">
                  {atencionEnEspera
                    .filter(
                      (atencion) =>
                        atencion.status === "enespera" ||
                        atencion.status === "encurso"
                    )
                    ?.map((atencion) => {
                      return (
                        <div className="card col-4">
                          <div className="card-header text-start">
                            <p>
                              <span
                                className={`text-${
                                  atencion.status === "enespera"
                                    ? "danger"
                                    : "success"
                                }`}
                              >
                                {atencion.status}
                              </span>
                            </p>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">
                              {`${atencion?.Paciente?.nombre} ${atencion?.Paciente?.apellido}`}
                            </h5>
                            <p className="card-text">
                              {`${atencion?.Paciente?.tipo_de_documento}: ${atencion?.Paciente?.numero_de_documento}`}
                            </p>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() =>
                                navigation(`/videoconsulta/${atencion.id}`)
                              }
                            >
                              {atencion.status === "enespera"
                                ? "Iniciar atencion"
                                : "Continuar con la atencion"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p>No hay pacientes en la sala de espera.</p>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Historial de atenciones
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {atencionEnEspera?.length ? (
                <div className="row justify-content-start">
                  {atencionEnEspera
                    .filter(
                      (atencion) =>
                        atencion.status === "finalizada" ||
                        atencion.status === "cancelada"
                    )
                    ?.map((atencion) => {
                      return (
                        <div className="card col-4">
                          <div className="card-header text-start">
                            <p>
                              <span
                                className={`text-${
                                  atencion.status === "cancelada"
                                    ? "danger"
                                    : "info"
                                }`}
                              >
                                {atencion.status}
                              </span>
                            </p>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">
                              {`${atencion?.Paciente?.nombre} ${atencion?.Paciente?.apellido}`}
                            </h5>
                            <p className="card-text">
                              {`${atencion?.Paciente?.tipo_de_documento}: ${atencion?.Paciente?.numero_de_documento}`}
                            </p>
                            {atencion.status === "finalizada" && (
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => navigation(`/`)}
                              >
                                ver informe
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p>No se realizaron atenciones aún.</p>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Actualizar mis datos
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <button className={styles.boton1}>Ir a actualizar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilMedico;
