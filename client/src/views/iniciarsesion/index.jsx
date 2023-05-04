import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import compu from "../../helpers/img/monitor.png"

const IniciarSesion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.userLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleLogin = (e) => {
    localStorage.removeItem("reduce-state");
    dispatch(setUserLogin(e));
  };

  useEffect(() => {
    if (userlogin?.status_cuenta === "desactivada") {
      Swal.fire({
        icon: "error",
        title: "Tu cuenta ha sido desactivada!",
        text: "esto puede deberse por muchos motivos! , si cree que hubo un error porfavor comunicarse con atencion al cliente",
        footer: `<a href="http://127.0.0.1:5173/contactanos">Atencion al cliente</a>`,
      });
      return;
    }

    if (userlogin?.rol) {
      navigate(
        userlogin.rol === "paciente"
          ? "/perfilpaciente"
          : userlogin.rol === "admin"
          ? "/perfiladmin"
          : "/perfilmedico"
      );
    }
  }, [userlogin]);

  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col-12">
            <h2 className="subtitulos">
              Bienvenido, ingresa usuario y contraseña.
            </h2>
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <div className="row row-cols-2 ">
          <div className="col-6 ">
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit(handleLogin)} className="forma">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="E-mail o documento"
                  name="usuario"
                  {...register("usuario", {
                    required: "ingrese usuario",
                    minLength: { value: 4, message: "usuario no valido" },
                  })}
                />
                <label className="mx-2" htmlFor="floatingInput">
                  Numero de documento o Email
                </label>
                {errors.usuario && (
                  <span className="text-danger mx-3">
                    {errors.usuario.message}
                  </span>
                )}
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control select1"
                  id="floatingPassword"
                  placeholder="Password"
                  name="contraseña"
                  {...register("contraseña", {
                    required: "ingrese contraseña",
                    minLength: { value: 8, message: "contraseña no valida" },
                  })}
                />
                <label className="mx-2" htmlFor="floatingPassword">
                  Contraseña
                </label>
                {errors.contraseña && (
                  <span className="text-danger mx-3">
                    {errors.contraseña.message}
                  </span>
                )}
              </div>
              <br />
              <br />
              <button className="btnsubmit btn-lg" type="submit">
                Iniciar Sesion
              </button>
            </form>
          </div>
          <div className="col-6">
            <div className="logintexto1">
              <br />
              <br />
              <br />
            <p className="text-start fw-medium lh-1">

              Atiendase con los mas profesionales medicos que se encuentren
              disponibles la momento de su consulta!
            </p>
            <hr />
            <p className="text-start fw-medium lh-1">
             
              87% de los profesionales asegura haber mejorado el rendimiento de
              su consulta médica gracias a Medical Connect
            </p>
            <hr />
            <p className="text-start fw-medium lh-1">
            
              9 de cada 10 especialistas recomendarían Medical Connect a otro
              profesional de la salud. <br />
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
