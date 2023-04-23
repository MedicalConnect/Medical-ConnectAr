import React from "react";
import axios from "axios";
import "./Planes.css"

const PlanesDisplayer = ({serv}) => {
  return (
      <div className="container text-center cajaplantitulo">
          <div className="row row-cols-2">
            <div className="col">
               
              <div className="padretarjetaplan">
                <div className="hijotarjetaplan">
                  <h3 className="nombre">{serv.nombre}</h3>
                  <img className="imagen" src={serv.imagen}></img>
                  <p className="detalle">{serv.detalle}</p>
                  <p className="precio">$ {serv.precio}</p>
                  {/* {alert('Por favor, permita las ventanas emergentes para este sitio web.')} */}
                  <button onClick={()=>{
                  axios.post('http://localhost:3001/pagos', serv).then((res) => window.open(res.data.init_point, '_blank'))
                  }}> 
                  Contratar
                  </button>

                </div>
                
              </div>
            </div>
          </div>
        </div> 
  )
}

export default PlanesDisplayer

