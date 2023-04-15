import { GET_ALL_PACIENTS, GET_ALL_DOCTORS, GET_CLINICAL_HISTORY, GET_ALL_ATENTIONS, ADD_PACIENT, ADD_DOCTOR } from "./actions/actions-types";

const initialState = {
    allPacients: [],
    allDoctors:[],
    allHistoryClinical:[],
    allAtenciones:[],
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_PACIENTS:
            return{
                ...state,
                allPacients: action.payload
            }

        case GET_ALL_DOCTORS:
            return{
                 ...state,
                allDoctors: action.payload
                }

        case GET_CLINICAL_HISTORY:
            return{
                 ...state,
                allHistoryClinical: action.payload
                } 

        case GET_ALL_ATENTIONS:
            return{
                ...state,
                allAtenciones: action.payload
            }   

        case ADD_PACIENT:
            const newPacient = state.allPacients.slice();
            newPacient.push(action.payload);
            return{
                ...state,
                allPacients: newPacient
            }

        case ADD_DOCTOR:
            const newDoctor = state.allDoctors.slice();
            newDoctor.push(action.payload);
            return{
                ...state,
                allDoctors: newDoctor
            }

        default:
            return { 
                ...state 
        };
    }
}

export default reducer;