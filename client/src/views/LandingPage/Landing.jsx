import React from 'react'
import "./Landing.css"



function Landing() {
  return (
    <div>
      <div className="container ">
        <div className="row topheader">
          <div className="col"></div>
          <div className="col-9 text-center">
            <h1 className="fw-bold ">Medical Connect te da la Bienvenida!</h1>
            <p className="fw-semibold ">
              {" "}
              Te invitamos a formar parte de este servicio en el cual podras
              recibi las mejores atenciones desde cualquier parte de capital
              federal que te encuentres!
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="contenedorflex">
        <img
          src="https://fondosmil.com/fondo/56989.jpg"
          alt=""
        />
        <button type="button" className="btn btn-lg">
          Registrate ya y accede a nuestros beneficios!
        </button>
      </div>

      <div className="container topheader">
        <div className="row ">
          <div className="col"></div>
          <div className="col-9 text-center">
            <h2 className="fw-bold fs-1">Que es Medical Connect?</h2>
            <p className="fst-italic fw-medium">
              {" "}
              Somos una red de servicios que integra lo mejor de la medicina
              domiciliaria y telemedicina, creando un nuevo concepto en salud,
              más accesible y resolutivo, disponible en todo momento y lugar.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://img.freepik.com/vector-premium/linda-tierra-feliz-gran-corazon-rojo-planeta-dibujos-animados-sonriendo-vector-ilustracion-aislada_502651-144.jpg?w=2000"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h4>Accesibilidad completa</h4>
                <p className="card-text">
                  Asistencia médica 24/7 donde los pacientes lo requieran.
                </p>
              </div>
            </div>
          </div>

          <div className="col text-center">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top carta"
                alt=""
              />
              <div className="card-body">
                <h4>Alivio inmediato</h4>
                <p className="card-text">
                  Aliviamos los síntomas de forma inmediata, con un kit de
                  medicamentos.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://st2.depositphotos.com/1071184/6543/v/950/depositphotos_65434825-stock-illustration-doctor-showing-diagnoses.jpg"
                className="card-img-top carta"
                alt=""
              />
              <div className="card-body">
                <h4>Diagnóstico certero</h4>
                <p className="card-text">
                  Para un diagnóstico certero, usamos dispositivos de última
                  generación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-left topheader">
        <div className="row row-cols-2">
          <div className="col-4 ">
            <h2 className='titulocomo fs-1 fw'>¿Cómo funciona el servicio de Medical Connect?</h2>
            <p className='fw-semibold'>Recibe atención médica en tu hogar o lugar de trabajo, conectándote con nuestro servicio médico para cuidar tu salud de forma efectiva y segura.</p>
            <h4><img className='iconobebe' src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341327392_1218583425480978_1915852341125186839_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEhgW2_Qpy0jkXf3ywqqIiWWyhYjIvHWsxbKFiMi8dazO1eXinQ2hbCMUKoyL7zyYO1_RXKkaEfaEEL843i2e53&_nc_ohc=6Cr1ajhQoBMAX803puD&_nc_ht=scontent.faep23-1.fna&oh=00_AfAjAHBo8fGzi91fx_nLjnK5Qdv7iiQ0-ee1HhMLBajjOQ&oe=643BBC57" alt="" /> Crea tu cuenta</h4> 
            <p>Llena los datos solicitados para brindarte la mejor atención. Si lo deseas, también puedes añadir a tus cargas luego de registrarte</p> 
            <h4><img className='iconobebe' src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341026831_524029496600576_24482399002558692_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGGr1ZF-Hu696NWm8n3AqYM2Yk9ccy3eUbZiT1xzLd5RnarE_qNeIWa-SHkrAOqaY2z-YlR17YsA2h06tiPyK-4&_nc_ohc=Md06gRQSqbIAX9WJFBk&_nc_ht=scontent.faep23-1.fna&oh=00_AfDf_biYOsoKRZwsYCOIvYztsuaVa3engUokCASpWOz4gQ&oe=643C9FE7" alt="" /> Solicita una atención</h4> 
            <p>¡Así de sencillo! Ya puedes atenderte con nosotros y recibir atenciones médicas.</p> 
            <h4><img className='iconobebe' src="https://scontent.faep23-1.fna.fbcdn.net/v/t39.30808-6/341079499_2685572111584632_2413391326035001052_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG-ZA7dICPD2pmUalTOoS4igr5dAzoUwY2Cvl0DOhTBjag-sKkUNYo7691l0D-UOv2y2CpXN8cLDW45HYtOtze0&_nc_ohc=oday2_XGYfUAX9wW1Kc&_nc_ht=scontent.faep23-1.fna&oh=00_AfC7ghgHzx2fvq8SA83FwU1Gu-SYmJd7-hYybKb2vIg7TQ&oe=643CE849" alt="" /> Accede a mas beneficios!</h4> 
            <p>Para mas beneficios puedes checkear nuestros planes y acceder a ellos!</p> 
       
          </div>
          <div className="col">
            <img src="https://thumbs.dreamstime.com/b/enfermera-m%C3%A9dica-tomando-sangre-de-ilustraci%C3%B3n-vectorial-dibujos-animados-voluntarios-aislados-la-caricatura-plana-voluntaria-205975051.jpg" alt="" />
          </div>
        </div>
    </div>

      <div className='padretarjeta'>
        <div className='hijotarjeta'>
          <h3>Planes de suscripción</h3>
          <p>Podrás contar con asistencia médica oportuna a un valor accesible, para ti y tu familia.</p>
          <button>Nuestros Planes!</button>
        </div>
        </div>

        <div className='carruseltitulo'>
          <div className='carruselfondo'>
          <h2>Conoce la experiencia de nuestros usuarios</h2>
          <p>Una nueva forma de hacer salud, mas cercana, resolutiva y accesible</p>
          <button type="button" className="btn btn-outline-light">Conoce nuestros planes!</button>
          </div>
        </div>

        <div id="testimonios-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
		<div className="carousel-inner">
			<div className="carousel-item active">
				<div className="container">
					<img className="testimonio-imagen rounded-circle" src="https://images.pexels.com/photos/6248821/pexels-photo-6248821.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Foto de Gino"/>
					<p className="testimonio-texto">"Estoy muy agradecido por el servicio que recibí de Medical Connect. La plataforma de videollamadas es muy fácil de usar y el médico que me atendió fue muy amable y eficiente. Me diagnosticó rápidamente y me dio un tratamiento que me ayudó a sentirme mejor. Definitivamente recomendaría esta aplicación a cualquier persona que busque atención médica conveniente y confiable".
					</p>
					<div className="testimonio-info">
						<p className="cliente">Gino</p>
						<p className="cargo">Gerente de proyectos en desarrollo web</p>
					</div>
				</div>

			</div>
			<div className="carousel-item">
				<div className="container">
					<img className="testimonio-imagen rounded-circle" src="https://images.pexels.com/photos/3846049/pexels-photo-3846049.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Foto de Leonardo"/>
					<p className="testimonio-texto">"Tuve una experiencia maravillosa con Medical Connect. Mi médico me atendió enseguida y fue muy detallado en su explicación de mi condición. La aplicación en sí es muy fácil de usar y estoy muy contento con la calidad del servicio que recibí. Definitivamente volveré a usarla en el futuro".
					</p>
					<div className="testimonio-info">
						<p className="cliente">Nora</p>
						<p className="cargo">Director de Aprende a Programar</p>
					</div>
				</div>

			</div>
			<div className="carousel-item">
				<div className="container">
					<img className="testimonio-imagen rounded-circle" src="https://www.cronica.com.ar/__export/1628282194594/sites/cronica/img/2021/08/06/maxi_2_crop1628279776764.jpg_315917931.jpg" alt="Foto de Nora"/>
					<p className="testimonio-texto">"Medical Connect me sorprendió con su eficiencia y facilidad de uso. Nunca había tenido una consulta médica en línea, pero el médico que me atendió fue muy amable y profesional. Me sentí muy cómodo durante toda la consulta y me encantó no tener que salir de mi casa. Definitivamente lo recomiendo a cualquier persona que busque atención médica accesible y de calidad".

					</p>
					<div className="testimonio-info">
						<p className="cliente">Leonardo</p>
						<p className="cargo">Asador profesional</p>
					</div>
				</div>

			</div>
		</div>
		<button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Anterior</span>
		</button>
		<button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Siguiente</span>
		</button>
	</div>
  
     
     
    </div>
  );
}

export default Landing;
