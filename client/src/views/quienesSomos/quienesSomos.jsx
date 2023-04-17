import React from "react";
import styles from "./quienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-12">
          <h1 className={styles.title}>Quienes Somos</h1>
          <p className={styles.description}>
            Hace unos años, un grupo de expertos en tecnología y medicina se
            reunieron con un propósito en mente: utilizar la tecnología para
            revolucionar la forma en que las personas acceden a la atención
            médica. Sabían que había una necesidad creciente de servicios de
            atención médica en todo el mundo, pero que muchos pacientes se
            encontraban con barreras que dificultaban el acceso a la atención
            médica. Y así, nació nuestra aplicación de telecomunicación de
            medicina. Desde entonces, nos hemos dedicado a desarrollar una
            plataforma innovadora que permita a los pacientes acceder a atención
            médica de calidad en cualquier momento y lugar. Nos hemos asociado
            con médicos y otros profesionales de la salud para asegurarnos de
            que nuestros usuarios reciban atención de calidad, incluso a
            distancia.
          </p>
          <div className={styles.textImgContainer}>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                <h2 className={styles.titleDescription}></h2>
                “Nuestro proposito es acompañar a las personas en todo momento,
                con una salud de calidad, más resolutiva y de verdad, cercana.”
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img
                src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/340601773_213422334642604_6145701791926083459_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=KlAemv_SfCQAX-uFDX_&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfCM2v7Cs1dTRt7GehF-VNR3zllohueO_4J5Kfq0K7HBvQ&oe=643B3C26"
                className={styles.imgFlia}
                alt="familia"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles.htitle}>Lo que nos mueve:</h3>
      <div className={styles.padre}>
        <div>
          {" "}
          <div className={styles.boxContainer}>
            <div className={styles.item1}>
              <div className={styles.card1}>
                <img
                  src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/340924019_758804562436885_1667013018083390068_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=uJkE_i5y5j4AX9HuV2n&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfBApYJdSSlE6hUwuPVXsYLh62D1bNkZl_OMCJpVNlxeiQ&oe=643BB301"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text1}>
                <span>
                  Estar siempre cuando nos necesiten, ofreciendo alivio
                  inmediato, tecnología para un diagnóstico certero y
                  orientación hacia un bienestar integral.
                </span>
              </div>
            </div>
            <div className={styles.item2}>
              <div>
                <img
                  src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341060366_212589614742834_1437391456322414845_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=MODwwGzHIEwAX-3lkvI&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfDlPus1aTJcEABydy6j93qSRUTTssDn9wV6nS7Vp7pjLw&oe=643C7B56"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text2}>
                <span>
                  Entregar soluciones reales a las necesidades de las personas.
                </span>
              </div>
            </div>
            <div className={styles.item3}>
              <div>
                <img
                  src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341030583_1842456606135130_3569734844842488516_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=olPcDSPnWJ0AX-fAWvZ&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfCnkDYb9e2eidtTuMJ2RHJVxwcE40ArG02sYu32UFUvNw&oe=643B8276"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text3}>
                <span>
                  Brindar medicina de calidad accesible y presente, centrada en
                  la innovación al servicio del paciente.
                </span>
              </div>
            </div>
            <div className={styles.item4}>
              <div>
                <img
                  src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341048735_540366998121194_8415954990648169293_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=7WaaT4IMNpgAX-106oZ&_nc_oc=AQmKlY_UfJ9Ez6MPIlg0ZUIlm5aWIe47Z_v_pWv0ymyD7rz6-D9a9k0gDNu8GI5ov-sdfLZ5E0aQrhr8hagR6Fuj&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfAgdNITdPI8ThwSBtVvPCun28G2AKkrTe0VgOZ57EurCg&oe=643B451F"
                  alt="logo salud"
                />
              </div>
              <div className={styles.text4}>
                <span>
                  Asistir con calidez, respeto y empatía a los pacientes y su
                  familia en todo momento.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              className={styles.corazon}
              src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/341078188_898577814768058_7111636574380161546_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=X67YmxusinoAX_9WrB7&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfD3h8EXDUqp435AxSu_u5KbgsrmFI9Y0M4ay5pqMgIVTA&oe=643BB57E"
              alt="corazon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
