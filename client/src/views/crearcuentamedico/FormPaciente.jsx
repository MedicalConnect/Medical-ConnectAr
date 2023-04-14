import React from 'react'
import "./FormPaciente.css"

const Formpaciente = () => {
  const paises=["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
  const barrios=['Agronomía','Almagro','Balvanera','Barracas','Belgrano','Boedo','Caballito','Chacarita','Coghlan','Colegiales','Constitución','Flores','Floresta','La Boca','La Paternal','Liniers','Mataderos','Monte Castro','Montserrat','Nueva Pompeya','Nuñez','Palermo','Parque Avellaneda','Parque Chacabuco','Parque Chas','Parque Patricios','Puerto Madero','Recoleta','Retiro','Saavedra','San Cristóbal','San Nicolás','San Telmo','Versalles','Villa Crespo','Villa Devoto','Villa General Mitre','Villa Lugano','Villa Luro','Villa Ortúzar','Villa Pueyrredón','Villa Real','Villa Riachuelo','Villa Santa Rita','Villa Soldati','Villa Urquiza','Villa del Parque','Vélez Sarsfield']
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col-12">
            <h2 className="subtitulos">
              Registrate llenando los campos y accede a <br /> todos nuestros
              servicios
            </h2>
          </div>
        </div>
      </div>

      <div className="container text-center ">
        <div className="row row-cols-2 ">
          <div className="col-6 ">
            <br />
            <br />
            <br />
            <form className="forma">
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
                  name="barrio"
                >
                  <option value="" defaultValue>
                    ---
                  </option>
                  {barrios.map((barrio, index) => (
                    <option key={index} value={barrio}>
                      {barrio}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingSelect">Barrio</label>
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
                Activa tu perfil
              </button>
            </form>
          </div>

          <div className="col-6">
            <br />
            <br />
            <br />

            <p className="text-center fw-medium">
              <img
                className='pimg'
                src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341181751_556498566471662_5081762602676827150_n.jpg?stp=dst-jpg_p75x225&_nc_cat=111&ccb=1-7&_nc_sid=dbeb18&_nc_eui2=AeFJiUraNiHy43q9nZVEdDenIiY-C9Kc51kiJj4L0pznWSnLLdONKS77MQm9_9jecwMawbPnntQFr-iGVrwygjJh&_nc_ohc=pQQcABMtMnYAX8VPQpQ&_nc_oc=AQl4vMdIgvZaYp9DaR6vD7K1Jt0RNmBl9A2XaZ6pSMudyawjzfjCsv39480h7_WhnB8&_nc_ht=scontent.faep23-1.fna&oh=00_AfBkpyPbBDcZej2kcJOqd149I5nCSsJeoxtH6gEj-K7HaA&oe=643D27C6"
                alt="icono"
              />
              Atiendase con los mas profesionales medicos que se encuentren disponibles la momento de su consulta!
            </p>
            <p className='text-center fw-medium'>
              <img className='pimg' src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341157176_173370802305756_8738341263779863854_n.jpg?stp=dst-jpg_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=dbeb18&_nc_eui2=AeGvhXmDiD38LBp2nNjud7ISHnEsyPAKcucecSzI8Apy58m_9GWSW4vg4q7X2FM34R5FAvVF51Ed2ZHRgPowrGX0&_nc_ohc=xKhWcfeQ6CQAX-rD9YR&_nc_ht=scontent.faep23-1.fna&oh=00_AfCxDXXnlYvtCz-VwvlmlIQ9rspUqqXhxciTYlJBZiCphA&oe=643D7453" alt="" />
              87% de los profesionales asegura haber mejorado el rendimiento de
              su consulta médica gracias a Medical Connect
            </p>
            <p className='text-center fw-medium'>
              <img className='pimg' src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341169834_1045351673004491_2151599842251033685_n.jpg?stp=dst-jpg_p75x225&_nc_cat=107&ccb=1-7&_nc_sid=dbeb18&_nc_eui2=AeFYVNvQSnOJohKb6ZyMlRhp5AsbIBD9J_DkCxsgEP0n8CmECHWVuLiUDqMymwIBCJvAy6pxXCFbj0xLCKsnJNbV&_nc_ohc=JC3MhOvr69AAX9USilB&_nc_ht=scontent.faep23-1.fna&oh=00_AfCycabIXrm5n3S8A3-tC-itYcLI8UmMZtSaRmjO90z3mQ&oe=643D9B26" alt="" />
              9 de cada 10 especialistas recomendarían  Medical Connect a otro
              profesional de la salud. <br /> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formpaciente

