import { GET_ALL_PACIENTS, GET_ALL_DOCTORS, GET_CLINICAL_HISTORY, GET_ALL_ATENTIONS, ADD_PACIENT, ADD_DOCTOR, ADD_CLINICAL_HISTORY, ADD_ATENTIONS } from "./actions-types";
import axios from "axios";

export const getAllPacients = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/pacients')
        const data = response.data

        return dispatch({
            type: GET_ALL_PACIENTS,
            payload: data
        })
    }
}

export const getAllDoctors = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/doctor')
        const data = response.data

        return dispatch({
            type: GET_ALL_DOCTORS,
            payload: data
        })
    }
}

export const getClinicalHistory = (PacienteId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/historiaClinica/${PacienteId}`)
        const data = response.data

        return dispatch({
            type: GET_CLINICAL_HISTORY,
            payload: data
        })
    }
}

export const getAllAtentions = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/atenciones`)
        const data = response.data

        return dispatch({
            type: GET_ALL_ATENTIONS,
            payload: data
        })
    }
}

export const addPacient = (payload) => {
  return async function (dispatch){
    // try{
      const response = await axios.post("http://localhost:3001/pacients",payload)
      dispatch({type: ADD_PACIENT})
      return response
    // } catch(error){
    //   alert(`Ha ocurrido un error al crear el paciente: ${error.message}`)
    // }
  }
};

export const addDoctor = (payload) => {
  return async (dispatch) => {
    try{
    const response = axios.post("http://localhost:3001/doctor", payload);
    dispatch({ type: ADD_DOCTOR });
    return response
    } catch(error){
      alert(`Ha ocurrido un error al crear el doctor: ${error.message}`)
    }
  };
};

export const addClinicalHistory = (payload) => {
    return  async (dispatch) => {
    const response =  axios.post('http://localhost:3001/historiaClinica', payload);
    const data = response.data
    
    
    return await dispatch({
      type: ADD_CLINICAL_HISTORY,
      payload:data
    });
  };
};

export const addAtentions = (payload) => {
    return  async (dispatch) => {
    const response =  axios.post('http://localhost:3001/atenciones', payload);
    const data = response.data
    
    
    return await dispatch({
      type: ADD_ATENTIONS,
      payload:data
    });
  };
};





