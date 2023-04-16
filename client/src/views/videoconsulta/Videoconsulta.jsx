import React from "react";
import styles from "./videoconsulta.module.css";

function Videoconsulta() {
  return (
    <div>
      <h1 className={styles.title}>Atención Medica en curso</h1>
      <br />
      <div className={styles.contenedor}>
        <div className={styles.cajapaciente}></div>
        <form className={styles.formulario}>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Anamnesis:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Hallazgos, examen fisico:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="col-form-label"
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Diagnostico:
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="col-form-label"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Diagnostico clinico:
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="col-form-label"
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div class="row mb-3">
            <h4>Indicaciones domiciliarias</h4>
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Tipo:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Detalle:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Comentarios:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div class="row mb-3">
            <h4>Medicamentos</h4>
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Medicamento:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Dosis:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Vía:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Frecuencia:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Indicaciones Adicionales::{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div class="row mb-3">
            <h4>Solicitud de Examen:</h4>
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Tipo de examen medico: :{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div class="row mb-3">
            <h4>Certificado</h4>
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Tipo de certificado:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Tipo de indicacion:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Fecha de inicio:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Lugar de presentacion:{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="colFormLabel"
                placeholder="resumen..."
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
