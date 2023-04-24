import React from "react";

const FiltrosComponent = ({
  date,
  setDate,
  statusAttention,
  setStatusAttention,
}) => {
  const estados = ["enespera", "encurso", "finalizada", "cancelada"];
  return (
    <div className="row justify-content-end my-2">
      <div className="col-4">
        <label htmlFor="floatingInput">Estado:</label>
        <select
          onChange={(e) => setStatusAttention(e.target.value)}
          value={statusAttention}
          className="form-select mt-auto"
          aria-label="Default select example"
        >
          <option value="" defaultValue>
            todos los estados
          </option>
          {estados.map((estado) => (
            <option value={estado}>{estado}</option>
          ))}
        </select>
      </div>
      <div className="col-4">
        <label htmlFor="floatingInput">Fecha:</label>
        <input
          type="date"
          className="form-control m-0"
          id="floatingInput"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </div>
      <div
        className="col-2 align-self-end btn btn-link text-danger"
        onClick={() => {
          setStatusAttention(null);
          setDate(null);
        }}
      >
        Borrar filtros
      </div>
    </div>
  );
};

export default FiltrosComponent;
