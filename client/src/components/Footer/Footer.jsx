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
              src="../image/Mi proyecto.png"
              alt="Logo Medical Connect"
            />
            Medical Connect
          </h2>
          <hr className="hr1"/> 
          
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
          <hr/> 
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
