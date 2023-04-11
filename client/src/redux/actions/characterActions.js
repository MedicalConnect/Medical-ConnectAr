import axios from "axios";
import {getAllCharacters} from "../reducers/characterSlice"

export const getCharacters = () => {
    return async function (dispatch) {
        try{
        const charactersApi = await axios.get("https://rickandmortyapi.com/api/character");
        const charactersData= charactersApi.data.results
        console.log(charactersData);

        dispatch(getAllCharacters(charactersData))
        } catch (error){
            return {error: error.message}
        }
    }
}

//EJEMPLO ACTION.