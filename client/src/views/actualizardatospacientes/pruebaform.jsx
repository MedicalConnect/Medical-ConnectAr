import React from 'react'
import "./ActualizarPaciente.css"
import {useForm} from "react-hook-form"

const ActualizarPaciente = () => {
      const paises=["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
  // const barrios=['Agronomía','Almagro','Balvanera','Barracas','Belgrano','Boedo','Caballito','Chacarita','Coghlan','Colegiales','Constitución','Flores','Floresta','La Boca','La Paternal','Liniers','Mataderos','Monte Castro','Montserrat','Nueva Pompeya','Nuñez','Palermo','Parque Avellaneda','Parque Chacabuco','Parque Chas','Parque Patricios','Puerto Madero','Recoleta','Retiro','Saavedra','San Cristóbal','San Nicolás','San Telmo','Versalles','Villa Crespo','Villa Devoto','Villa General Mitre','Villa Lugano','Villa Luro','Villa Ortúzar','Villa Pueyrredón','Villa Real','Villa Riachuelo','Villa Santa Rita','Villa Soldati','Villa Urquiza','Villa del Parque','Vélez Sarsfield']
  
  const { register, handleSubmit, } = useForm();

  const submit1 = (data) =>{
     console.log(data)
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
                  name="nombre"
                />
                <label htmlFor="floatingInput">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="apellido"
                />
                <label htmlFor="floatingInput">Apellido</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="tipo_de_documento"
                >
                  <option selected>---</option>
                  <option value="DNI">DNI</option>
                  <option value="CUIL">CUIL</option>
                </select>
                <label htmlFor="floatingSelect">Tipo de documento</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="numero_de_documento"
                />
                <label htmlFor="floatingInput">Numero de documento</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="fecha_de_nacimiento"
                />
                <label htmlFor="floatingInput">Fecha de nacimiento</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="sexo"
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
                <label htmlFor="floatingSelect">Sexo</label>
              </div>
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="pais_de_origen"
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
                <label htmlFor="floatingSelect">Pais de origen</label>
              </div>
              
              <div className="form-floating select1">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="provincia"
                >
                  <option value="" defaultValue>
                    ---
                  </option>
                
                </select>
                <label htmlFor="floatingSelect">Provincia</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="ciudad"
                />
                <label htmlFor="floatingInput">Ciudad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="nacionalidad"
                />
                <label htmlFor="floatingInput">Nacionalidad</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="domicilio"
                />
                <label htmlFor="floatingInput">Domicilio</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Ingresa tu número de teléfono"
                  pattern="/^(11|15)\d{8}$/"
                  name="telefono"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput">
                  Telefono (numeros empezados en 15 o 11 ARG)
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Ingresa tu email"
                  pattern="/^(11|15)\d{8}$/"
                  name="email"
                  autoComplete="on"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control select1"
                  id="floatingPassword"
                  placeholder="Password"
                  name="contrasena"
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="form-floating ">
                <input
                  type="password"
                  className="form-control "
                  id="floatingPassword"
                  placeholder="Password"
                  name="contrasenacheck"
                />
                <label htmlFor="floatingPassword">Confirmar Contraseña</label>
              </div>
              <br />
              <br />
              <button className="btnsubmit btn-lg" type="submit">
                Actualizar tu perfil!
              </button>
            </form>
          </div>

          <div className="col-6 ">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActualizarPaciente