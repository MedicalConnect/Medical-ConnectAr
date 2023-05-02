import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAdminLogin } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import "./ingresoAdmin.css";

const IngresoAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAdmin = useSelector((state) => state.adminLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleLogin = (data) => {
    dispatch(setAdminLogin(data));
  };

  useEffect(() => {
    if (userAdmin) {
      navigate("/perfiladmin");}
  }, [userAdmin]);

  return (
    <div className="centro">
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <span className="title">Medical Connect</span>

        <span className="sub mb">Ingreso admin</span>

        <input
          type="text"
          className="input"
          placeholder=""
          {...register("usuario", {
            required: "ingrese Usuario",
          })}
        />
        {errors.usuario && (
          <span className="text-danger mx-3">{errors.usuario.message}</span>
        )}

        <input
          type="password"
          className="input"
          placeholder=""
          {...register("contraseña", {
            required: "ingrese Contraseña",
          })}
        />
        {errors.contraseña && (
          <span className="text-danger mx-3">{errors.contraseña.message}</span>
        )}

        <button type="submit" className="button-register">Ingresar</button>
      </form>
    </div>
  );
};

export default IngresoAdmin;
