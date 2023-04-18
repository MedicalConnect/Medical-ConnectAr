import React, { useEffect } from "react";
import "./IngresoPacientes.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const IngresoPacientes = () => {
  const navigate = useNavigate();
  const userlogin = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userlogin?.rol) {
      navigate(
        userlogin.rol === "paciente" ? "/perfilpaciente" : "/perfilmedico"
      );
    }
  }, [userlogin]);

  return (
    <div>
      <section className="pl-5 bg-gradiente-white-sky-blue">
        <h2>Ingreso de Pacientes</h2>
      </section>

      <div className="h5subtitulo">
        <h5>
          ¿No tienes cuenta? ¡Crea tu cuenta fácil y rápido y comienza a recibir
          atención médica sin salir de casa con Docmovi, servicio médico online
          y presencial al alcance de todos!
        </h5>
      </div>

      <section>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to={"/creacionpaciente"}>
            <button className=" btn-primary" type="button">
              CREAR CUENTA
            </button>
          </Link>
          <Link to={"/iniciarsesion"}>
            <button className=" btn-primary1" type="button">
              INGRESAR
            </button>
          </Link>
        </div>
      </section>

      <section className="d-grid gap-2 col-6 mx-auto">
        <a className="btn btn-primary disabled">Ingresa por Google Aquí</a>
        <a
          href="#"
          className="btn2 btn-secondary disabled "
          tabindex="-1"
          role="button"
          aria-disabled="true"
        >
          <i className="bi bi-google"></i>
        </a>
      </section>
    </div>
  );
};

export default IngresoPacientes;
