import React from "react";
import styles from "./contactanos.module.css";

const Contactanos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quieres comunicarte con nosotros?</h1>
      <h2 className={styles.subtitle}>Contactanos!</h2>
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
      <div>
        <img
          src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341173446_1448950442513378_681941906338583976_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=WYozNEdUn2oAX9h0fq1&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfBTLWOvNUJpIxF0PecC3T3tCZkSGkYZtbGi4HHwpAyO2w&oe=643E515E"
          alt="medicos"
        />
      </div>
    </div>
  );
};

export default Contactanos;
