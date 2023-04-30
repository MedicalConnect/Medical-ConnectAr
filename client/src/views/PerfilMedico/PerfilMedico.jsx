import React, { useEffect, useState } from "react";
import styles from "./perfilMedico.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAttention } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import FiltrosComponent from "../../components/filtros";
import apiUrl from "../../helpers/apiUrl";

const PerfilMedico = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const atencionEnEspera = useSelector((state) => state.allAtentions);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [date, setDate] = useState(null);
  const [statusAttention, setStatusAttention] = useState(null);
  const [refreshAttentions, setRefreshAttentions] = useState(false);

  useEffect(() => {
    if (userLogin) {
      dispatch(getAttention({ doctorId: userLogin?.id, pacienteId: null }));
    }
  }, [refreshAttentions]);

  useEffect(() => {
    const eventSource = new EventSource(`${apiUrl}/atenciones/tracker`);
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (
        data &&
        userLogin &&
        data.doctorId === userLogin.id &&
        data.action === "CREATE_ATTENTION"
      ) {
        setRefreshAttentions(!refreshAttentions);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

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
              {atencionEnEspera?.filter(
                (atencion) =>
                  atencion.status === "enespera" ||
                  atencion.status === "encurso"
              )?.length ? (
                <div className="row justify-content-start">
                  {atencionEnEspera
                    .filter(
                      (atencion) =>
                        atencion.status === "enespera" ||
                        atencion.status === "encurso"
                    )
                    ?.map((atencion) => {
                      return (
                        <div className="col-4 p-1">
                          <div className="card">
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
                            <div className="card-footer">
                              {moment(atencion.createdAt).format(
                                "DD/MM/YYYY hh:mm a"
                              )}
                            </div>
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
              <FiltrosComponent
                date={date}
                setDate={setDate}
                statusAttention={statusAttention}
                setStatusAttention={setStatusAttention}
              />
              {atencionEnEspera?.filter((atencion) =>
                statusAttention ? atencion.status === statusAttention : true
              )?.length ? (
                <div className="row justify-content-start">
                  {atencionEnEspera
                    .filter((atencion) =>
                      statusAttention
                        ? atencion.status === statusAttention
                        : true
                    )
                    ?.filter((atencion) =>
                      date
                        ? moment(
                            moment(
                              atencion.createdAt,
                              "YYYY-MM-DD hh:mm:ss"
                            ).startOf("day")
                          ).isSame(date)
                        : true
                    )
                    ?.map((atencion) => {
                      return (
                        <div className="col-4 p-1">
                          <div className="card">
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
                            <div className="card-footer">
                              {moment(atencion.createdAt).format(
                                "DD/MM/YYYY hh:mm a"
                              )}
                            </div>
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
              <Link to={"/actualizarmedico"}>
                <button className={styles.boton1}>Ir a actualizar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilMedico;
