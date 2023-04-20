import React from "react";
import { Link } from "react-router-dom";
import "./ingresoAdmin.css";

const IngresoAdmin = () => {
  return (
    <div>
      <form className="form">
        <span className="title">Medical Connect</span>

        <span className="sub mb">registro admin</span>

        <input id="file" type="file" />

        <input type="text" className="input" placeholder="username" />
        <input type="email" className="input" placeholder="email" />
        <input type="password" className="input" placeholder="password" />

        <button className="button-register">Register</button>
      </form>
    </div>
  );
};

export default IngresoAdmin;
