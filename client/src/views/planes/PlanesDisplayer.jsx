import React from "react";
import axios from "axios";
import "./Planes.css";
import apiUrl from "../../helpers/apiUrl";
import swal from "sweetalert2";
import { useSelector } from "react-redux";

// const MAX_RETRIES = 5;
// const RETRY_DELAY = 1000; // tiempo de espera entre reintentos en milisegundos

// let retries = 0;

// function conectarBackend() {
//   // código para conectarse al backend
// }

// function intentarConectar() {
//   conectarBackend()
//     .then(() => {
//       // si la conexión se realiza con éxito, continuar con la ejecución
//       console.log("Conexión exitosa al backend");
//     })
//     .catch((error) => {
//       // si se produce un error, intentar nuevamente después de RETRY_DELAY milisegundos
//       retries++;
//       console.error(`Error al conectar con el backend. Reintentando en ${RETRY_DELAY}ms (${retries}/${MAX_RETRIES})`, error);
//       if (retries < MAX_RETRIES) {
//         setTimeout(intentarConectar, RETRY_DELAY);
//       } else {
//         console.error(`Se ha superado el número máximo de reintentos (${MAX_RETRIES}). Abortando la conexión.`);
//       }
//     });
// }

const PlanesDisplayer = ({ serv }) => {
  const userlogin = useSelector((state) => state.userLogin);
  const dni_paciente = userlogin.numero_de_documento;
  console.log(dni_paciente);

  const pago = () => {
    axios.post(`${apiUrl}/pagos/modelPago`, {
      dni_paciente: userlogin.numero_de_documento,
    });

    axios
      .post(`${apiUrl}/pagos`, serv)
      .then((res) => window.open(res.data.init_point, "_blank"))
      .then(
        new swal(
          "Gracias por solicitar nuestro servicio",
          "Seras redirigido a Mercado Pago para completar la transaccion. Asegurate de tener habilitadas las pestañas emergentes",
          "success"
        )
      );
  };

  return (
    <div className="col">
      <div className="padretarjetaplan1">
        <div className="hijotarjetaplan1">
          {/* <h3 className="nombre">{serv.nombre}</h3> */}
          <img className="imagen" src={serv.imagen}></img>
          <p className="detalle">{serv.detalle}</p>
          <p className="precio">${serv.precio}</p>
          <input type="hidden" value={userlogin.numero_de_documento} />
          {/* {alert('Por favor, permita las ventanas emergentes para este sitio web.')} */}
          <div className="textoadvertencia">
            <div>
              <img src="https://media.discordapp.net/attachments/1094314281123717203/1099843982449709236/alerta.png?width=718&height=718" />
            </div>
            <p>
              {" "}
              Si tu pago lo gestionaste con un nombre o email diferente al de tu
              cuenta en medicalConnect, porfavor una vez abonado enviarnos el
              comprobante con el DNI del usuario asociado
            </p>
          </div>
          <button
            onClick={() => {
              // intentarConectar()
              pago();
            }}
          >
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanesDisplayer;
