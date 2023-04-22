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
                  <h3>{serv.nombre}</h3>
                  <img src={serv.imagen}></img>
                  <p>{serv.detalle}</p>
                  <p>$ {serv.precio}</p>
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

