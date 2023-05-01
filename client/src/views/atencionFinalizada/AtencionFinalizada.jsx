import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import apiUrl from "../../helpers/apiUrl";
import axios from "axios";
import logoImg from "../../helpers/img/medical-connect-transparen.png";

const AtencionFinalizada = () => {
  const userlogin = useSelector((state) => state.userLogin);
  const [numEstrellas, setNumEstrellas] = useState(0);
  const navigate = useNavigate();
  const { atencionId } = useParams();
  const [atencion, setAtencion] = useState(null);
  const [loadingAtencion, setLoadingAtencion] = useState(false);
  const [loadingRating, setLoadingRating] = useState(false);

  const seleccionarEstrella = async (numeroEstrella) => {
    setLoadingRating(true);
    setNumEstrellas(numeroEstrella);

    try {
      const response = await axios.put(`${apiUrl}/atenciones`, {
        field: "rating",
        data: numeroEstrella,
        atencionId,
      });
      setLoadingRating(false);
    } catch (error) {
      setLoadingRating(false);
      setNumEstrellas(0);
    }
  };

  const getVideoconsulta = async () => {
    setLoadingAtencion(true);
    try {
      const response = await axios.get(
        `${apiUrl}/atenciones/videoconsulta/${atencionId}`
      );
      const data = response.data;
      console.log({ data });
      if (
        data.PacienteId !== userlogin?.id ||
        (data.status !== "finalizada" && data.status !== "cancelada")
      ) {
        navigate("/");
      }
      setNumEstrellas(Number(data.rating));
      setAtencion(data);
      setLoadingAtencion(false);
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (atencionId && userlogin) {
      getVideoconsulta();
    }
  }, [atencionId, userlogin]);

  if (loadingAtencion) {
    return (
      <div className="text-center" style={{ height: "31vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-between mx-2">
      <div className="col-12 text-center mb-5">
        <h1>
          {atencion?.status === "finalizada"
            ? "Atencion médica finalizada con exitó"
            : "Atencion médica cancelada :("}
        </h1>
      </div>

      {atencion?.status === "finalizada" && (
        <>
          <div className="col-12 col-sm-6 row justify-content-between mt-2">
            <h2 className="m-4 text-start">
              Gracias por utilizar el servicio de Medical Connect
            </h2>
            <p className="ps-5 my-3">No olvides descargar tu certificado.</p>
            <p className="ps-5 my-3">
              Recorda que podes visitar nuestra pagina "contribuciones sociales
              ❤️", para conocer la propuesta de colaboracion de Medical Connect
              con la comunidad!!
            </p>
            <p className="ps-5 my-3">
              Perdiste tu certificado? no te preocupes! ingresa a tu perfil y
              podras descargarlo nuevamente!
            </p>
            <p className="ps-5 my-3">
              Recomenda Medical Connect a tu familia y amigos, tu plataforma
              favorita donde priorizamos tu salud a un click de distancia.
            </p>
            <div className="col-12row justify-content-between ">
              <button className="col-5 my-3" type="button">
                descargar certificado medico
              </button>

              <button
                className="col-5 my-3 btn btn-primary"
                type="button"
                onClick={() => navigate("/")}
              >
                Volver a mi perfil
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6 row justify-content-between mt-2 p-2">
            <div className="card">
              <img
                src={logoImg}
                className="card-img-top mx-auto mt-3"
                style={{ width: "20vw" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Fuiste atendido por el doctor{" "}
                  {`${atencion?.Doctor?.nombre} ${atencion?.Doctor?.apellido}`}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary my-3">
                  ¿Del 1 al 5 que tan conforme esta con la atencion recibida?
                </h6>

                <div className="row justify-content-center my-4 py-1">
                  {[1, 2, 3, 4, 5].map((start) => {
                    return (
                      <div
                        className="col-2"
                        style={{ cursor: !numEstrellas && "pointer" }}
                        onClick={() =>
                          !numEstrellas && seleccionarEstrella(start)
                        }
                      >
                        <FontAwesomeIcon
                          icon={
                            numEstrellas >= start ? faStarSolid : faStarRegular
                          }
                        />
                      </div>
                    );
                  })}
                </div>
                {!!numEstrellas && loadingRating && (
                  <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                {!!numEstrellas && !loadingRating && (
                  <h6 className="text-center">Gracias por votar!</h6>
                )}
              </div>
              <small className="card-footer mb-2 text-body-secondary bg-white border-0 my-3">
                * Esta información nos ayuda a continuar brindando el mejor
                servicio
              </small>
            </div>
          </div>
        </>
      )}

      {atencion?.status === "cancelada" && (
        <>
          <div className="col-12 col-sm-6 row justify-content-between mt-2">
            <h2 className="m-4 text-start">
              Gracias por utilizar el servicio de Medical Connect
            </h2>
            <p className="ps-5 my-3">Su atención fue cancelada por el médico</p>
            <p className="ps-5 my-3">
              Si considera que fue un error o necesita la atención, puede volver
              a solicitarla o comunicarse con nuestro centro de soporte
            </p>
            <p className="ps-5 my-3">
              Recorda que podes visitar nuestra pagina "contribuciones sociales
              ❤️", para conocer la propuesta de colaboracion de Medical Connect
              con la comunidad!!
            </p>
            <p className="ps-5 my-3">
              Recomenda Medical Connect a tu familia y amigos, tu plataforma
              favorita donde priorizamos tu salud a un click de distancia.
            </p>
            <button
              className="my-3 btn btn-primary"
              type="button"
              onClick={() => navigate("/")}
            >
              Volver a mi perfil
            </button>
          </div>
          <div className="col-12 col-sm-6 row justify-content-between mt-2 p-2">
            <div className="card">
              <img
                src={logoImg}
                className="card-img-top mx-auto mt-3"
                style={{ width: "20vw" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Fuiste atendido por el doctor{" "}
                  {`${atencion?.Doctor?.nombre} ${atencion?.Doctor?.apellido}`}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary my-3">
                  ¿Del 1 al 5 que tan conforme esta con la atencion recibida?
                </h6>

                <div className="row justify-content-center my-4 py-1">
                  {[1, 2, 3, 4, 5].map((start) => {
                    return (
                      <div
                        className="col-2"
                        style={{ cursor: !numEstrellas && "pointer" }}
                        onClick={() =>
                          !numEstrellas && seleccionarEstrella(start)
                        }
                      >
                        <FontAwesomeIcon
                          icon={
                            numEstrellas >= start ? faStarSolid : faStarRegular
                          }
                        />
                      </div>
                    );
                  })}
                </div>
                {!!numEstrellas && loadingRating && (
                  <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                {!!numEstrellas && !loadingRating && (
                  <h6 className="text-center">Gracias por votar!</h6>
                )}
              </div>
              <small className="card-footer mb-2 text-body-secondary bg-white border-0 my-3">
                * Esta información nos ayuda a continuar brindando el mejor
                servicio
              </small>
            </div>
          </div>
        </>
      )}
    </div>
    // <div className={styles.contenedor}>
    //   <div>
    //     <button className={styles.boton}>descargar certificado medico</button>
    //     <h1 className={styles.title}>Atencion médica finalizada con exito</h1>

    //     <h2 className={styles.subtitle}>
    //       Gracias por utilizar el servicio de Medical Connect
    //     </h2>
    //     <div>
    //       <ul className={styles.desordenada}>
    //         <li>No olvides descargar tu certificado.</li>
    //         <li>
    //           Recorda que podes visitar nuestra pagina "contribuciones sociales
    //           ❤️", para conocer la propuesta de colaboracion de Medical Connect
    //           con la comunidad!!
    //         </li>
    //         <li>
    //           Perdiste tu certificado? no te preocupes! ingresa a tu perfil y
    //           podras descargarlo nuevamente!
    //         </li>
    //         <li>
    //           Recomenda Medical Connect a tu familia y amigos, tu plataforma
    //           favorita donde priorizamos tu salud a un click de distancia.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className={styles.contenedorTarjeta}>
    //     <img
    //       className={styles.imagenLogo}
    //       src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/340966044_602214545296808_1179848363389618222_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=a35USalSwDMAX-YuH2k&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfCz12J9mJFEyW2-_Z0Ywd78abW7rIuxW1aCQabkhnYbyw&oe=6440FA01"
    //       alt="logo"
    //     />
    //     <div className={styles.textoTarjeta}>
    //       <h3>Fuiste atendido por el doctor {`${userlogin?.nombre}`}</h3>
    //       <p className={styles.texto2}>
    //         Estas conforme con la atencion recibida? si es asi, valora
    //         positivamente al profesional que te atendio, esto le sirve mucho
    //         para continuar brindando el mejor servicio.
    //       </p>
    //       <div className="rating">
    //         <div id="valoracion">
    //           <label>
    //             <input
    //               type="radio"
    //               name="estrellas"
    //               onClick={() => seleccionarEstrella(1)}
    //               defaultChecked={numEstrellas >= 1}
    //             />
    //             <FontAwesomeIcon
    //               icon={numEstrellas >= 1 ? faStarSolid : faStarRegular}
    //             />
    //           </label>
    //           <label>
    //             <input
    //               type="radio"
    //               name="estrellas"
    //               onClick={() => seleccionarEstrella(2)}
    //               defaultChecked={numEstrellas >= 2}
    //             />
    //             <FontAwesomeIcon
    //               icon={numEstrellas >= 2 ? faStarSolid : faStarRegular}
    //             />
    //           </label>
    //           <label>
    //             <input
    //               type="radio"
    //               name="estrellas"
    //               onClick={() => seleccionarEstrella(3)}
    //               defaultChecked={numEstrellas >= 3}
    //             />
    //             <FontAwesomeIcon
    //               icon={numEstrellas >= 3 ? faStarSolid : faStarRegular}
    //             />
    //           </label>
    //           <label>
    //             <input
    //               type="radio"
    //               name="estrellas"
    //               onClick={() => seleccionarEstrella(4)}
    //               defaultChecked={numEstrellas >= 4}
    //             />
    //             <FontAwesomeIcon
    //               icon={numEstrellas >= 4 ? faStarSolid : faStarRegular}
    //             />
    //           </label>
    //           <label>
    //             <input
    //               type="radio"
    //               name="estrellas"
    //               onClick={() => seleccionarEstrella(5)}
    //               defaultChecked={numEstrellas >= 5}
    //             />
    //             <FontAwesomeIcon
    //               icon={numEstrellas >= 5 ? faStarSolid : faStarRegular}
    //             />
    //           </label>
    //           {voted ? <p>Gracias por votar!</p> : null}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AtencionFinalizada;
