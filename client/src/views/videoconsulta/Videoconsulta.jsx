import { React, useState, useEffect } from "react";
import styles from "./videoconsulta.module.css";
import arrMedicamentos from "../../helpers/medicamentos.js";
import arrDiagnosticos from "../../helpers/diagnosticos.js";

function Videoconsulta() {
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    setDiagnosticos(arrDiagnosticos);
    setMedicamentos(arrMedicamentos);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Atención Medica en curso</h1>
      <br />
      <div className={styles.contenedor}>
        <div className={styles.cajapaciente}></div>
        <form className={styles.formulario}>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Anamnesis:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Hallazgos, examen fisico:
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Diagnostico:
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <div>
              <label htmlFor="diagnostico">Diagnostico clinico:</label>
              <select className={styles.diagnostico}>
                {diagnosticos.map((diagnostico, index) => (
                  <option key={index} value={diagnostico.d}>
                    {diagnostico.d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <h4>Indicaciones domiciliarias</h4>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="tratamiento de heridas, dietas, etc..."
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Detalle:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Comentarios:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="ampliar indicaciones..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <h4>Medicamentos</h4>
            <div className="row mb-3">
              <div>
                <label htmlFor="medicamento">Medicamento:</label>
                <select className={styles.medicamento}>
                  {medicamentos.map((medicamento, index) => (
                    <option key={index} value={medicamento.nombre}>
                      {medicamento.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Dosis:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Vía:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Frecuencia:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Indicaciones Adicionales::{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <h4>Solicitud de Examen:</h4>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de examen medico: :{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <h4>Certificado</h4>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de certificado:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de indicacion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Fecha de inicio:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Lugar de presentacion:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="empresa, entidad..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <button className={styles.boton} type="submit">
            Finalizar consulta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Videoconsulta;
