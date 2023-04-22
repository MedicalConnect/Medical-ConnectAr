import React from "react";
import "./HistorialClinico.css";
import { useForm } from "react-hook-form";
import { addClinicalHistory } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HistorialClinico = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit1=(data)=>{
    dispatch(addClinicalHistory(data));
    alert("Historia Clinica creada");
    navigate("/perfilpaciente");
  }
  return (
    <div>
      <div>
        <section className="pl-5 bg-gradiente-white-sky-blue">
          <h2>Hola "nombre"</h2>
        </section>

        <div className="h5subtitulo">
          <h5>
            Completa la información de tu historia clinica, esto es de mucha
            utilidad para que tengas una mejor atención
          </h5>
        </div>
        <div>
          <img
            src="https://img.freepik.com/vector-gratis/grupo-personal-medico-que-lleva-iconos-relacionados-salud_53876-43071.jpg"
            alt="imagen medical connect"
            className="imageform justify-content-center
            align-items-center"
          />
        </div>
        <form className="formulario " onSubmit={handleSubmit(submit1)}>
          <div className="row mb-3">
            <h4 className="h4">Historia Clinica</h4>
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">
              Antecedentes Medicos:{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="antecedentes medicos"
                {...register("antecedentes_medicos", {
                  required: true,
                  minLength: { value: 5, message: "no puede estar vacio" },
                  maxLength: { value: 250, message: "maximo 450 caracteres" },
                })}
              />
              {errors.antecedentes_quirurgicos && (
                <p>{errors.antecedentes_quirurgicos.message}</p>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">
              Antecedentes Quirurgicos:{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="antecedentes quirurgicos..."
                {...register("antecedentes_quirurgicos", {
                  required: true,
                  minLength: { value: 5, message: "no puede estar vacio" },
                  maxLength: { value: 250, message: "maximo 450 caracteres" },
                })}
              />
              {errors.antecedentes_quirurgicos && (
                <p>{errors.antecedentes_quirurgicos.message}</p>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">
              Alergias:{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="alergias..."
                {...register("alergias", {
                  required: true,
                  minLength: { value: 5, message: "no puede estar vacio" },
                  maxLength: { value: 250, message: "maximo 450 caracteres" },
                })}
              />
              {errors.alergias && <p>{errors.alergias.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">
              Medicamentos:{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="medicamentos..."
                {...register("medicamentos", {
                  required: true,
                  minLength: { value: 5, message: "no puede estar vacio" },
                  maxLength: { value: 250, message: "maximo 450 caracteres" },
                })}
              />
              {errors.medicamentos && <p>{errors.medicamentos.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">
              Hábitos:{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="habitos..."
                {...register("habitos", {
                  required: true,
                  minLength: { value: 5, message: "no puede estar vacio" },
                  maxLength: { value: 250, message: "maximo 450 caracteres" },
                })}
              />
              {errors.habitos && <p>{errors.habitos.message}</p>}
            </div>
          </div>
          <button className="boton" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default HistorialClinico;
