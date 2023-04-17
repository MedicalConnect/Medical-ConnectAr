import React from "react";
import { useState } from "react";
import styles from "./contribucionesSociales.module.css";
import emailjs from "@emailjs/browser"
import { Link } from "react-router-dom";

const ContribucionesSociales = () => {
  const USER_ID= 'G4I9JfqnlE5RMAZOT', 
  TEMPLATE_ID= 'template_44ts0cv',
  SERVICE_ID= 'service_1yi776n'


  const sendEmail = (event) => {
    event.preventDefault();
 
    event.preventDefault();
    const form = event.target;
    const email = form.elements["user_email"].value;
    const name = form.elements["user_name"].value;
    const phone = form.elements["user_phone"].value;
    const address = form.elements["user_address"].value;
    const message = form.elements["user_message"].value;
  
    if (!name || !email || !message || !phone || !address) {
      alert("Por favor complete los campos requeridos.");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return;
    }

    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,form,USER_ID)
    .then(alert("Mensaje Enviado"))
    .then(response => console.log(response.text))
    .then(form.reset)
    .catch(error => console.log(error.text))

  }
  

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Contribuciones Sociales</h1>
        <div>
          <h2 className={styles.subtitle}>
            Nuestro compromiso es entregar a la comunidad atenciones de salud
            sin costo, donde y cuando lo necesiten, brindando alivio inmediato y
            oportuno.
          </h2>
        </div>
        <div className={styles.imgTitleContainer}>
          <div className={styles.titleSubtitle}>
            <h2 className={styles.title2}>En que consiste esto?</h2>
            <h3 className={styles.subtitle2}>
              Son operativos médicos sociales en donde los vecinos reciben
              atenciones de nuestros servicios de MedicalConnect!
            </h3>
            <div className={styles.imgContainer}>
              <img
                className={styles.imgDoctor}
                src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/340928847_1495327034328694_3067556501508100744_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=B29i8m121SUAX_WSM35&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfAVeywqm_ZdklQ7kDSjcyyFk3i4kFITyTcQQuftfVlV0g&oe=643D8E73"
                alt="medicoimg"
              />
            </div>
          </div>
        </div>
        <div className={styles.text1y2Container}>
          <div className={styles.textContainer}>
            <h3>Quienes puede participar?</h3>
            <p>
              Todos los vecinos de un territorio determinado. Inscribiéndose con
              el presidente o presidente de su Junta de Vecinos.
            </p>
          </div>
          <div className={styles.text2Container}>
            <h3>¿Cómo puedes inscribirte?</h3>
            <p>
              Difunde esta informacion con el presidente o presidenta de tu
              Junta de Vecinos.
            </p>
            <br />
            <p>Solicita los antecedentes generales de tu comunidad.</p>
            <br />
            <p>
              Una vez que tengas estos datos, inscríbete en el siguiente
              formulario.
            </p>
            <br />
          </div>
        </div>
        <div>
          <p className={styles.linear}>
            _____________________________________________________________________________________________________________________________________________________________________
          </p>
        </div>
        <div className={styles.formimg2}>
          <form className={styles.form}  onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name"/>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" name="user_email" />
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="user_phone" />
            <label htmlFor="domicilio">Domicilio: </label>
            <input type="text" id="domicilio" name="user_address"  />
            <label htmlFor="descripcion">Escribinos:</label>
            <textarea
              className={styles.textDescription}
              id="descripcion"
              placeholder="En que te podemos ayudar?..."
              rows="10"
              cols="30"
              name="user_message"
          
            ></textarea>
            <button
              className={styles.enviar}
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Enviar
            </button>
          </form>

          <div>
            <img
              className={styles.img2}
              src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341165222_580347680534785_8975575067449690674_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=jJUZx9VJD_sAX9neXwE&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfA5mBvAgtp9L8RkTiB2jcJNtS7yG1AwnWEbSVhyMvjDnQ&oe=643DD0B4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContribucionesSociales;
