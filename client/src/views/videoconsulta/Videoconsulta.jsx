import { React, useState, useEffect } from "react";
import styles from "./videoconsulta.module.css";
import { Link } from "react-router-dom";
import arrMedicamentos from "../../helpers/medicamentos.js";
import arrDiagnosticos from "../../helpers/diagnosticos.js";
import { Await, useParams } from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'

function Videoconsulta() {
  const {atencionId}=useParams()
  // const [diagnosticos, setDiagnosticos] = useState([]);
  // const [medicamentos, setMedicamentos] = useState([]);
  const [atencion, setAtencion] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const navigate = useNavigate()
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
      setValue("examen_fisico",data.examen_fisico)
      setValue("tipo",data.indicaciones_domiciliarias[0].tipo)
      setValue("detalle",data.indicaciones_domiciliarias[0].detalle)
      setValue("comentarios",data.indicaciones_domiciliarias[0].comentarios)

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

  const addIndDomiciliarias = async () => {
    const tipo = getValues("tipo")
    const detalle= getValues("detalle")
    const comentarios = getValues("comentarios")
    if (!tipo){
      setError('tipo', { type: 'custom', message: 'El campo tipo es requerido' });
      return 
   }
   if (!detalle){
     setError('detalle', { type: 'custom', message: 'El campo detalle es requerido' });
     return
   }
   if (!comentarios){
    setError('comentarios', { type: 'custom', message: 'El campo comentarios es requerido' });
    return
  }
  await updateVideoConsulta({field:"indicaciones_domiciliarias",value:[{tipo:tipo,detalle:detalle,comentarios:comentarios}]})
  }

  const addMedicamentos = async () => {
    const medicamento = getValues("medicamento")
    const dosis= getValues("dosis")
    const via = getValues("via")
    const frecuencia = getValues("frecuencia")
    const durante = getValues("durante")
    const indicacionAdicional = getValues("indicacionAdicional")
    if (!medicamento){
      setError('medicamento', { type: 'custom', message: 'El campo medicamento es requerido' });
      return 
   }
   if (!dosis){
     setError('dosis', { type: 'custom', message: 'El campo dosis es requerido' });
     return
   }
   if (!via){
    setError('via', { type: 'custom', message: 'El campo via es requerido' });
    return
  }
  if (!frecuencia){
    setError('frecuencia', { type: 'custom', message: 'El campo frecuencia es requerido' });
    return 
 }
 if (!durante){
   setError('durante', { type: 'custom', message: 'El campo durante es requerido' });
   return
 }
 if (!indicacionAdicional){
  setError('indicacionAdicional', { type: 'custom', message: 'El campo indicacionAdicional es requerido' });
  return
}
await updateVideoConsulta({field:"medicamentos",value:[...atencion.medicamentos,{medicamento:medicamento,dosis:dosis,via:via,frecuencia:frecuencia,durante:durante,indicacionAdicional:indicacionAdicional}]})
 resetField("medicamento")
 resetField("dosis")
 resetField("via")
 resetField("frecuencia")
 resetField("durante")
 resetField("indicacionAdicional")
  }

  const addCertificados = async () => {
    const tipo_certificado = getValues("tipo_certificado")
    const tipo_indicacion= getValues("tipo_indicacion")
    const fecha_inicio = getValues("fecha_inicio")
    const duracion = getValues("duracion")
    const lugar_presentacion = getValues("lugar_presentacion")

    if (!tipo_certificado){
      setError('tipo_certificado', { type: 'custom', message: 'El campo tipo de certificado es requerido' });
      return 
   }
   if (!tipo_indicacion){
     setError('tipo_indicacion', { type: 'custom', message: 'El campo tipo de indicacion es requerido' });
     return
   }
   if (!fecha_inicio){
    setError('fecha_inicio', { type: 'custom', message: 'El campo fecha de inicio es requerido' });
    return
  }
  if (!duracion){
    setError('duracion', { type: 'custom', message: 'El campo duracion es requerido' });
    return 
 }
 if (!lugar_presentacion){
   setError('lugar_presentacion', { type: 'custom', message: 'El campo lugar de presentacion es requerido' });
   return
 }

   await updateVideoConsulta({field:"certificados",value:[...atencion.certificados,{tipo_certificado:tipo_certificado,tipo_indicacion:tipo_indicacion,fecha_inicio:fecha_inicio,duracion:duracion,lugar_presentacion:lugar_presentacion}]})
 resetField("tipo_certificado")
 resetField("tipo_indicacion")
 resetField("fecha_inicio")
 resetField("frecuencia")
 resetField("duracion")
 resetField("lugar_presentacion")
  }

  useEffect(() => {
    if(atencionId){
      getVideoconsulta()
    }
    // setDiagnosticos(arrDiagnosticos);
    // setMedicamentos(arrMedicamentos);
  }, [refresh,atencionId]);
  
  const submit1 = (data) =>{
    alert("La llamada a finalizado")
    navigate("/perfilmedico")
  }
 

  return (
    <div>
      <h1 className={styles.title}>Atención Medica en curso</h1>
      <br />
      <div className={styles.contenedor}>
        <div className={styles.cajapaciente}></div>
        <form className={styles.formulario} onSubmit={handleSubmit(submit1)} >
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Anamnesis:{" "}
            </label>
            <div className="col-sm-10">
            <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Coloque anamnesis"
                 
                  {...register("anamnesis",{
                    required:"El campo anamnesis es requerido",
                    onBlur: (e) => updateVideoConsulta({value:e.target.value,field:e.target.name})
                  })}
                /> 
                {errors.anamnesis && <p>{errors.anamnesis.message}</p>}
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
                /> 
                {errors.examen_fisico && <p>{errors.examen_fisico.message}</p>}
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <div className="mb-3">
            {atencion?.diagnostico?.map((diagnostico,index)=>{
              const cie10=arrDiagnosticos.find(dia=>dia.c===diagnostico.CIE10)
              return (<div key={index} className="border border-primary rounded pe-4 mb-1">
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
                
                })}
                >
                  <option value={""}>Seleccionar Diagnostico CIE-10</option>
                {arrDiagnosticos.map((diagnostico) => (
                  <option key={diagnostico.c} value={diagnostico.c}>
                    {diagnostico.c} - {diagnostico.d}
                  </option>
                ))}
              </select>{errors.CIE10 && <p>{errors.CIE10.message}</p>}
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
                {...register("tipo",{
                  required:"El campo tipo es requerido",
                  onBlur: (e) => addIndDomiciliarias()
                })}
              /> {errors.tipo && <p>{errors.tipo.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Detalle:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel"  
                  {...register("detalle",{
                  required:"El campo detalle es requerido",
                  onBlur: (e) => addIndDomiciliarias()
                })}
              /> {errors.detalle && <p>{errors.detalle.message}</p>}
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
                {...register("comentarios",{
                  required:"El campo comentarios es requerido",
                  onBlur: (e) => addIndDomiciliarias()
                })}
              /> {errors.comentarios && <p>{errors.comentarios.message}</p>}
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          {/* <div className="mb-3">
            {atencion?.medicamentos?.map((medicamentos)=>{
              const medicinas=arrMedicamentos.find(med=>med.nombre===medicamentos.medicamentos)
              return (<div className="border border-primary rounded pe-4 mb-1">
                <div className="mb-3">
                 <input type="text" className="form-control" placeholder={`${medicinas.nombre}`} disabled/>
                </div>
             </div>)
            })}
          </div> */}
          <div className="row mb-3">
            <h4>Medicamentos</h4>
            <div className="row mb-3">
              <div>
                <label htmlFor="medicamento">Medicamento:</label>
                <select className={styles.medicamento}
                  {...register("medicamento",{
                    required:"El campo medicamento es requerido",
                    onBlur: (e) => addMedicamentos()
                  })}
                >
                  <option defaultValue={""}>Seleccionar Medicamento</option>
                  {arrMedicamentos.map((medicamento, index) => (
                    <option key={index} value={medicamento.nombre}>
                      {medicamento.nombre}
                    </option>
                  ))}
                </select>{errors.diagnosticoClinico && <p>{errors.diagnosticoClinico.message}</p>}
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Dosis:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel"
               {...register("dosis",{
                required:"El campo medicamento es requerido",
                onBlur: (e) => addMedicamentos()
              })}
              />
              {errors.dosis && <p>{errors.dosis.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Vía:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" 
              {...register("via",{
                required:"El campo via es requerido",
                onBlur: (e) => addMedicamentos()
              })}
              />
              {errors.via && <p>{errors.via.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Frecuencia:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" 
                {...register("frecuencia",{
                  required:"El campo frecuencia es requerido",
                  onBlur: (e) => addMedicamentos()
                })}
                />
                {errors.frecuencia && <p>{errors.frecuencia.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel"
                      {...register("durante",{
                        required:"El campo duracion es requerido",
                        onBlur: (e) => addMedicamentos()
                      })}
                      />
                      {errors.durante && <p>{errors.durante.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Indicaciones Adicionales::{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel" 
               {...register("indicacionAdicional",{
                required:"El campo indicacion Adicional es requerido",
                onBlur: (e) => addMedicamentos()
              })}
              />
              {errors.indicacionAdicional && <p>{errors.indicacionAdicional.message}</p>}
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
              <input type="text" className="form-control" id="colFormLabel" placeholder="Porfavor coloque si necesita o no algun estudio medico." 
               {...register("solicitud_examenes",{
                required:"El campo solicitud de examenes es requerido",
                onBlur: (e) => updateVideoConsulta({value:e.target.value,field:e.target.name})
              })}
            /> 
            {errors.anamnesis && <p>{errors.anamnesis.message}</p>}
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
              <input type="text" className="form-control" id="colFormLabel" 
                     {...register("tipo_certificado",{
                      required:"El campo tipo certificado es requerido",
                      onBlur: (e) => addCertificados()
                    })}
                    />
                    {errors.tipo_certificado && <p>{errors.tipo_certificado.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Tipo de indicacion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel"
                     {...register("tipo_indicacion",{
                      required:"El campo tipo de indicacion es requerido",
                      onBlur: (e) => addCertificados()
                    })}
                    />
                    {errors.tipo_indicacion && <p>{errors.tipo_indicacion.message}</p>}
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
                {...register("fecha_inicio",{
                  required:"El campo fecha de inicio es requerido",
                  onBlur: (e) => addCertificados()
                })}
                />
                {errors.fecha_inicio && <p>{errors.fecha_inicio.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              Duracion:{" "}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="colFormLabel"
                  {...register("duracion",{
                    required:"El campo duracion de inicio es requerido",
                    onBlur: (e) => addCertificados()
                  })}
                  />
                  {errors.duracion && <p>{errors.duracion.message}</p>}
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
                {...register("lugar_presentacion",{
                  required:"El campo lugar de presentacion de inicio es requerido",
                  onBlur: (e) => addCertificados()
                })}
                />
                {errors.lugar_presentacion && <p>{errors.lugar_presentacion.message}</p>}
            </div>
            <p className={styles.line}>
              ______________________________________________________________________
            </p>
          </div>
          <Link to="/atencionfinalizada">
            <button className={styles.boton} type="submit">
              Finalizar consulta
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Videoconsulta;
