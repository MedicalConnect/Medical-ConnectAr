import React from "react";
import "./Planes.css"
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const PagoPublico = () => {
  const navigate = useNavigate();

    const servicios = 
      {
        nombre:'Pago de servicio',
        detalle: "Acceso mensual al servicio de videoconsultas medicas con todos sus beneficios incluidos",
        imagen: "https://media.discordapp.net/attachments/1094314281123717200/1102746280511422534/pago.jpeg?width=718&height=718",
        precio: 5000
      }
    
      const warning_login = () => {
        new swal('Debes crear una cuenta e ingresar a la misma para contratar nuestro servicio', '', 'success')
        navigate(`/ingresopaciente`)
      }
    
  
    return (
      <>
        <div>
          <div className="container text-center">
            <div className="row row-cols-2">
              <div className="col-12">
                <h1 className="subtitulos">Nuestro Servicio</h1>
              </div>
              <div className="col-12">
                <p className="fst-italic fw-medium fs-5">
                Contamos con una cobertura, con amplios beneficios, para entregarte una mejor experiencia del servicio
                <br /> a un precio accesible.
                </p>
                <div className="warning">
                  <img src="https://media.discordapp.net/attachments/1094314281123717203/1099843982449709236/alerta.png?width=718&height=718" /><p className="fs-5">Para gestionar correctamente el pago es necesario que tenga habilitado en su navegador la posibilidad de abrir pestañas emergentes,
                  antes de tocar el boton <strong>Contratar</strong></p>
                  
                </div>
               <div className="planes">
                  <ul>
                  <li> ✔️ Atención Médica General por videollamada durante las 24hs con médicos de nuestro staff</li>
                  <li> ✔️ Diagnóstico certero e informacion sobre tu tratamiento</li>
                  <li> ✔️ Envío de recetas, órdenes médicas y licencias médicas en formato digital</li>
                  </ul>
                </div>
  
              </div>
            </div>
          </div>
  
          <div className="container text-center cajaplantitulo">
            <div className="row row-cols-2">
       
            <div className="col">
      <div className="padretarjetaplan1">
        <div className="hijotarjetaplan1">
          <img className="imagen" src={servicios.imagen}></img>
          <p className="detalle">{servicios.detalle}</p>
          <p className="precio">${servicios.precio}</p>
          {/* {alert('Por favor, permita las ventanas emergentes para este sitio web.')} */}
          <button
            onClick={() => {
              // intentarConectar()
              warning_login()
              

            }}
          >
            Contratar
          </button>
        </div>
      </div>
    </div>
  );

         
              </div>
            </div> 
            
          <div className="container text-left cajaimgtxt">
          <div className="row row-cols-2">
            <div className="col-8 cuadrotexto">
              <h3 className="titulocomo fs-3 subtitulos">
              Lo que nos mueve!
              </h3>
              <p>
              Accederás a tus atenciones sin copago ni deducibles.
              </p>
              <p>
              Los medicamentos están incluidos en la atención (orales, inyectables y nebulizadores).
              </p>
              <p>
              Podrás ingresar a miembros de tu grupo familiar para entregarles el mejor cuidado.
              </p>
              <p>Tendrás la seguridad de contar con asistencia médica cercana y resolutiva, 24/7.</p>
            </div>
            <div className="col-4">
              <img
              className='imagencuadro rounded-start-pill'
                src="https://media.discordapp.net/attachments/1094314281123717203/1099845435067203624/dibujado-mano-ilustracion-medicos-enfermeras_23-2148903885.jpg?width=718&height=718"
                alt=""
              />
            </div>
          </div>
        </div>
  
  
  
        </div>
      </>
    )
  }
  
  export default PagoPublico;
  