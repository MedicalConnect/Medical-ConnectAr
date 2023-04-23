import React from "react";

const PlanesDisplayer = ({serv}) => {
return (
    <div>
         <p>{serv.nombre}</p>
     <p>{serv.detalle}</p>
     <p>{serv.imagen}</p>
     <p>{serv.precio}</p>

     <button onClick={()=>{
      axios.post('http://localhost:3001/pagos', serv).then((res) => window.location.href = res.data.init_point)
     }}>
      Contratar
     </button>

    </div>
)
}

export default PlanesDisplayer