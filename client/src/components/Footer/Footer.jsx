import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="seccion-oscura   align-items-center justify-content-center">
      <div className="divpadre seccion-oscura">
        <div className="divpadre1">
          {" "}
          <img
            className="footer-logo"
            src="https://cdn.discordapp.com/attachments/1094314281123717204/1097344521290911865/medical-connect.PNG.png"
            alt="Logo Medical Connect"
          />
          <hr className="hr1" />
        </div>

        <section className="desarrolladores asd seccion-clara hero align-items-stretch">
          <div className="container ase text-center ">
            <div className="colorfondo row ">
              {/*user1*/}
              <div className="columna col-12 col-md-2 hero-principal d-flex flex-column justify-content-center align-items-center">
                <img
                  className="hero-imagen-desarrollador rounded-circle"
                  src="https://media.discordapp.net/attachments/1094314281123717204/1097064970136600656/WhatsApp_Image_2023-03-17_at_3.11.19_AM-removebg-preview-fotor-bg-remover-2023031731348.png"
                  alt="foto"
                />
                <p className="perfil-titulo fw-medium">Jon Nahuel Pereyra</p>
                <div className="badges-contenedor">
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/jon-nahuel-pereyra-832191257/"
                    >
                      <img
                        className="imagen-linkedin"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097325514659729438/linkedin.png"
                        alt=""
                      />
                      LinkedIn
                    </a>
                  </span>
                  <span class="badge text-bg-primary1">
                    <a className="text-white" href="https://github.com/jon0010">
                      <img
                        className="imagen-gato"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097074472525242439/github.png"
                        alt="github"
                      />
                      Github
                    </a>
                  </span>
                </div>
              </div>
              {/*user2*/}
              <div className="columna col-12 col-md-2 hero-principal d-flex flex-column justify-content-center align-items-center">
                <img
                  className="hero-imagen-desarrollador rounded-circle"
                  src="https://media.discordapp.net/attachments/1094314281123717204/1097062568322945055/yop.png?width=466&height=468"
                  alt="foto"
                />
                <p className="perfil-titulo fw-medium">Gabriel Romero</p>
                <div className="badges-contenedor">
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/gabriel-francisco-romero-rocha/"
                    >
                      <img
                        className="imagen-linkedin"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097325514659729438/linkedin.png"
                        alt=""
                      />
                      LinkedIn
                    </a>
                  </span>
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://github.com/GabRom98"
                    >
                      <img
                        className="imagen-gato"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097074472525242439/github.png"
                        alt="github"
                      />
                      Github
                    </a>
                  </span>
                </div>
              </div>
              {/*user3*/}
              <div className="columna col-12 col-md-2 hero-principal d-flex flex-column justify-content-center align-items-center">
                <img
                  className="hero-imagen-desarrollador rounded-circle"
                  src="https://cdn.discordapp.com/attachments/1094314281123717204/1099409199676522587/11.png"
                  alt="foto"
                />
                <p className="perfil-titulo fw-medium">Alan Abel Pereyra</p>
                <div className="badges-contenedor">
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/alan-abel-pereyra-0a8324257/"
                    >
                      <img
                        className="imagen-linkedin"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097325514659729438/linkedin.png"
                        alt=""
                      />
                      LinkedIn
                    </a>
                  </span>
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://github.com/ALANABEL322"
                    >
                      <img
                        className="imagen-gato"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097074472525242439/github.png"
                        alt="github"
                      />
                      Github
                    </a>
                  </span>
                </div>
              </div>
              {/*user4*/}

              {/*user5*/}
              <div className="columna col-12 col-md-2 hero-principal d-flex flex-column justify-content-center align-items-center">
                <img
                  className="hero-imagen-desarrollador rounded-circle"
                  src="https://cdn.discordapp.com/attachments/1094314281123717204/1097361514211582002/yo2.jpeg"
                  alt="foto"
                />
                <p className="perfil-titulo fw-medium">Julieta Perez Apiwan</p>
                <div className="badges-contenedor etiqueta-badge">
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/julietaperezapiwan/"
                    >
                      <img
                        className="imagen-linkedin"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097325514659729438/linkedin.png"
                        alt=""
                      />
                      LinkedIn
                    </a>
                  </span>
                  <span class="badge text-bg-primary1">
                    <a
                      className="text-white"
                      href="https://github.com/JuliPerezApiwan"
                    >
                      <img
                        className="imagen-gato"
                        src="https://cdn.discordapp.com/attachments/1094314281123717204/1097074472525242439/github.png"
                        alt="github"
                      />{" "}
                      Github
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divpadre2">
          <div>
            <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <div className="derechos-de-autor">Medical Connect (2023) &#169;</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
