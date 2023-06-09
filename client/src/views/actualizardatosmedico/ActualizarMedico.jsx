import {React,useEffect} from 'react'
import "./ActualizarMedico.css"
import {useForm} from "react-hook-form"
import { useSelector } from 'react-redux'
import {putDoctor,totalUsers,setUserLogin} from "../../redux/actions/actions"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'

const ActualizarMedico = () => {
  const InfoUser= useSelector(state=>state.userLogin)
  const totalUser= useSelector(state=>state.totalUsers)
  const paises=["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
  // const barrios=['Agronomía','Almagro','Balvanera','Barracas','Belgrano','Boedo','Caballito','Chacarita','Coghlan','Colegiales','Constitución','Flores','Floresta','La Boca','La Paternal','Liniers','Mataderos','Monte Castro','Montserrat','Nueva Pompeya','Nuñez','Palermo','Parque Avellaneda','Parque Chacabuco','Parque Chas','Parque Patricios','Puerto Madero','Recoleta','Retiro','Saavedra','San Cristóbal','San Nicolás','San Telmo','Versalles','Villa Crespo','Villa Devoto','Villa General Mitre','Villa Lugano','Villa Luro','Villa Ortúzar','Villa Pueyrredón','Villa Real','Villa Riachuelo','Villa Santa Rita','Villa Soldati','Villa Urquiza','Villa del Parque','Vélez Sarsfield']
  const arrProvincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"];
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, watch ,formState: {errors} , handleSubmit } = useForm();

  useEffect(() => {
    dispatch(totalUsers())
  }, [])

  const submit1 = (data) =>{
    dispatch(putDoctor(data))
    localStorage.removeItem("reduce-state");
    dispatch(setUserLogin({usuario:data.numero_de_documento,contraseña:data.contraseña}))
    alert("tus datos han sido actualizados")
    navigate("/perfilmedico")
  }
  
  const validarEmail = (value) => {
    if (totalUser.some((item) => item.email === value)) {
      return "El email ya esta en uso . Por favor, introduzca otro email";
    }
    return true;
  };

 const validarUserDataEmail= (value) =>{
  if (InfoUser.email === value ){
     return true
  }
  if (InfoUser.email !== value){
    return validarEmail(value)
  }
 }

 const validarDocumento = (value) => {
  if (totalUser.some((item) => item.numero_de_documento === value)) {
    return "El número de documento ya esta en uso. Por favor, introduzca otro número de documento";
  }
  return true;
};

 const validarUserDataDocument= (value) =>{
  if (InfoUser.numero_de_documento === value ){
     return true
  }
  if (InfoUser.numero_de_documento !== value){
    return validarDocumento(value)
  }
 }
  
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col-12">
          <h1 className="subtitulos">
             Actualiza tus datos!
            </h1>
            <p>El equipo de Medical Connect.</p>
          </div>
        </div>
      </div>

      <div className="container text-center ">
        <div className="row row-cols-2 ">
          <div className="col-6 ">
            <br />
            <br />
            <br />
            <form className="forma" onSubmit={handleSubmit(submit1)}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.nombre}
                  {...register("nombre",{
                    required:true,
                    maxLength:25
                  })}
                /> {errors.nombre?.type === "required" && <p  className='errorp'>El campo nombre es requerido</p>}
                {errors.nombre?.type === "maxLength" && <p className='errorp'>El campo nombre debe tener maximo 25 caracteres</p>}
                <label htmlFor="floatingInput">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.apellido}
                  {...register("apellido",{
                    required:true,
                    maxLength:25
                  })}
                />
                {errors.apellido?.type === "required" && <p className='errorp'>El campo apellido es requerido</p>}
                {errors.apellido?.type === "maxLength" && <p className='errorp'>El campo apellido debe tener maximo 25 caracteres</p>}
                <label htmlFor="floatingInput">Apellido</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  readOnly
                  value={InfoUser.tipo_de_documento}
                  {...register("tipo_de_documento",{
                    required:true,
                  })}
                >
                  <option  value="" defaultValue>---</option>
                  <option value="DNI">DNI</option>
                  <option value="CUIL">CUIL</option>
                </select>
                {errors.tipo_de_documento?.type === "required" && <p className='errorp'>El campo Tipo de Documento es requerido</p>}
                <label htmlFor="floatingSelect">Tipo de documento</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={InfoUser.numero_de_documento}
                  readOnly
                  {...register("numero_de_documento",{
                    required:true,
                    maxLength:11,
         
                    validate: {
                      validarUserDataDocument,
                      CUIL: value => watch("tipo_de_documento") === "CUIL" ? value.length === 11 : true,
                      DNI: value => watch("tipo_de_documento") === "DNI" ? value.length === 8 : true, 
                    } 
                  })}
                />
                 {errors.numero_de_documento?.type === "required" && <p className='errorp'>El campo numero de documento es requerido</p>}
                {errors.numero_de_documento?.type === "maxLength" && <p className='errorp'>El campo numero de documento debe tener maximo 11 caracteres</p>}
                {errors.numero_de_documento?.type === "CUIL" && <p className='errorp'>Si es cuil debe contener 11 numeros</p>}
                {errors.numero_de_documento?.type === "DNI" && <p className='errorp'>Si es dni debe contener 8 numeros</p>}
                {errors.numero_de_documento && <p className='errorp'>{errors.numero_de_documento.message}</p>}
                <label htmlFor="floatingInput">Numero de documento</label>
                <p>Si quiere actualizar su tipo o numero de documento, Porfavor comuniquese con atencion al cliente!</p>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.fecha_de_nacimiento}
                  {...register("fecha_de_nacimiento",{
                    required:true,
                  })}
                />
                {errors.fecha_de_nacimiento?.type === "required" && <p className='errorp'>El campo fecha de nacimiento es requerido</p>}
                <label htmlFor="floatingInput">Fecha de nacimiento</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  defaultValue={InfoUser.sexo}
                  {...register("sexo",{
                    required:true,
                  })}
                >
                  <option value="" defaultValue>
                    ---
                  </option>
                  <option value="masculino" >
                    Masculino
                  </option>
                  <option value="femenino" >
                    Femenino
                  </option>
                  <option value="otro" >
                    Otro
                  </option>
                </select>
                {errors.sexo?.type === "required" && <p className='errorp'>El campo sexo es requerido</p>}
                <label htmlFor="floatingSelect">Sexo</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  defaultValue={InfoUser.pais_de_origen}
                  {...register("pais_de_origen",{
                    required:true,
                  })}
                >
                  <option value="" defaultValue>
                    ---
                  </option>
                  {paises.map((pais, index) => (
                    <option key={index} value={pais}>
                      {pais}
                    </option>
                  ))}
                </select>
                {errors.pais_de_origen?.type === "required" && <p className='errorp'>El campo pais de origen es requerido</p>}
                <label htmlFor="floatingSelect">Pais de origen</label>
              </div>
              
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  defaultValue={InfoUser.provincia}
                  {...register("provincia",{
                    required:true,
                  })}
                >
                  <option value="" defaultValue>
                    ---
                  </option>
                  {arrProvincias.map((prov,index)=>{
                    return <option key={index} value={prov}>{prov}</option>
                  })}
                
                </select>
                {errors.provincia?.type === "required" && <p className='errorp'>El campo provincia es requerido</p>}
                <label htmlFor="floatingSelect">Provincia de Residencia</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.ciudad}
                  {...register("ciudad",{
                    required:true,
                  })}
                />
                {errors.ciudad?.type === "required" && <p className='errorp'>El campo ciudad es requerido</p>}
                <label htmlFor="floatingInput">Ciudad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.nacionalidad}
                  {...register("nacionalidad",{
                    required:true,
                  })}
                />
                 {errors.nacionalidad?.type === "required" && <p className='errorp'>El campo nacionalidad es requerido</p>}
                <label htmlFor="floatingInput">Nacionalidad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.domicilio}
                  {...register("domicilio",{
                    required:true,
                  })}
                />
                {errors.domicilio?.type === "required" && <p className='errorp'>El campo domicilio es requerido</p>}
                <label htmlFor="floatingInput">Domicilio</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.titulo}
                  {...register("titulo",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Titulo</label>
                {errors.titulo?.type === "required" && <p className='errorp'>El campo titulo es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.institucion_de_titulacion}
                  {...register("institucion_de_titulacion",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Institucion de Titulacion</label>
                {errors.institucion_de_titulacion?.type === "required" && <p className='errorp'>El campo Institucion de Titulacion es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.fecha_de_titulacion}
                  {...register("fecha_de_titulacion",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Fecha de titulacion</label>
                {errors.fecha_de_titulacion?.type === "required" && <p className='errorp'>El campo Fecha de Titulacion es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.especilidad}
                  {...register("especilidad",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Especialidad.</label>
                {errors.especilidad?.type === "required" && <p className='errorp'>El campo especialidad es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  defaultValue={InfoUser.numero_de_matricula}
                  {...register("numero_de_matricula",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Numero de matricula.</label>
                {errors.numero_de_matricula?.type === "required" && <p className='errorp'>El campo Numero De Matricula es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Ingresa tu número de teléfono"
                  defaultValue={InfoUser.telefono}
                  {...register("telefono",{
                    required:true,
                  })}
                />
                  {errors.telefono?.type === "required" && <p className='errorp'>El campo telefono es requerido</p>}
                <label htmlFor="floatingInput">
                  Telefono
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Ingresa tu email"
                  defaultValue={InfoUser.email}
                  {...register("email",{
                    required:true,
                    pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    validate:validarUserDataEmail
                  })}
                />
                 {errors.email?.type === "required" && <p className='errorp'>El campo email es requerido</p>}
                 {errors.email?.type === "pattern" && <p className='errorp'>El formato del email es incorrecto</p>}
                 {errors.email && <p className='errorp'>{errors.email.message}</p>}
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control select1"
                  id="floatingPassword"
                  placeholder="Password"
                  {...register("contraseña",{
                    required:true,
                    pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
                  })}
                />
                 {errors.contraseña?.type === "required" && <p className='errorp'>El campo contraseña es requerido</p>}
                 {errors.contraseña?.type === "pattern" && <p className='errorp'>El formato de la contraseña es incorrecto(ingrese al menos 8 caracteres en total, con numero, una letra minuscula y otra mayus al menos 1 vez)</p>}
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="form-floating ">
                <input
                  type="password"
                  className="form-control "
                  id="floatingPassword"
                  placeholder="Password"
                  {...register("contrasenacheck", {
                    required: true,
                    validate: value => value === watch("contraseña","") ? true : "Las contraseñas no coinciden"},
                    { shouldUnregister: true }
                  )}
                />
                 {errors.contrasenacheck?.type === "required" && <p className='errorp'>El campo confirmar contraseña es requerido</p>}
                 {errors.contrasenacheck?.message && <p className='errorp'>{errors.contrasenacheck.message}</p>}
                <label htmlFor="floatingPassword">Confirmar Contraseña</label>
              </div>
              <br />
              <br />
              <button className="btnsubmit btn-lg" type="submit">
                Actualizar tu perfil!
              </button>
            </form>
          </div>

          <div className="col-6">
            <br />
            <br />
            <br />

            <div class="container1">
    <div className="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
 <div className="container2">
    <div className="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
 <div className="container3">
    <div className="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActualizarMedico