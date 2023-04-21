import React from "react";
import { Link } from "react-router-dom";
import "./ingresoAdmin.css";

const IngresoAdmin = () => {
  return (
    <div className="centro">
      <form className="form">
        <span className="title">Medical Connect</span>

        <span className="sub mb">Ingreso admin</span>

        <input id="file" type="file" />

        <input type="email" className="input" placeholder="email-document" />
        <input type="password" className="input" placeholder="password" />

        <button className="button-register">ingresar</button>
      </form>
    </div>
  );
};

export default IngresoAdmin;
