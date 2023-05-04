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
  GET_ATTENTION,
  PUT_PACIENT,
  PUT_DOCTOR,
  PUT_CLINICAL_HISTORY,
  GET_TOTAL_USERS,
  ADD_ANTECEDENTE,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  PACIENT_ACTIVATE_DESACTIVATE,
  DOCTOR_ACTIVATE_DESACTIVATE,
  GET_ALL_PAGOS,
  GET_USER_BY_NUM_DOCUMENT,
  PUT_PAGO_STATUS,
  GMAIL_PACIENT,
} from "./actions-types";

import apiUrl from "../../helpers/apiUrl";
import axios from "axios";

export const getAllPacients = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/pacientes`);
    const data = response.data;

    return dispatch({
      type: GET_ALL_PACIENTS,
      payload: data,
    });
  };
};

export const getAllDoctors = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/doctor`);
    const data = response.data;

    return dispatch({
      type: GET_ALL_DOCTORS,
      payload: data,
    });
  };
};

export const getClinicalHistory = (PacienteId) => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/historiaClinica/${PacienteId}`);
    const data = response.data;

    return dispatch({
      type: GET_CLINICAL_HISTORY,
      payload: data,
    });
  };
};

export const getAllAtentions = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/atenciones`);
    const data = response.data;

    return dispatch({
      type: GET_ALL_ATENTIONS,
      payload: data,
    });
  };
};

export const addPacient = (payload) => {
  return async (dispatch) => {
    const response = axios.post(`${apiUrl}/pacientes`, payload);
    const data = response.data;

    return await dispatch({
      type: ADD_PACIENT,
      payload: data,
    });
  };
};

export const addDoctor = (payload) => {
  return async (dispatch) => {
    const response = axios.post(`${apiUrl}/doctor`, payload);
    const data = response.data;

    return await dispatch({
      type: ADD_DOCTOR,
      payload: data,
    });
  };
};

export const getUserByNDocument = (numero_de_documento) => {
  return async function (dispatch) {
    const responseDoctor = await axios.get(
      `${apiUrl}/doctor?numero_de_documento=${numero_de_documento}`
    );
    const dataDoctor = responseDoctor.data;
    const responsePacient = await axios.get(
      `${apiUrl}/pacientes?numero_de_documento=${numero_de_documento}`
    );
    const dataPacient = responsePacient.data;

    if (dataDoctor) {
      const doctor = {
        user: "doctor",
        numero_de_documento: dataDoctor.numero_de_documento,
        tipo_de_documento: dataDoctor.tipo_de_documento,
        nombre: dataDoctor.nombre,
        apellido: dataDoctor.apellido,
        email: dataDoctor.email,
        status_cuenta: dataDoctor.status_cuenta,
        especilidad: dataDoctor.especilidad,
      };
      return dispatch({
        type: GET_USER_BY_NUM_DOCUMENT,
        payload: doctor,
      });
    }

    if (dataPacient) {
      const pacient = {
        user: "paciente",
        numero_de_documento: dataPacient.numero_de_documento,
        tipo_de_documento: dataPacient.tipo_de_documento,
        nombre: dataPacient.nombre,
        apellido: dataPacient.apellido,
        email: dataPacient.email,
        status_cuenta: dataPacient.status_cuenta,
      };
      return dispatch({
        type: GET_USER_BY_NUM_DOCUMENT,
        payload: pacient,
      });
    }

    //  const arr1 = dataDoctor.concat(dataPacient).flat();
    //  const totalUsers = arr1.map((user) => {
    //    return {
    //      tipo_de_documento: user.tipo_de_documento,
    //      numero_de_documento: user.numero_de_documento,
    //      nombre: user.nombre,
    //      apellido: user.apellido,
    //      email: user.email,
    //      status_cuenta: user.status_cuenta
    //     };
    //   });

    //   return dispatch({
    //     type: GET_USER_BY_NUM_DOCUMENT,
    //     payload: totalUsers,
    //   });
  };
};

export const addClinicalHistory = (payload) => {
  return async (dispatch) => {
    const response = axios.post(`${apiUrl}/historiaClinica`, payload);
    const data = response.data;

    return await dispatch({
      type: ADD_CLINICAL_HISTORY,
      payload: data,
    });
  };
};

export const addAtentions = (payload) => {
  return async (dispatch) => {
    const response = axios.post(`${apiUrl}/atenciones`, payload);
    const data = response.data;

    return await dispatch({
      type: ADD_ATENTIONS,
      payload: data,
    });
  };
};

export const setUserLogin = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, payload);
      console.log({ response });
      const data = response.data;

      if (data.status_cuenta === "desactivada") {
        //return alert("Tu usuario ha sido desactivado, esto puede deberse por muchos motivos! , si cree que hubo un error porfavor comunicarse con atencion al cliente")
        return dispatch({
          type: USER_LOGIN,
          payload: { status_cuenta: data.status_cuenta },
        });
      }
      return dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const loginLogOut = () => {
  return function (dispatch) {
    return dispatch({ type: USER_LOGOUT, payload: null });
  };
};

export const getAvailableDoctors = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/doctor/status/disponible`);
    const data = response.data;
    return dispatch({
      type: GET_AVAILABLE_DOCTOR,
      payload: data,
    });
  };
};

export const createAttention = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(`${apiUrl}/atenciones`, payload);
    const data = response.data;
    return dispatch({
      type: CREATE_ATTENTION,
      payload: data,
    });
  };
};

export const getAttention = (payload) => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/atenciones`, {
      payload,
    });
    const data = response.data;
    return dispatch({
      type: GET_ATTENTION,
      payload: data,
    });
  };
};

export const putPacients = (payload) => {
  return async (dispatch) => {
    const response = await axios.put(`${apiUrl}/pacientes`, payload);
    const data = response.data;

    return dispatch({
      type: PUT_PACIENT,
      payload: data,
    });
  };
};

export const putDoctor = (payload) => {
  return async (dispatch) => {
    const response = await axios.put(`${apiUrl}/doctor`, payload);
    const data = response.data;

    return dispatch({
      type: PUT_DOCTOR,
      payload: data,
    });
  };
};

export const putClinicalHistory = (payload) => {
  return async (dispatch) => {
    const response = await axios.put(`${apiUrl}/historiaClinica`, payload);
    const data = response.data;

    return dispatch({
      type: PUT_CLINICAL_HISTORY,
      payload: data,
    });
  };
};

export const totalUsers = () => {
  return async (dispatch) => {
    const responseDoctor = await axios.get(`${apiUrl}/doctor`);
    const dataDoctor = responseDoctor.data;
    const responsePacient = await axios.get(`${apiUrl}/pacientes`);
    const dataPacient = responsePacient.data;

    const arr1 = dataDoctor.concat(dataPacient).flat();
    const totalUsers = arr1.map((user) => {
      return {
        numero_de_documento: user.numero_de_documento,
        email: user.email,
      };
    });

    return dispatch({
      type: GET_TOTAL_USERS,
      payload: totalUsers,
    });
  };
};

export const addAntecedente = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: ADD_ANTECEDENTE,
      payload: payload,
    });
  };
};

export const setAdminLogin = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/admin/login`, payload);
      const data = response.data;

      return dispatch({
        type: ADMIN_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setLogOutAdmin = () => {
  return function (dispatch) {
    return dispatch({ type: ADMIN_LOGOUT, payload: null });
  };
};

export const putStatePacient = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${apiUrl}/pacientes/userstatus`,
        payload
      );
      const data = response.data;

      return dispatch({
        type: PACIENT_ACTIVATE_DESACTIVATE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const putStateDoctor = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/doctor/userstatus`, payload);
      const data = response.data;

      return dispatch({
        type: DOCTOR_ACTIVATE_DESACTIVATE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAllPagos = () => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/pagos`);
    const data = response.data;

    return dispatch({
      type: GET_ALL_PAGOS,
      payload: data,
    });
  };
};

export const putPago = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/pagos`, payload);
      const data = response.data;

      return dispatch({
        type: PUT_PAGO_STATUS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}



export const setUserLoginGmail = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/pacientes`);
      const data = response.data;
      const paciente = data.find((p) => p.email === email);
      
      if(data.status_cuenta === "desactivada"){
        //return alert("Tu usuario ha sido desactivado, esto puede deberse por muchos motivos! , si cree que hubo un error porfavor comunicarse con atencion al cliente")
        return dispatch({
          type: GMAIL_PACIENT,
          payload: {status_cuenta:data.status_cuenta}
        })
      }
      return dispatch({
        type: GMAIL_PACIENT,
        payload: paciente,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

