import React from "react";
import "./SalaDeEspera.css"
import {Link} from "react-router-dom"

const SalaDeEspera = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            {" "}
            <h2>
              Hola .. en breve iniciara la videoconsulta con <br /> uno de
              nuestros profesionales
            </h2>
          </div>
          <div className="col-12">
            {" "}
            <p>
              Mientras esperas, mira todo lo que tiene Medical Connect para
              ofrecerte!...
            </p>
          </div>
        </div>
      </div>

      <div className="contenedorcajas">
        <div className="contenedorloader">
        <div className="loader ">
  <div >
    <ul>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
    </ul>
  </div><span className="cargando">Cargando Reunion...</span></div>
        </div>

        <div className="contenedoradd">
       
      <div
        id="testimonios-carrusel"
        className="carousel carousel-dark slide acomodar"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <img
                className="testimonio-imagen rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HfLJDX5VQoJBnyUYfd_tPWJ8wII7KU_FQQ&usqp=CAU"
                alt="Foto de Gino"
              />
              <p className="testimonio-texto">
              Acordate de puntuar al medico despues de terminar la consulta!
              Con esto nosotros podemos saber que medicos son los mas recomendados para nuestros usuarios,
              En caso que tengas una mala experiencia, acordate de que ademas de puntuar, podes enviar un feedback de la situacion en concreto 
              en nuestro apartado de 'Atencion Al Cliente' 
              </p>
              <div className="testimonio-info">
              <Link to="/" target="_blank">
                <button className="cliente correcion">
                Nuestros planes!
                </button>
               </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src="data:image/jpeg;base64,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"
                alt="Foto de Leonardo"
              />
              <p className="testimonio-texto">
                Tenemos diferentes planes acorde a tus necesidades!<br/>
                Podes acceder a ellos entrando a nuestra seccion de planes que tenemos disponibles para vos.
              </p>
              <div className="testimonio-info">
                
               <Link to="/planes" target="_blank">
                <button className="cliente botonsito">
                Nuestros planes!
                </button>
               </Link>
              
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fME90r2PEo9saYlRxlID7efUmaZpxrUWjH4LkaRaDf-c-ItKu8LWvGAj2nyHwnUpCh8&usqp=CAU"
                alt="Foto de Nora"
              />
              <p className="testimonio-texto">
                Si detectas algo anormal o un mal funcionamiento de nuestra pagina,
                podes avisarnos desde nuestra seccion de soporte tecnico, agradecemos
                cada ayuda que nos envian o cualquier problema que deseen que les informemos o solucionemos
              </p>
              <div className="testimonio-info">
              <Link to="/" target="_blank">
                <button className="cliente botonsoporte">
                Nuestro equipo de soporte tecnico!
                </button>
               </Link>
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
      </div>
    </div>
  );
};

export default SalaDeEspera;
