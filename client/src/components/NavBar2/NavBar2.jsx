import React from "react";
import { Link } from "react-router-dom";
import "./NavBar2.css";

const NavBar2 = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="" alt="logo medical connect" width="30" height="24" />
          </a>
          <button type="button" className="btn btn-info">
            cerrar sesion
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar2;
