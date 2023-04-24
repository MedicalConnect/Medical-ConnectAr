import React from "react";
import axios from "axios";
import "./Planes.css"

const PlanesDisplayer = ({serv}) => {
  return (
    <div className="col">
               
    <div className="padretarjetaplan1">
      <div className="hijotarjetaplan1">
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
                <strong><p className="aclaracion">* Una vez que hayas gentionado el pago, envíanos tu comprobante a <br/>medicalconnectar@gmail.com o +54 11 2325-5776 <br/> con TU numero de documento.</p></strong>
          </div> 
          </div>
                  
  )
}

export default PlanesDisplayer

