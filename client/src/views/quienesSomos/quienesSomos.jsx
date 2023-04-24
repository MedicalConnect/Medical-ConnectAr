import React from "react";
import styles from "./quienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-12">
          <h1 className={styles.title}>Quienes Somos</h1>
          <p className={styles.description}>
            <strong>
              {" "}
              Hace unos años, un grupo de expertos en tecnología y medicina se
              reunieron con un propósito en mente: utilizar la tecnología para
              revolucionar la forma en que las personas acceden a la atención
              médica. Sabían que había una necesidad creciente de servicios de
              atención médica en todo el mundo, pero que muchos pacientes se
              encontraban con barreras que dificultaban el acceso a la atención
              médica. Y así, nació nuestra aplicación de telecomunicación de
              medicina. Desde entonces, nos hemos dedicado a desarrollar una
              plataforma innovadora que permita a los pacientes acceder a
              atención médica de calidad en cualquier momento y lugar. Nos hemos
              asociado con médicos y otros profesionales de la salud para
              asegurarnos de que nuestros usuarios reciban atención de calidad,
              incluso a distancia.
            </strong>
          </p>
          <hr className="hr1" />
          <div className={styles.textImgContainer}>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <h2 className={styles.titleDescription}></h2>
                “Nuestro proposito es acompañar a las personas en todo momento,
                con una salud de calidad, más resolutiva y de verdad, cercana.”
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                src="https://media.discordapp.net/attachments/1094314281123717200/1099543980783444069/familia2.jpg?width=1748&height=792"
                className={styles.imgFlia}
                alt="familia"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <h3 className={styles.htitle}>Lo que nos mueve:</h3> */}
      <div className={styles.padre}>
        <div>
          {" "}
          <div className={styles.boxContainer}>
            <div className={styles.item1}>
              <div className={styles.card1}>
                <img
                  src="https://media.discordapp.net/attachments/1094314281123717200/1099543980259151963/informe-medico.png?width=792&height=792"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text1}>
                <span>
                  <strong>
                    {" "}
                    Estar siempre cuando nos necesiten, ofreciendo alivio
                    inmediato, tecnología para un diagnóstico certero y
                    orientación hacia un bienestar integral.
                  </strong>
                </span>
              </div>
            </div>
            <div className={styles.item2}>
              <div>
                <img
                  src="https://media.discordapp.net/attachments/1094314281123717200/1099543979902648330/salud.png?width=792&height=792"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text2}>
                <span>
                  <strong>
                    Entregar soluciones reales a las necesidades de las
                    personas.
                  </strong>
                </span>
              </div>
            </div>
            <div className={styles.item3}>
              <div>
                <img
                  src="https://media.discordapp.net/attachments/1094314281123717200/1099543979437068298/chequeo-de-salud.png?width=792&height=792"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text3}>
                <span>
                  <strong>
                    Brindar medicina de calidad accesible y presente, centrada
                    en la innovación al servicio del paciente.
                  </strong>
                </span>
              </div>
            </div>
            <div className={styles.item4}>
              <div className="imagenvaron2">
                <img
                  className="imagevaron"
                  src="https://media.discordapp.net/attachments/1094314281123717200/1099543980481462272/terapia.png?width=792&height=792"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text4}>
                <span>
                  <div className="loquenosmuevediv">
                    <h3 className="loquenosmueve"> Lo Que Nos Mueve </h3>
                    <br></br>
                  </div>

                  <strong>
                    Asistir con calidez, respeto y empatía a los pacientes y su
                    familia en todo momento.
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              className={styles.corazon}
              src="https://media.discordapp.net/attachments/1094314281123717203/1099843328616431738/quienes-somos-image.jpeg?width=1034&height=718"
              alt="corazon"
              // https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341078188_898577814768058_7111636574380161546_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=X67YmxusinoAX_9WrB7&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfD3h8EXDUqp435AxSu_u5KbgsrmFI9Y0M4ay5pqMgIVTA&oe=643BB57E
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
