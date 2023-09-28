import React, { useEffect } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { setUserLogin } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import persona from "../../helpers/img/business-people.png";

function Landing() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.userLogin);

  useEffect(() => {
    const userLogin1 = localStorage.getItem("userInfo");
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
      <div className="container ">
        <div className="row topheader">
          <div className="col"></div>
          <div className="col-9 text-center">
            <h1 className="fw-bold ">Medical Connect te da la Bienvenida!</h1>
            <br />
            <p className="fw-semibold subtitulo1">
              {" "}
              Te invitamos a formar parte de este servicio en el cual podras
              recibi las mejores atenciones desde cualquier parte de capital
              federal que te encuentres!
            </p>
            <br />
            <br />
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="contenedorflex">
        <img src="https://fondosmil.com/fondo/56989.jpg" alt="" />
        <div className="divaviso fw-semibold">
          <p>Registrate y accede a diferentes funciones!</p>
          <Link to="/creacionpaciente" target="_blank">
            <button type="button" className="btn btn-lg boton1">
              Registrarse como paciente
            </button>
          </Link>
          <Link to="/creacionmedico" target="_blank">
            <button type="button" className="btn btn-lg boton2">
              Registrarse como Profesional de salud
            </button>
          </Link>
        </div>
      </div>

      <div className="container topheader">
        <div className="row ">
          <div className="col"></div>
          <div className="col-9 text-center">
            <h2 className="fw-bold fs-1 titulolanding2">
              Que es Medical Connect?
            </h2>
            <p className="fst-italic fw-medium subtitulolanding2">
              {" "}
              Somos una red de servicios que integra lo mejor de la medicina
              domiciliaria y telemedicina, creando un nuevo concepto en salud,
              más accesible y resolutivo, disponible en todo momento y lugar.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card1">
              <img
                src="https://media.discordapp.net/attachments/1094314281123717203/1099833537202499644/linda-tierra-feliz-gran-corazon-rojo-planeta-dibujos-animados-sonriendo-vector-ilustracion-aislada_502651-144.jpg?width=718&height=718"
                className="card-img-top carta"
                alt=""
              />
              <div className="card-body">
                <h4>Accesibilidad completa</h4>
                <p className="card-text">
                  Asistencia médica 24/7 donde los pacientes lo requieran.
                </p>
              </div>
            </div>
          </div>

          <div className="col text-center">
            <div className="card1">
              <img
                src="https://media.discordapp.net/attachments/1094314281123717203/1099833877507350568/descarga.jpeg?width=426&height=474"
                className="card-img-top carta"
                alt=""
              />
              <div className="card-body">
                <h4>Alivio inmediato</h4>
                <p className="card-text">
                  Aliviamos los síntomas de forma inmediata, con un kit de
                  medicamentos.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card1">
              <img
                src="https://images-ext-2.discordapp.net/external/GFRxPD76XW3uqf-eVmViFv_YoLR33yS6kmkeRlAToeo/https/st2.depositphotos.com/1071184/6543/v/950/depositphotos_65434825-stock-illustration-doctor-showing-diagnoses.jpg?width=792&height=792"
                className="card-img-top carta"
                alt=""
              />
              <div className="card-body">
                <h4>Diagnóstico certero</h4>
                <p className="card-text">
                  Para un diagnóstico certero, usamos dispositivos de última
                  generación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-left divcomo">
        <div className="row row-cols-2">
          <div className="col-4 ">
            <h2 className="titulocomo fs-1 fw">
              ¿Cómo funciona el servicio de Medical Connect?
            </h2>
            <p className="fw-semibold">
              Recibe atención médica en tu hogar o lugar de trabajo,
              conectándote con nuestro servicio médico para cuidar tu salud de
              forma efectiva y segura.
            </p>
            <h4>
              <img className="iconobebe" src={persona} alt="" /> Crea tu cuenta
            </h4>
            <p>
              Llena los datos solicitados para brindarte la mejor atención. Si
              lo deseas, también puedes añadir a tus cargas luego de registrarte
            </p>
            <h4>
              <img
                className="iconobebe"
                src="https://media.discordapp.net/attachments/1094314281123717200/1099849152462077962/seguro-de-salud.png?width=792&height=792"
                alt=""
              />{" "}
              Solicita una atención
            </h4>
            <p>
              ¡Así de sencillo! Ya puedes atenderte con nosotros y recibir
              atenciones médicas.
            </p>
            <h4>
              <img
                className="iconobebe"
                src="https://w7.pngwing.com/pngs/553/526/png-transparent-notepad-computer-icons-others-angle-text-rectangle-thumbnail.png"
                alt=""
              />{" "}
              Accede a mas beneficios!
            </h4>
            <p>
              Para mas beneficios puedes checkear nuestros planes y acceder a
              ellos!
            </p>
          </div>
          <div className="col-8">
            <img
              className="padreimagen"
              src="https://thumbs.dreamstime.com/b/enfermera-m%C3%A9dica-tomando-sangre-de-ilustraci%C3%B3n-vectorial-dibujos-animados-voluntarios-aislados-la-caricatura-plana-voluntaria-205975051.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="padretarjeta">
        <div className="hijotarjeta">
          <h3>Servicio de suscripcion</h3>
          <p>
            Podrás contar con asistencia médica oportuna a un valor accesible,
            para ti y tu familia.
          </p>
          <Link to={"/planes"} target="_blank">
            <button>Nuestros Planes!</button>
          </Link>
        </div>
      </div>

      <div className="carruseltitulo">
        <div className="carruselfondo">
          <h2>Conoce la experiencia de nuestros usuarios</h2>
          <p>
            Una nueva forma de hacer salud, mas cercana, resolutiva y accesible
          </p>
          <Link to={"/quienessomos"} target="_blank">
            <button type="button" className="btn btn-outline-light">
              Conocenos mas !
            </button>
          </Link>
        </div>
      </div>

      <div
        id="testimonios-carrusel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src="https://media.discordapp.net/attachments/1094314281123717203/1099836761192009828/pexels-photo-6248821.webp?width=478&height=718"
                alt="Foto de Gino"
              />
              <p className="testimonio-texto">
                "Estoy muy agradecido por el servicio que recibí de Medical
                Connect. La plataforma de videollamadas es muy fácil de usar y
                el médico que me atendió fue muy amable y eficiente. Me
                diagnosticó rápidamente y me dio un tratamiento que me ayudó a
                sentirme mejor. Definitivamente recomendaría esta aplicación a
                cualquier persona que busque atención médica conveniente y
                confiable".
              </p>
              <div className="testimonio-info">
                <p className="cliente">Gino</p>
                <p className="cargo">Gerente de proyectos en desarrollo web</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src="https://media.discordapp.net/attachments/1094314281123717203/1099837191259177020/pexels-photo-3846049.jpeg?width=478&height=718"
                alt="Foto de Leonardo"
              />
              <p className="testimonio-texto">
                "Tuve una experiencia maravillosa con Medical Connect. Mi médico
                me atendió enseguida y fue muy detallado en su explicación de mi
                condición. La aplicación en sí es muy fácil de usar y estoy muy
                contenta con la calidad del servicio que recibí. Definitivamente
                volveré a usarla en el futuro".
              </p>
              <div className="testimonio-info">
                <p className="cliente">Nora</p>
                <p className="cargo">Director de Aprende a Programar</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <p className="testimonio-texto">
                "Medical Connect me sorprendió con su eficiencia y facilidad de
                uso. Nunca había tenido una consulta médica en línea, pero el
                médico que me atendió fue muy amable y profesional. Me sentí muy
                cómodo durante toda la consulta y me encantó no tener que salir
                de mi casa. Definitivamente lo recomiendo a cualquier persona
                que busque atención médica accesible y de calidad".
              </p>
              <div className="testimonio-info">
                <p className="cliente">Leonardo</p>
                <p className="cargo">Asador profesional</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Landing;
