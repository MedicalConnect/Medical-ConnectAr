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
  ADD_ANTECEDENTE,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  PACIENT_ACTIVATE_DESACTIVATE,
  DOCTOR_ACTIVATE_DESACTIVATE,
  GET_ALL_PAGOS,
} from "./actions/actions-types";

const defaultState = {
  allPacients: [],
  allDoctors: [],
  allHistoryClinical: [],
  allAtentions: [],
  userLogin: null,
  adminLogin: null,
  availableDoctors: [],
  atencionEnCurso: null,
  totalUsers: [],
  statusUpdate: false,
  totalPagos: [],
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
    case GET_ALL_PAGOS:
      return {
        ...state,
        totalPagos: action.payload,
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

    case ADMIN_LOGIN:
      saveReduceState({
        ...state,
        adminLogin: action.payload,
        userLogin: { rol: "admin" },
      });
      return {
        ...state,
        adminLogin: action.payload,
        userLogin: { rol: "admin" },
      };
    case ADMIN_LOGOUT:
      saveReduceState({
        ...state,
        adminLogin: null,
      });
      return {
        ...state,
        adminLogin: null,
      };

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

    case ADD_ANTECEDENTE:
      saveReduceState({
        ...state,
        userLogin: {
          ...state.userLogin,
          HistoriaClinicas: [
            ...state.userLogin.HistoriaClinicas,
            action.payload,
          ],
        },
      });

      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          HistoriaClinicas: [
            ...state.userLogin.HistoriaClinicas,
            action.payload,
          ],
        },
      };
    case PACIENT_ACTIVATE_DESACTIVATE:
      return {
        ...state,
      };
    case DOCTOR_ACTIVATE_DESACTIVATE:
      return {
        ...state,
      };
    case "SET_STATUS_UPDATE":
      return {
        ...state,
        statusUpdate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
