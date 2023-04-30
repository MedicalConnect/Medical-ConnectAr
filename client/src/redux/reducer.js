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
  GET_ATTENTION,
  PUT_PACIENT,
  PUT_DOCTOR,
  PUT_CLINICAL_HISTORY,
  GET_TOTAL_USERS,
} from "./actions/actions-types";

const defaultState = {
  allPacients: [],
  allDoctors: [],
  allHistoryClinical: [],
  allAtentions: [],
  userLogin: null,
  availableDoctors: [],
  atencionEnCurso: null,
  totalUsers: [],
};

const initialState = localStorage.getItem("reduce-state")
  ? JSON.parse(localStorage.getItem("reduce-state"))
  : defaultState;

const saveReduceState = (states) => {
  localStorage.setItem("reduce-state", JSON.stringify(states));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PACIENTS:
      saveReduceState({
        ...state,
        allPacients: action.payload,
      });
      return {
        ...state,
        allPacients: action.payload,
      };

    case GET_ALL_DOCTORS:
      saveReduceState({
        ...state,
        allDoctors: action.payload,
      });
      return {
        ...state,
        allDoctors: action.payload,
      };

    case GET_CLINICAL_HISTORY:
      saveReduceState({
        ...state,
        allHistoryClinical: action.payload,
      });
      return {
        ...state,
        allHistoryClinical: action.payload,
      };

    case GET_ALL_ATENTIONS:
      saveReduceState({
        ...state,
        allAtentions: action.payload,
      });
      return {
        ...state,
        allAtentions: action.payload,
      };

    case ADD_PACIENT:
      const newPacient = state.allPacients.slice();
      newPacient.push(action.payload);
      saveReduceState({
        ...state,
        allPacients: newPacient,
      });
      return {
        ...state,
        allPacients: newPacient,
      };

    case ADD_DOCTOR:
      const newDoctor = state.allDoctors.slice();
      newDoctor.push(action.payload);

      saveReduceState({
        ...state,
        allDoctors: newDoctor,
      });

      return {
        ...state,
        allDoctors: newDoctor,
      };

    case ADD_CLINICAL_HISTORY:
      const newClinicalHistory = state.allHistoryClinical.slice();
      newClinicalHistory.push(action.payload);

      saveReduceState({
        ...state,
        allHistoryClinical: newClinicalHistory,
      });

      return {
        ...state,
        allHistoryClinical: newClinicalHistory,
      };

    case ADD_ATENTIONS:
      const newAtention = state.allAtentions.slice();
      newAtention.push(action.payload);
      saveReduceState({
        ...state,
        allAtentions: newAtention,
      });
      return {
        ...state,
        allAtentions: newAtention,
      };
    case PUT_PACIENT:
      saveReduceState({
        ...state,
        allPacients: action.payload,
      });
      return {
        ...state,
        allPacients: action.payload,
      };
    case PUT_DOCTOR:
      saveReduceState({
        ...state,
        allDoctors: action.payload,
      });
      return {
        ...state,
        allDoctors: action.payload,
      };
    case PUT_CLINICAL_HISTORY:
      saveReduceState({
        ...state,
        allHistoryClinical: action.payload,
      });

      return {
        ...state,
        allHistoryClinical: action.payload,
      };

    case USER_LOGIN:
      saveReduceState({
        ...state,
        userLogin: action.payload,
      });
      return {
        ...state,
        userLogin: action.payload,
      };
    case USER_LOGOUT:
      localStorage.removeItem("reduce-state");
      return defaultState;
    case GET_AVAILABLE_DOCTOR:
      saveReduceState({
        ...state,
        availableDoctors: action.payload,
      });

      return {
        ...state,
        availableDoctors: action.payload,
      };
    case GET_ATTENTION:
      saveReduceState({
        ...state,
        allAtentions: action.payload,
      });

      return {
        ...state,
        allAtentions: action.payload,
      };
    case GET_TOTAL_USERS:
      saveReduceState({
        ...state,
        totalUsers: action.payload,
      });

      return {
        ...state,
        totalUsers: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
