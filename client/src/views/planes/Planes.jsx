import React from "react";
import "./Planes.css"
import axios from "axios";
import PlanesDisplayer from "./PlanesDisplayer";


const Planes = () => {
  const servicios = [
    {
      nombre:'Pago Invididual',
      detalle: "Acceso para 10 consultas por mes",
      imagen: "https://tuplandesaludpr.com/wp-content/uploads/2020/11/Untitled-design-15-1024x569.png",
      precio: 1000
    },
    {
      nombre:'Pago Familiar',
      detalle: 'Acceso para 30 consultas por mes',
      imagen: 'https://www.superquoter.com/wp-content/uploads/2016/09/41135920_xxl.jpg',
      precio: 5000
    }
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
              <p className="fst-italic fw-medium">
                Contamos con planes individuales y familiares diseñados para entregarte una mejor experiencia de servicio
                 Atención Médica General por videollamada durante las 24hs con nuestros médicos, para obtener un diagnóstico certero e informacion sobre tu tratamiento. 
                 Envío de recetas, órdenes médicas y licencias médicas en formato digital
                <br /> a precios accesibles y convenientes.
              </p>
            </div>
          </div>
        </div>
        <div>
    {servicios.map((serv) => <PlanesDisplayer serv={serv} key={serv.nombre}/> )}
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
              src="https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-medicos-enfermeras_23-2148903885.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
        </div>
      </div>



      </div>
    </>
  );
};

export default Planes;
