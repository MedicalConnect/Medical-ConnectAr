import { React, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import styles from "./atencionFinalizada.module.css";

const AtencionFinalizada = () => {
  const userlogin = useSelector((state) => state.userLogin);
  const [numEstrellas, setNumEstrellas] = useState(0);
  const [voted, setVoted] = useState(false);

  const seleccionarEstrella = (numeroEstrella) => {
    setNumEstrellas(numeroEstrella);
    setVoted(true);
  };

  return (
    <div className={styles.contenedor}>
      <div>
        <button className={styles.boton}>descargar certificado medico</button>
        <h1 className={styles.title}>Atencion médica finalizada con exito</h1>

        <h2 className={styles.subtitle}>
          Gracias por utilizar el servicio de Medical Connect
        </h2>
        <div>
          <ul className={styles.desordenada}>
            <li>No olvides descargar tu certificado.</li>
            <li>
              Recorda que podes visitar nuestra pagina "contribuciones sociales
              ❤️", para conocer la propuesta de colaboracion de Medical Connect
              con la comunidad!!
            </li>
            <li>
              Perdiste tu certificado? no te preocupes! ingresa a tu perfil y
              podras descargarlo nuevamente!
            </li>
            <li>
              Recomenda Medical Connect a tu familia y amigos, tu plataforma
              favorita donde priorizamos tu salud a un click de distancia.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contenedorTarjeta}>
        <img
          className={styles.imagenLogo}
          src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/340966044_602214545296808_1179848363389618222_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=a35USalSwDMAX-YuH2k&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfCz12J9mJFEyW2-_Z0Ywd78abW7rIuxW1aCQabkhnYbyw&oe=6440FA01"
          alt="logo"
        />
        <div className={styles.textoTarjeta}>
          <h3>Fuiste atendido por el doctor {`${userlogin?.nombre}`}</h3>
          <p className={styles.texto2}>
            Estas conforme con la atencion recibida? si es asi, valora
            positivamente al profesional que te atendio, esto le sirve mucho
            para continuar brindando el mejor servicio.
          </p>
          <div className="rating">
            <div id="valoracion">
              <label>
                <input
                  type="radio"
                  name="estrellas"
                  onClick={() => seleccionarEstrella(1)}
                  checked={numEstrellas >= 1}
                />
                <FontAwesomeIcon
                  icon={numEstrellas >= 1 ? faStarSolid : faStarRegular}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="estrellas"
                  onClick={() => seleccionarEstrella(2)}
                  checked={numEstrellas >= 2}
                />
                <FontAwesomeIcon
                  icon={numEstrellas >= 2 ? faStarSolid : faStarRegular}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="estrellas"
                  onClick={() => seleccionarEstrella(3)}
                  checked={numEstrellas >= 3}
                />
                <FontAwesomeIcon
                  icon={numEstrellas >= 3 ? faStarSolid : faStarRegular}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="estrellas"
                  onClick={() => seleccionarEstrella(4)}
                  checked={numEstrellas >= 4}
                />
                <FontAwesomeIcon
                  icon={numEstrellas >= 4 ? faStarSolid : faStarRegular}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="estrellas"
                  onClick={() => seleccionarEstrella(5)}
                  checked={numEstrellas >= 5}
                />
                <FontAwesomeIcon
                  icon={numEstrellas >= 5 ? faStarSolid : faStarRegular}
                />
              </label>
              {voted ? <p>Gracias por votar!</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtencionFinalizada;
