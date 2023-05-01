import React from "react";
import "./Planes.css"
import PlanesDisplayer from "./PlanesDisplayer";


const Planes = () => {
  const servicios = [
    {
      nombre:'Pago de servicio',
      detalle: "Acceso al servicio con todos sus beneficios",
      imagen: "https://media.discordapp.net/attachments/1094314281123717203/1099844324830748764/Untitled-design-15-1024x569.png?width=1292&height=718",
      precio: 1
    },
  ]

  return (
    <>
      <div>
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col-12">
              <h1 className="subtitulos">Nuestros Planes</h1>
            </div>
            <div className="col-12">
              <p className="fst-italic fw-medium fs-5">
                Contamos con planes diseñados para entregarte una mejor experiencia de servicio
                <br /> a precios accesibles y convenientes.
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
     
        {servicios.map((serv) => <PlanesDisplayer serv={serv} key={serv.nombre}/> )}
       
            </div>
          </div> 
           

        {/* <div className="container text-center cajaplantitulo">
          <div className="row row-cols-2">
            <div className="col">
              <div className="padretarjetaplan">
                <div className="hijotarjetaplan">


                  
                  <h3 >Plan Simple!</h3>
                  <p>
                    Podrás contar con asistencia médica oportuna a un valor
                    accesible para ti 
                  </p>
                  <button>Plan para vos solo!</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="padretarjetaplan">
                <div className="hijotarjetaplan">
                  <h3 >Plan Familiar!</h3>
                  <p>
                    Podrás contar con asistencia médica oportuna a un valor
                    accesible, para ti y tu familia.
                  </p>
                  <button>Plan para tu familia</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}





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

export default Planes;
