import { useState } from "react";
import React from "react";
import styles from "./contactanos.module.css";
import emailjs from "@emailjs/browser"
import {Link} from "react-router-dom"
import "./contactanos.css"
import { useLocalStorage } from "../../useLocaleStorage";
const Contactanos = () => {

  const [textArea, setTextArea] = useLocalStorage("texto","");
  const [nombre, setNombre] = useLocalStorage("nombre","");

  const USER_ID= 'G4I9JfqnlE5RMAZOT', 
  TEMPLATE_ID= 'template_qiagrdj',
  SERVICE_ID= 'service_1yi776n'

    const sendEmail = (event) => {
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
      .then(response => {
        alert("Mensaje Enviado");
        console.log(response.text);
        form.reset();
        setNombre("");
        setTextArea("");
      })
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
          <input type="text" id="name" name="user_name"    value={nombre}
            onChange={e=> setNombre(e.target.value)} />

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
            value={textArea}
            onChange={e=> setTextArea(e.target.value)}
          
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
              src="https://media.discordapp.net/attachments/1094314281123717203/1099542226670997565/3568984.jpg?width=1078&height=718"
alt="medicos"
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 cajaplanes">
          <div className="col">
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
          <div className="col">
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
