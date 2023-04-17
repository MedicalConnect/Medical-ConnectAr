import { useState } from "react";
import React from "react";
import styles from "./contactanos.module.css";
import emailjs from "@emailjs/browser"
import {Link} from "react-router-dom"

const Contactanos = () => {
  const USER_ID= 'G4I9JfqnlE5RMAZOT', 
  TEMPLATE_ID= 'template_qiagrdj',
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
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Quieres comunicarte con nosotros?</h1>
        <h2 className={styles.subtitle1}>
          ¡Solicita información y entrégale a tus colaboradores una salud más
          conectada!
        </h2>
      </div>
      <div className={styles.page}>
        <form className={styles.form} onSubmit={sendEmail}>
          <h2 className={styles.subtitle}>Contactanos!</h2>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="user_name"  />

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
          <div>
            <img
              className={styles.imagen}
              src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341173446_1448950442513378_681941906338583976_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=WYozNEdUn2oAX9h0fq1&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfBTLWOvNUJpIxF0PecC3T3tCZkSGkYZtbGi4HHwpAyO2w&oe=643E515E"
              alt="medicos"
            />
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">
            <div className="padretarjetaplan">
              <div className="hijotarjetaplan">
                <h3>Atención al cliente</h3>
                <p>
                  Estamos aquí para ayudarte en lo que necesites. Contactame si
                  tenes alguna pregunta o inquietud.
                </p>
                <Link target="_blank" to={"https://api.whatsapp.com/send?phone=541123255776&text=Hola%2C%20Quiero%20contactarme%20con%20Atencion%20al%20Cliente%20de%20Medical%20Connect!"}>
                <button>Contactar</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="padretarjetaplan">
              <div className="hijotarjetaplan">
                <h3>Soporte técnico</h3>
                <p>
                  Detectaste algun error en la pagina? no te preocupes! mandanos
                  un mail y lo resolvemos a la brevedad.
                </p>
                <Link target="_blank" to={"https://api.whatsapp.com/send?phone=5492945557886&text=Hola%2C%20Quiero%20contactarme%20con%20soporte%20tecnico%20de%20Medical%20Connect!"}>
                <button>Contactar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
