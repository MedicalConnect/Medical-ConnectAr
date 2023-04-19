import React from 'react'
import "./ActualizarMedico.css"

const ActualizarMedico = () => {
  const paises=["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
  // const barrios=['Agronomía','Almagro','Balvanera','Barracas','Belgrano','Boedo','Caballito','Chacarita','Coghlan','Colegiales','Constitución','Flores','Floresta','La Boca','La Paternal','Liniers','Mataderos','Monte Castro','Montserrat','Nueva Pompeya','Nuñez','Palermo','Parque Avellaneda','Parque Chacabuco','Parque Chas','Parque Patricios','Puerto Madero','Recoleta','Retiro','Saavedra','San Cristóbal','San Nicolás','San Telmo','Versalles','Villa Crespo','Villa Devoto','Villa General Mitre','Villa Lugano','Villa Luro','Villa Ortúzar','Villa Pueyrredón','Villa Real','Villa Riachuelo','Villa Santa Rita','Villa Soldati','Villa Urquiza','Villa del Parque','Vélez Sarsfield']
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
            <form className="forma" onSubmit={handleSubmit(submit)}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("nombre",{
                    required:true,
                    maxLength:25
                  })}
                /> {errors.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === "maxLength" && <p>El campo nombre debe tener maximo 25 caracteres</p>}
                <label htmlFor="floatingInput">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("apellido",{
                    required:true,
                    maxLength:25
                  })}
                />
                {errors.apellido?.type === "required" && <p>El campo apellido es requerido</p>}
                {errors.apellido?.type === "maxLength" && <p>El campo apellido debe tener maximo 25 caracteres</p>}
                <label htmlFor="floatingInput">Apellido</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  {...register("tipo_de_documento",{
                    required:true,
                  })}
                >
                  <option  value="" defaultValue>---</option>
                  <option value="DNI">DNI</option>
                  <option value="CUIL">CUIL</option>
                </select>{errors.tipo_de_documento?.type === "required" && <p>El campo Tipo de documento es requerido</p>}
                <label htmlFor="floatingSelect">Tipo de documento</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("numero_de_documento",{
                    required:true,
                    maxLength:11,
                    validate: {
                      CUIL: value => watch("tipo_de_documento") === "CUIL" ? value.length === 11 : true,
                      DNI: value => watch("tipo_de_documento") === "DNI" ? value.length === 8 : true,} 
                  })}
                />
                 {errors.numero_de_documento?.type === "required" && <p>El campo numero de documento es requerido</p>}
                {errors.numero_de_documento?.type === "maxLength" && <p>El campo numero de documento debe tener maximo 11 caracteres</p>}
                {errors.numero_de_documento?.type === "CUIL" && <p>Si es cuil debe contener 11 numeros</p>}
                {errors.numero_de_documento?.type === "DNI" && <p>Si es dni debe contener 8 numeros</p>}
                <label htmlFor="floatingInput">Numero de documento</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("fecha_de_nacimiento",{
                    required:true,
                  })}
                />
                {errors.fecha_de_nacimiento?.type === "required" && <p>El campo fecha de nacimiento es requerido</p>}
                <label htmlFor="floatingInput">Fecha de nacimiento</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  {...register("sexo",{
                    required:true,
                  })}
                >
                  <option value="" defaultValue>
                    ---
                  </option>
                  <option value="masculino" defaultValue>
                    Masculino
                  </option>
                  <option value="femenino" defaultValue>
                    Femenino
                  </option>
                  <option value="otro" defaultValue>
                    Otro
                  </option>
                </select>
                {errors.sexo?.type === "required" && <p>El campo sexo es requerido</p>}
                <label htmlFor="floatingSelect">Sexo</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
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
                {errors.pais_de_origen?.type === "required" && <p>El campo pais de origen es requerido</p>}
                <label htmlFor="floatingSelect">Pais de origen</label>
              </div>
              
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
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
                {errors.provincia?.type === "required" && <p>El campo provincia es requerido</p>}
                <label htmlFor="floatingSelect">Provincia</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("ciudad",{
                    required:true,
                  })}
                />
                {errors.ciudad?.type === "required" && <p>El campo ciudad es requerido</p>}
                <label htmlFor="floatingInput">Ciudad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("nacionalidad",{
                    required:true,
                  })}
                />
                 {errors.nacionalidad?.type === "required" && <p>El campo nacionalidad es requerido</p>}
                <label htmlFor="floatingInput">Nacionalidad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("domicilio",{
                    required:true,
                  })}
                />
                {errors.domicilio?.type === "required" && <p>El campo domicilio es requerido</p>}
                <label htmlFor="floatingInput">Domicilio</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("titulo",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Titulo</label>
                {errors.titulo?.type === "required" && <p>El campo titulo es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("institucion_de_titulacion",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Institucion de Titulacion</label>
                {errors.institucion_de_titulacion?.type === "required" && <p>El campo Institucion de Titulacion es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("fecha_de_titulacion",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Fecha de titulacion</label>
                {errors.fecha_de_titulacion?.type === "required" && <p>El campo Fecha de Titulacion es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("especilidad",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Especialidad.</label>
                {errors.especilidad?.type === "required" && <p>El campo especialidad es requerido</p>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("numero_de_matricula",{
                    required:true,
                  })}
                />
                <label htmlFor="floatingInput">Numero de matricula.</label>
                {errors.numero_de_matricula?.type === "required" && <p>El campo Numero De Matricula es requerido</p>}
              </div>
             <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Ingresa tu número de teléfono"
                  {...register("telefono",{
                    required:true,
                  })}
                />
                  {errors.telefono?.type === "required" && <p>El campo telefono es requerido</p>}
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
                  {...register("email",{
                    required:true,
                    pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  })}
                />
                 {errors.email?.type === "required" && <p>El campo email es requerido</p>}
                 {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
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
                 {errors.contraseña?.type === "required" && <p>El campo contraseña es requerido</p>}
                 {errors.contraseña?.type === "pattern" && <p>El formato de la contraseña es incorrecto</p>}
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
                 {errors.contrasenacheck?.type === "required" && <p>El campo confirmar contraseña es requerido</p>}
                 {errors.contrasenacheck?.message && <p>{errors.contrasenacheck.message}</p>}
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
    <div class="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
 <div class="container2">
    <div class="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
 <div class="container3">
    <div class="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble3">
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