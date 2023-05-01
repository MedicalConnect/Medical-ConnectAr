import React, { useEffect, useState } from "react";
import styles from "./perfilPaciente.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAttention, getAllPagos } from "../../redux/actions/actions";
import ModalMedicos from "./modalMedicos";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import FiltrosComponent from "../../components/filtros";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert2';

const statusText = {
  encurso: "En Curso",
  enespera: "En Espera",
  finalizada: "Finalizada",
  cancelada: "Cancelada",
};

const PerfilPaciente = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const allAttentions = useSelector((state) => state.allAtentions);
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [statusAttention, setStatusAttention] = useState(null);

  const navigate = useNavigate();

  const pagos = useSelector((state) => state.totalPagos);
  console.log(pagos)

  const btn_atender = () => {
    new swal('Debes contratar nuestro servicio para poder atenderte con los medicos disponibles')
  }

  useEffect(() => {
   dispatch(getAllPagos())
  }, [])

  useEffect(() => {
    if (userLogin) {
      dispatch(getAttention({ doctorId: null, pacienteId: userLogin?.id }));
    }
  }, []);

  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Bienvenido/a {`${userLogin?.nombre}`}</h1>
        <h2 className={styles.subtitle1}>
          Si es la primera vez que ingresas, no olvides llenar tu historia
          clinica antes de solicitar una videoconsulta, gracias por utilizar
          Medical Connect!!
        </h2> 
        {
          pagos.find((e) => e.dni_paciente === userLogin.numero_de_documento && e.status === 'aprobado') 
          ? <ModalMedicos />
          : <button onClick={btn_atender}> Atenderme </button>
        }
       <Link to={"/pago"}><button>Pagar</button></Link>
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
                {userLogin?.HistoriaClinicas?.length ? (
                  <div className="row justify-content-end">
                    {userLogin.HistoriaClinicas.map((historia) => {
                      return (
                        <div className="col-11 card px-0 my-2">
                          <div className="card-header">
                            <span className="text-start">
                              {historia.tipo.toUpperCase()}
                            </span>
                          </div>
                          <div className="card-body text-start px-5">
                            <p class="card-text">{historia.descripcion}</p>
                          </div>
                          <div className="card-footer">
                            <span className="text-start">
                              {moment(historia.createdAt).format(
                                "DD/MM/YYYY hh:mm a"
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p>
                    No hay antecedentes medicos, cargue su historial medico para
                    una mejor atención.
                  </p>
                )}
                <div className="row justify-content-end">
                  <button
                    className="btn col-11 text-white mx-0 my-3"
                    style={{ backgroundColor: "#b61d69" }}
                    onClick={() => navigate("/historialclinico")}
                  >
                    Agregar historia clínica
                  </button>
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
                <FiltrosComponent
                  date={date}
                  setDate={setDate}
                  statusAttention={statusAttention}
                  setStatusAttention={setStatusAttention}
                />
                {allAttentions?.length ? (
                  <div className="row justify-content-start">
                    {allAttentions
                      ?.filter((atencion) =>
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
                            <div className="card" style={{ height: "14rem" }}>
                              <div className="card-header text-start">
                                <p className="row justify-content-between p-0 m-0">
                                  <span
                                    className={`text-${
                                      atencion.status === "enespera"
                                        ? "warning"
                                        : atencion.status === "cancelada"
                                        ? "danger"
                                        : atencion.status === "encurso"
                                        ? "primary"
                                        : "success"
                                    } col-auto`}
                                  >
                                    {statusText[atencion.status]}
                                  </span>
                                  <span className="col-auto text-end fw-lighter">
                                    <small>{atencion.id}</small>
                                  </span>
                                </p>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title text-start">
                                  {`Doc. ${atencion?.Doctor?.nombre} ${atencion?.Doctor?.apellido}`}
                                </h5>
                                {atencion.status === "finalizada" && (
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    {" "}
                                    Ver documentos
                                  </button>
                                )}
                              </div>
                              <div className="card-footer row justify-content-between mx-0">
                                <span className="col-5 text-start">
                                  {moment(atencion.createdAt).format(
                                    "DD/MM/YYYY hh:mm a"
                                  )}
                                </span>
                                <span className="col-5 text-end row justify-content-end me-5 px-0">
                                  {Array.from(
                                    { length: atencion.rating },
                                    (v, i) => i
                                  ).map((value) => {
                                    return (
                                      <div className="col-2 px-0">
                                        <FontAwesomeIcon icon={faStarSolid} />
                                      </div>
                                    );
                                  })}
                                </span>
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
        </div>
      </div>
    </>
  );
};

export default PerfilPaciente;
