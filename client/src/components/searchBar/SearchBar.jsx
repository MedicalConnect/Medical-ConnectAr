import React, { useState }  from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserByNDocument } from '../../redux/actions/actions'
import "./SearchBar.css"

function SearchBar({activateStatePacient,desactivateStatePacient,activateStateDoctor,desactivateStateDoctor}) {
    const userByNumDocument = useSelector((state)=> state.userByNumDocument);
    const dispatch = useDispatch();
    const [numero_de_documento, setNumero_de_documento] = useState("")

    
const handlerInputChange = (e) => {
    setNumero_de_documento(e.target.value)
}

const  handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(getUserByNDocument(numero_de_documento))
    setNumero_de_documento("")
} 

  return (
    <div className='barrabusqueda'>
        <div>
        <input type="text" placeholder='Buscar Usuario...' value={numero_de_documento} onChange={handlerInputChange} />
        <button type='submit' onClick={handlerSubmit}>Buscar Usuario!</button>
        </div>
        { 
        userByNumDocument.user === "paciente" && 

        <div>
                 <div className="col-sm-2" >
                        <div className="card w-100 cartadiferencia">
                          <div className="card-body">
                          <h3>Paciente</h3>
                            <h5 className="card-title">
                              {userByNumDocument.tipo_de_documento}:{" "}
                              {userByNumDocument.numero_de_documento}
                            </h5>
                            <p className="card-text">Nombre: {userByNumDocument.nombre}</p>
                            <p className="card-text">
                              Apellido: {userByNumDocument.apellido}
                            </p>
                            <p className="card-text">email: {userByNumDocument.email}</p>
                            <p className="card-text">Estado de la cuenta: {userByNumDocument.status_cuenta}</p>
                            <div>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm anchobotonsito"
                                onClick={()=>desactivateStatePacient(userByNumDocument.numero_de_documento)}
                              >
                                Desactivar Cuenta
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm anchobotonsito"
                                onClick={()=>activateStatePacient(userByNumDocument.numero_de_documento)}
                              >
                                Habilitar Cuenta
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
        </div>}
        { 
        userByNumDocument.user === "doctor" && 
        
            <div className="col-sm-2">
            <div className="card w-100 cartadiferencia">
              <div className="card-body">
                <h3>Doctor</h3>
                <h5 className="card-title">
                  {userByNumDocument.tipo_de_documento}:{" "}
                  {userByNumDocument.numero_de_documento}
                </h5>
                <p className="card-text">Nombre: {userByNumDocument.nombre}</p>
                <p className="card-text">
                  Apellido: {userByNumDocument.apellido}
                </p>
                <p className="card-text">email: {userByNumDocument.email}</p>
                <p className="card-text">
                  especialidad: {userByNumDocument.especilidad}
                </p>
                <p className="card-text">Estado de la cuenta: {userByNumDocument.status_cuenta}</p>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm anchobotonsito"
                    onClick={()=>desactivateStateDoctor(userByNumDocument.numero_de_documento)}
                  >
                    Desactivar Cuenta
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm anchobotonsito"
                    onClick={()=>activateStateDoctor(userByNumDocument.numero_de_documento)}
                  >
                    Habilitar Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default SearchBar