import React, { useEffect } from "react";
import "./PerfilAdmin.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllPacients, getAllDoctors, putStatePacient, putStateDoctor,getUserByNDocument } from "../../redux/actions/actions";
import Swal from "sweetalert2"
import SearchBar from "../../components/searchBar/SearchBar"

function PerfilAdmin() {
  const dispatch = useDispatch();

  const userAdmin = useSelector((state) => state.adminLogin);
  const allPacients = useSelector((state) => state.allPacients);
  const allMedics = useSelector((state) => state.allDoctors);
  const statusUpdate = useSelector((state) => state.statusUpdate);

  const activateStatePacient = (numero_de_documento) => {
    dispatch(putStatePacient({numero_de_documento,status_cuenta:"activa"}))
    dispatch({ type: "SET_STATUS_UPDATE", payload: true });
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Se ha activado al paciente con numero de documento ${numero_de_documento}`,
        showConfirmButton: false,
        timer: 5000
      })
  }

  const desactivateStatePacient = (numero_de_documento) => {
    Swal.fire({
        title: 'Estas seguro de desactivar esta cuenta??',
        text: "!Mal usado la herramienta puede traer consecuencias!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Desactivar'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(putStatePacient({numero_de_documento,status_cuenta:"desactivada"}))
            dispatch({ type: "SET_STATUS_UPDATE", payload: true });
          Swal.fire(
            'Desactivado!',
            `Se ha deshabilitado al paciente con numero de documento ${numero_de_documento}`,
          )
        }
      })
  }

  const activateStateDoctor = (numero_de_documento) => {
    dispatch(putStateDoctor({numero_de_documento,status_cuenta:"activa"}))
    dispatch({ type: "SET_STATUS_UPDATE", payload: true });
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Se ha activado al paciente con numero de documento ${numero_de_documento}`,
        showConfirmButton: false,
        timer: 5000
      })
  }
  const desactivateStateDoctor = (numero_de_documento) => {
    Swal.fire({
        title: 'Estas seguro de desactivar esta cuenta??',
        text: "!Mal usado la herramienta puede traer consecuencias!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Desactivar'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(putStateDoctor({numero_de_documento,status_cuenta:"desactivada"}))
            dispatch({ type: "SET_STATUS_UPDATE", payload: true });
          Swal.fire(
            'Desactivado!',
            `Se ha deshabilitado al doctor con numero de documento ${numero_de_documento}`,
          )
        }
      })
  }

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(getAllPacients());
  }, []);
  
  useEffect(() => {
    if (statusUpdate) {
        dispatch(getAllDoctors());
        dispatch(getAllPacients());
      dispatch({ type: "SET_STATUS_UPDATE", payload: false });
    }
  }, [statusUpdate]);


  return (
    <>
      <div>
        <h1>Bienvenido/a {`${userAdmin?.usuario}`}</h1>
        <h2>
          Porfavor, usar con tremenda precaucion, cualquier accion indebida
          puede poner en juego la reputacion de la empresa
        </h2>
      </div>
      <SearchBar activateStatePacient={activateStatePacient} desactivateStatePacient={desactivateStatePacient} activateStateDoctor={activateStateDoctor} desactivateStateDoctor={desactivateStateDoctor} />
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-light-subtle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Todos los pacientes (Cantidad : {allPacients.length})
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <div className="row">
                {allPacients &&
                  allPacients?.map((paciente) => {
                    return (
                      <div className="col-sm-2" key={paciente.id}>
                        <div className="card w-100 cartadiferencia">
                          <div className="card-body">
                            <h5 className="card-title">
                              {paciente.tipo_de_documento}:{" "}
                              {paciente.numero_de_documento}
                            </h5>
                            <p className="card-text">Nombre: {paciente.nombre}</p>
                            <p className="card-text">
                              Apellido: {paciente.apellido}
                            </p>
                            <p className="card-text">email: {paciente.email}</p>
                            <p className="card-text">Estado de la cuenta: {paciente.status_cuenta}</p>
                            <div>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm anchobotonsito"
                                onClick={()=>desactivateStatePacient(paciente.numero_de_documento)}
                              >
                                Desactivar Cuenta
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm anchobotonsito"
                                onClick={()=>activateStatePacient(paciente.numero_de_documento)}
                              >
                                Habilitar Cuenta
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Todos los medicos (Cantidad : {allMedics.length})
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <div className="row">
                {allMedics &&
                  allMedics?.map((medico) => {
                    return (
                      <div className="col-sm-2" key={medico.id}>
                        <div className="card w-100 cartadiferencia">
                          <div className="card-body">
                            <h5 className="card-title">
                              {medico.tipo_de_documento}:{" "}
                              {medico.numero_de_documento}
                            </h5>
                            <p className="card-text">Nombre: {medico.nombre}</p>
                            <p className="card-text">
                              Apellido: {medico.apellido}
                            </p>
                            <p className="card-text">email: {medico.email}</p>
                            <p className="card-text">
                              especialidad: {medico.especilidad}
                            </p>
                            <p className="card-text">Estado de la cuenta: {medico.status_cuenta}</p>
                            <div>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm anchobotonsito"
                                onClick={()=>desactivateStateDoctor(medico.numero_de_documento)}
                              >
                                Desactivar Cuenta
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm anchobotonsito"
                                onClick={()=>activateStateDoctor(medico.numero_de_documento)}
                              >
                                Habilitar Cuenta
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-light-subtle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Todos los Pagos (Cantidad : )
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <div className="row">
                

                ACA VAN PAGOS



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilAdmin;
