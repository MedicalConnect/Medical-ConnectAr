import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="seccion-oscura d-flex  align-items-center justify-content-center">
      <div className="divpadre seccion-oscura">
        <div className="divpadre1">
          <h2>
            {" "}
            <img
              className="footer-logo"
              src="https://scontent.ffdo1-1.fna.fbcdn.net/v/t39.30808-6/340966044_602214545296808_1179848363389618222_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=5pDc2-rHmcUAX-CBwGv&_nc_ht=scontent.ffdo1-1.fna&oh=00_AfDMNP9C8djD8q7xMSz86cDq0dWJC2QDkW3e38_D3DBblQ&oe=643D0581"
              alt="Logo Medical Connect"
            />
            Medical Connect
          </h2>
          <hr className="hr1" />
        </div>

        <div className="containerpadre ">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            </p>
          </div>
          <hr />
        </div>

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
          <div className="derechos-de-autor">
            Creado por Alan Abel Pereyra (2023) &#169;
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
