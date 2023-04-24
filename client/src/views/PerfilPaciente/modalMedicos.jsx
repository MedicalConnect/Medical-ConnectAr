import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableDoctors } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../helpers/apiUrl";

const ModalMedicos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const availableDoctors = useSelector((state) => state.availableDoctors);
  const userlogin = useSelector((state) => state.userLogin);
  const [doctorId, setDoctorId] = useState(null);

  useEffect(() => {
    if (!availableDoctors.length) {
      dispatch(getAvailableDoctors());
    }
  }, [availableDoctors]);

  const createAttentionHandler = async () => {
    try {
      const response = await axios.post(`${apiUrl}/atenciones`, {
        doctorId,
        pacienteId: userlogin.id,
      });
      navigate(`/saladeespera/${response?.data?.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => dispatch(getAvailableDoctors())}
        type="button"
        className="btn btn-primary mx-4"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Atenderme
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Medicos disponibles
              </h1>
              <button
                onClick={() => setDoctorId(null)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {availableDoctors?.map((doctor, index) => {
                return (
                  <div
                    key={index}
                    className={`card ${
                      doctorId === doctor.id && "border border-primary border-4"
                    }`}
                    onClick={() => setDoctorId(doctor.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/395/880/non_2x/half-body-doctor-profession-cartoon-icon-illustration-free-vector.jpg"
                      className="card-img-top"
                      alt="medico"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {doctor.nombre} {doctor.apellido}
                      </h5>
                      <h6 className="card-text fw-normal">
                        {doctor.especilidad}
                      </h6>
                      <h6 className="card-text fw-normal">
                        Matricula: {doctor.numero_de_matricula}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => createAttentionHandler()}
                type="button"
                className="btn btn-primary"
                disabled={!doctorId}
              >
                Solicitar atencion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMedicos;
