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
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  PACIENT_ACTIVATE_DESACTIVATE,
  DOCTOR_ACTIVATE_DESACTIVATE,
  GET_ALL_PAGOS
} from "./actions/actions-types";

const initialState = {
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
  totalPagos:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PACIENTS:
      return {
        ...state,
        allPacients: action.payload,
      };

    case GET_ALL_DOCTORS:
      return {
        ...state,
        allDoctors: action.payload,
      };

    case GET_CLINICAL_HISTORY:
      return {
        ...state,
        allHistoryClinical: action.payload,
      };

    case GET_ALL_ATENTIONS:
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
      return {
        ...state,
        allPacients: newPacient,
      };

    case ADD_DOCTOR:
      const newDoctor = state.allDoctors.slice();
      newDoctor.push(action.payload);
      return {
        ...state,
        allDoctors: newDoctor,
      };

    case ADD_CLINICAL_HISTORY:
      const newClinicalHistory = state.allHistoryClinical.slice();
      newClinicalHistory.push(action.payload);
      return {
        ...state,
        allHistoryClinical: newClinicalHistory,
      };

    case ADD_ATENTIONS:
      const newAtention = state.allAtentions.slice();
      newAtention.push(action.payload);
      return {
        ...state,
        allAtentions: newAtention,
      };
    case PUT_PACIENT:
      return {
        ...state,
        allPacients: action.payload,
      };
    case PUT_DOCTOR:
      return {
        ...state,
        allDoctors: action.payload,
      };
    case PUT_CLINICAL_HISTORY:
      return {
        ...state,
        allHistoryClinical: action.payload,
      };

    case USER_LOGIN:
      const { numero_de_documento, contraseña } = action.payload;
      const user1 = { usuario: numero_de_documento, contraseña };
      localStorage.setItem("userInfo", JSON.stringify(user1));
      return {
        ...state,
        userLogin: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userLogin: null,
      };

      case ADMIN_LOGIN:
        return {
          ...state,
          adminLogin: action.payload,
        };
      case ADMIN_LOGOUT:
        return {
          ...state,
          adminLogin: null,
        };

    case GET_AVAILABLE_DOCTOR:
      return {
        ...state,
        availableDoctors: action.payload,
      };
    case GET_ATTENTION:
      return {
        ...state,
        allAtentions: action.payload,
      };
    case GET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.payload,
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
