import { GET_ALL_PACIENTS, GET_ALL_DOCTORS, GET_CLINICAL_HISTORY, GET_ALL_ATENTIONS, ADD_PACIENT, ADD_DOCTOR } from "./actions-types";
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
        const response = await axios.get(`http://localhost:3001/pacients/${PacienteId}`)
        const data = response.data

        return dispatch({
            type: GET_CLINICAL_HISTORY,
            payload: data
        })
    }
}

export const getAllAtentions = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/atentions`)
        const data = response.data

        return dispatch({
            type: GET_ALL_ATENTIONS,
            payload: data
        })
    }
}

export const addPacient = (payload) => {
    return  async (dispatch) => {
    const response =  axios.post('http://localhost:3001/pacient', payload);
    const data = response.data
    
    
    return await dispatch({
      type: ADD_PACIENT,
      payload:data
    });
  };
};

export const addDoctor = (payload) => {
    return  async (dispatch) => {
    const response =  axios.post('http://localhost:3001/doctor', payload);
    const data = response.data
    
    
    return await dispatch({
      type: ADD_DOCTOR,
      payload:data
    });
  };
};



