import {
  GET_ALL_PACIENTS,
  GET_ALL_DOCTORS,
  GET_CLINICAL_HISTORY,
  GET_ALL_ATENTIONS,
  ADD_PACIENT,
  ADD_DOCTOR,
  ADD_CLINICAL_HISTORY,
  ADD_ATENTIONS,
  USER_LOGIN,
  USER_LOGOUT,
  GET_AVAILABLE_DOCTOR,
  CREATE_ATTENTION,
  GET_ENCURSO_ATTENTION,
} from "./actions-types";

import axios from "axios";

export const getAllPacients = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/pacients");
    const data = response.data;

    return dispatch({
      type: GET_ALL_PACIENTS,
      payload: data,
    });
  };
};

export const getAllDoctors = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/doctor");
    const data = response.data;

    return dispatch({
      type: GET_ALL_DOCTORS,
      payload: data,
    });
  };
};

export const getClinicalHistory = (PacienteId) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/historiaClinica/${PacienteId}`
    );
    const data = response.data;

    return dispatch({
      type: GET_CLINICAL_HISTORY,
      payload: data,
    });
  };
};

export const getAllAtentions = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/atenciones`);
    const data = response.data;

    return dispatch({
      type: GET_ALL_ATENTIONS,
      payload: data,
    });
  };
};

export const addPacient = (payload) => {
  return async (dispatch) => {
    const response = axios.post("http://localhost:3001/pacientes", payload);
    const data = response.data;

    return await dispatch({
      type: ADD_PACIENT,
      payload: data,
    });
  };
};

export const addDoctor = (payload) => {
  return async (dispatch) => {
    const response = axios.post("http://localhost:3001/doctor", payload);
    const data = response.data;

    return await dispatch({
      type: ADD_DOCTOR,
      payload: data,
    });
  };
};

export const addClinicalHistory = (payload) => {
  return async (dispatch) => {
    const response = axios.post(
      "http://localhost:3001/historiaClinica",payload);
    const data = response.data;

    return await dispatch({
      type: ADD_CLINICAL_HISTORY,
      payload: data,
    });
  };
};

export const addAtentions = (payload) => {
  return async (dispatch) => {
    const response = axios.post("http://localhost:3001/atenciones", payload);
    const data = response.data;

    return await dispatch({
      type: ADD_ATENTIONS,
      payload: data,
    });
  };
};

export const setUserLogin = (payload) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/login", payload);
    const data = response.data;

    return dispatch({
      type: USER_LOGIN,
      payload: data,
    });
  };
};

export const loginLogOut = () => {
  return function (dispatch) {
    return dispatch({ type: USER_LOGOUT, payload: null });
  };
};

export const getAvailableDoctors = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/doctor/status/nodisponible"
    );
    const data = response.data;
    return dispatch({
      type: GET_AVAILABLE_DOCTOR,
      payload: data,
    });
  };
};

export const createAttention = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/atenciones",
      payload
    );
    const data = response.data;
    return dispatch({
      type: CREATE_ATTENTION,
      payload: data,
    });
  };
};

export const getEncursoAttention = (payload) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/atenciones/encurso/${payload}`
    );
    const data = response.data;
    return dispatch({
      type: GET_ENCURSO_ATTENTION,
      payload: data,
    });
  };
};
