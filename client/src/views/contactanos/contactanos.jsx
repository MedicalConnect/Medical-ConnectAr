import React from "react";
import styles from "./contactanos.module.css";
import { Link } from "react-router-dom";

const Contactanos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h1>navBar</h1>
      </div>
      <Link to="/">
        <img
          className={styles.imgLogo}
          src="https://media.discordapp.net/attachments/1094314281123717204/1095855765731950712/Mi_proyecto_1.png"
        />
      </Link>
      <h1 className={styles.title}>Quieres comunicarte con nosotros?</h1>
      <h2>Contactanos!</h2>
      <div className={styles.page}>
        <form className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" />
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" />
          <label htmlFor="domicilio">Domicilio: </label>
          <input type="text" id="domicilio" />
          <label htmlFor="descripcion">Escribinos:</label>
          <textarea
            className={styles.textDescription}
            id="descripcion"
            placeholder="En que te podemos ayudar?..."
            rows="10"
            cols="30"
          ></textarea>
          <button
            className={styles.enviar}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Enviar
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <h3>footer</h3>
      </div>
    </div>
  );
};

export default Contactanos;
