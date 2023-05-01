import React, { useEffect, useState } from "react";
import styles from "./perfilPaciente.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAttention, getAllPagos } from "../../redux/actions/actions";
import ModalMedicos from "./modalMedicos";
import { Link } from "react-router-dom";
import moment from "moment";
import FiltrosComponent from "../../components/filtros";
import swal from 'sweetalert2';


const PerfilPaciente = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const allAttentions = useSelector((state) => state.allAtentions);
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [statusAttention, setStatusAttention] = useState(null);
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
                            <div className="card">
                              <div className="card-header text-start">
                                <p>
                                  <span
                                    className={`text-${
                                      atencion.status === "enespera"
                                        ? "warning"
                                        : atencion.status === "cancelada"
                                        ? "danger"
                                        : atencion.status === "encurso"
                                        ? "primary"
                                        : "success"
                                    }`}
                                  >
                                    {atencion.status}
                                  </span>
                                </p>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title text-start">
                                  {`Doc. ${atencion?.Doctor?.nombre} ${atencion?.Doctor?.apellido}`}
                                </h5>
                                {/* <p className="card-text">
                                {atencion?.diagnostico?.map((diag) => {
                                  const cie10 = arrDiagnosticos.find(
                                    (dia) => dia.c === diag.CIE10
                                  );
                                  return (
                                    <p className="m-0 p-0 text-start fw-light">
                                      {cie10.d}
                                    </p>
                                  );
                                })}
                              </p> */}
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
        </div>
      </div>
    </>
  );
};

export default PerfilPaciente;
