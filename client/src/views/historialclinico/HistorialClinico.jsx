import React, { useState } from "react";
import "./HistorialClinico.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import hcImg from "../../helpers/img/historialClinico.png";
import apiUrl from "../../helpers/apiUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addAntecedente } from "../../redux/actions/actions";

const tipos = ["antecendes medicos", "medicamentos", "alergia", "habitos"];

const HistorialClinico = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  // const { atencionId } = useParams();
  const userlogin = useSelector((state) => state.userLogin);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Cargando nuevo antecedente",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const { tipo, descripcion } = data;
    try {
      const response = await axios.post(`${apiUrl}/historiaClinica`, {
        tipo,
        descripcion,
        pacienteId: userlogin.id,
      });
      console.log(userlogin, "prueba info userlogin aca------>>>");
      Swal.fire({
        icon: "success",
        title: "Antecedente cargado correctamente",
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        dispatch(addAntecedente(response.data));
        reset();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Antecedente no cargado",
        timerProgressBar: false,
        text: "Vuelva a intentarlo",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    await axios
      .post(`${apiUrl}/storage/${userlogin?.id}`, formData)
      .then((response) => {
        console.log("El archivo se subió con éxito");
      })
      .catch((error) => {
        console.log("Hubo un error al subir el archivo", error);
      });
  };

  return (
    <div className="row justify-content-evenly">
      <div className="col-10">
        <h2 className="mb-5 p-0">{`Hola ${userlogin?.nombre} ${userlogin?.apellido}`}</h2>

        <h5 className="text-center">
          Completa la información de tu historia clinica, esto es de mucha
          utilidad para que tengas una mejor atención.
          <hr />
        </h5>
      </div>
      <div className="col-5 row justify-content-center mt-5">
        <img src={hcImg} alt="medico" />
      </div>
      <div className="col-7 row justify-content-center p-5 m-0">
        <form
          className="row justify-content-center rounded bg-success-subtle"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-10">
            <h4 className="text-end pt-4">Agregar Historia Clinica</h4>
            <hr />
          </div>
          <div className="col-10">
            <label htmlFor="diagnostico" className="mb-2">
              Tipo:
            </label>
            <select
              className="form-control"
              {...register("tipo", {
                required: "El tipo es requerido",
              })}
            >
              <option value={""}>Seleccionar antecedente clinico</option>
              {tipos.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo.toUpperCase()}
                </option>
              ))}
            </select>
            {errors.tipo && (
              <p className="text-danger">{errors.tipo.message}</p>
            )}
          </div>

          <div className="col-10 mb-2">
            <label htmlFor="colFormLabel">Descripción:</label>
            <textarea
              type="text"
              rows="3"
              className="form-control"
              id="floatingInput"
              placeholder="Ingrese descripción del antecedente"
              {...register("descripcion", {
                required: "El campo descripción es requerido",
              })}
            />{" "}
            {errors.descripcion && (
              <p className="text-danger">{errors.descripcion.message}</p>
            )}
          </div>
          <div className="col-5 mb-2 text-start">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => navigate("/")}
            >
              Volver
            </button>
          </div>
          <div className="col-5 mb-2 text-end">
            <button type="submit" className="btn btn-primary btn-sm">
              Agregar Antecedente
            </button>
          </div>
          <hr />
          <div>
            <label htmlFor="estudios">Subir estudios médicos:</label>
            <input type="file" id="estudios" onChange={handleFileInputChange} />
          </div>
          <button type="button" onClick={handleFileUpload}>
            Subir
          </button>
        </form>
      </div>
    </div>
  );
};

export default HistorialClinico;
