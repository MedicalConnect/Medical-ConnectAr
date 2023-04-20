import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

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
    dispatch(setUserLogin(e));
  };

  useEffect(() => {
    const userLogin1 = localStorage.getItem('userInfo');
    
    if (userLogin1) {
      dispatch(setUserLogin(JSON.parse(userLogin1)));
    }
  console.log(userLogin1);
    if (userlogin?.rol) {
      navigate(
        userlogin.rol === "paciente" ? "/perfilpaciente" : "/perfilmedico"
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
            <br />
            <br />
            <br />
            <p className="text-center fw-medium">
              <img
                className="pimg"
                src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341181751_556498566471662_5081762602676827150_n.jpg?stp=dst-jpg_p75x225&_nc_cat=111&ccb=1-7&_nc_sid=dbeb18&_nc_eui2=AeFJiUraNiHy43q9nZVEdDenIiY-C9Kc51kiJj4L0pznWSnLLdONKS77MQm9_9jecwMawbPnntQFr-iGVrwygjJh&_nc_ohc=pQQcABMtMnYAX8VPQpQ&_nc_oc=AQl4vMdIgvZaYp9DaR6vD7K1Jt0RNmBl9A2XaZ6pSMudyawjzfjCsv39480h7_WhnB8&_nc_ht=scontent.faep23-1.fna&oh=00_AfBkpyPbBDcZej2kcJOqd149I5nCSsJeoxtH6gEj-K7HaA&oe=643D27C6"
                alt="icono"
              />
              Atiendase con los mas profesionales medicos que se encuentren
              disponibles la momento de su consulta!
            </p>
            <p className="text-center fw-medium">
              <img
                className="pimg"
                src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341157176_173370802305756_8738341263779863854_n.jpg?stp=dst-jpg_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=dbeb18&_nc_eui2=AeGvhXmDiD38LBp2nNjud7ISHnEsyPAKcucecSzI8Apy58m_9GWSW4vg4q7X2FM34R5FAvVF51Ed2ZHRgPowrGX0&_nc_ohc=xKhWcfeQ6CQAX-rD9YR&_nc_ht=scontent.faep23-1.fna&oh=00_AfCxDXXnlYvtCz-VwvlmlIQ9rspUqqXhxciTYlJBZiCphA&oe=643D7453"
                alt=""
              />
              87% de los profesionales asegura haber mejorado el rendimiento de
              su consulta médica gracias a Medical Connect
            </p>
            <p className="text-center fw-medium">
              <img
                className="pimg"
                src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341169834_1045351673004491_2151599842251033685_n.jpg?stp=dst-jpg_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=dbeb18&_nc_eui2=AeFYVNvQSnOJohKb6ZyMlRhp5AsbIBD9J_DkCxsgEP0n8CmECHWVuLiUDqMymwIBCJvAy6pxXCFbj0xLCKsnJNbV&_nc_ohc=JC3MhOvr69AAX9USilB&_nc_ht=scontent.faep23-1.fna&oh=00_AfCycabIXrm5n3S8A3-tC-itYcLI8UmMZtSaRmjO90z3mQ&oe=643D9B26"
                alt=""
              />
              9 de cada 10 especialistas recomendarían Medical Connect a otro
              profesional de la salud. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
