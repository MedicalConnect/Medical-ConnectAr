import { React, useState, useEffect } from "react";
import styles from "./videoconsulta.module.css";
import arrMedicamentos from "../../helpers/medicamentos.js";
import arrDiagnosticos from "../../helpers/diagnosticos.js";
import { Await, useParams } from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form"

function Videoconsulta() {
  const {atencionId}=useParams()
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);
  const [atencion, setAtencion] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const { register, watch, formState: {errors}, setError ,setValue, getValues,resetField, handleSubmit, } = useForm();

  const updateVideoConsulta= async ({value,field}) => {
    // console.log({target:e.target.value,name:e.target.name});
    console.log({value,field});
    try{
      const response = await axios.put(
        `http://localhost:3001/atenciones`,{field,data:value,atencionId}
      );
      setRefresh(!refresh)
     } catch(error) {
       console.log({error})
     }
  }

  const getVideoconsulta= async ()=>{
     try{
      const response = await axios.get(
        `http://localhost:3001/atenciones/videoconsulta/${atencionId}`
      );
      const data = response.data;
      console.log(data);
      // Object.entries(data)?.forEach((key,value)=>setValue(key,value))
      setValue("anamnesis",data.anamnesis)
      setAtencion(data)
     } catch(error) {
       console.log({error})
     }
  }

  const addDiagnostico = async () => {
    const cie10 = getValues("CIE10")
    const diagnosticoClinico= getValues("diagnosticoClinico")
    if (!cie10){
       setError('CIE10', { type: 'custom', message: 'El campo CIE10 es requerido' });
       return 
    }
    if (!diagnosticoClinico){
      setError('diagnosticoClinico', { type: 'custom', message: 'El campo diagnostico es requerido' });
      return
    }
  
   await updateVideoConsulta({field:"diagnostico",value:[...atencion.diagnostico,{diagnostico:diagnosticoClinico,CIE10:cie10}]})
   resetField("CIE10")
   resetField("diagnosticoClinico")
  }

  useEffect(() => {
    if(atencionId){
      getVideoconsulta()
    }
    setDiagnosticos(arrDiagnosticos);
    setMedicamentos(arrMedicamentos);
  }, [refresh,atencionId]);
  

  return (
    <div>
      <h1 className={styles.title}>Atención Medica en curso</h1>
      <br />
      <div className={styles.contenedor}>
        <div className={styles.cajapaciente}></div>
        <form className={styles.formulario}>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Anamnesis:{" "}
            </label>
            <div className="col-sm-10">
            <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="anamnesis"
                 
                  {...register("anamnesis",{
                    required:"El campo anamnesis es requerido",
                    onBlur: (e) => updateVideoConsulta({value:e.target.value,field:e.target.name})
                  })}
                /> {errors.anamnesis && <p>{errors.anamnesis.message}</p>}
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Hallazgos, examen fisico:
            </label>
            <div className="col-sm-10">
            <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="examen fisico"
                 
                  {...register("examen_fisico",{
                    required:"El campo examen fisico es requerido",
                    onBlur: (e) => updateVideoConsulta({value:e.target.value,field:e.target.name})
                  })}
                /> {errors.examen_fisico && <p>{errors.examen_fisico.message}</p>}
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="mb-3">
            {atencion?.diagnostico?.map((diagnostico)=>{
              const cie10=arrDiagnosticos.find(dia=>dia.c===diagnostico.CIE10)
              return (<div className="border border-primary rounded pe-4 mb-1">
                <div className="mb-3">
                 <input type="text" className="form-control" placeholder={`${cie10.c} - ${cie10.d}`} disabled/>
                </div>
                <div className="mb-3">
                 <textarea className="form-control" rows="2" placeholder={diagnostico.diagnostico} disabled/>
                </div>
             </div>)
            })}
          </div>
          <div className="row mb-3">
            <div>
              <label htmlFor="diagnostico">Diagnostico clinico:</label>
              <select className={styles.diagnostico} 
                 {...register("CIE10",{
                  required:"El campo examen fisico es requerido",
                
                })}>
                  <option value={null}>Seleccionar Diagnostico CIE-10</option>
                {arrDiagnosticos.map((diagnostico) => (
                  <option key={diagnostico.c} value={diagnostico.c}>
                    {diagnostico.c} - {diagnostico.d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Diagnostico:
            </label>
            <div className="col-sm-10">
            <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="diagnostico"
                 
                  {...register("diagnosticoClinico",{
                    required:"El campo diagnostico es requerido",
                  })}
                /> {errors.diagnosticoClinico && <p>{errors.diagnosticoClinico.message}</p>}
                <button type="button" className="btn btn-primary btn-sm" onClick={()=>addDiagnostico()}>Agregar Diagnostico</button>
            </div>
          </div>
          <div className="row mb-3">
            <h4>Indicaciones domiciliarias</h4>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="tratamiento de heridas, dietas, etc..."
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Detalle:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Comentarios:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="ampliar indicaciones..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <h4>Medicamentos</h4>
            <div className="row mb-3">
              <div>
                <label htmlFor="medicamento">Medicamento:</label>
                <select className={styles.medicamento}>
                  {medicamentos.map((medicamento, index) => (
                    <option key={index} value={medicamento.nombre}>
                      {medicamento.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Dosis:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Vía:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Frecuencia:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Indicaciones Adicionales::{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <h4>Solicitud de Examen:</h4>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de examen medico: :{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="row mb-3">
            <h4>Certificado</h4>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de certificado:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de indicacion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Fecha de inicio:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="colFormLabel"
                placeholder="resumen..."
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Lugar de presentacion:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                placeholder="empresa, entidad..."
              />
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <button className={styles.boton} type="submit">
            Finalizar consulta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Videoconsulta;
