import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name:"characters",
    initialState:{
        characters:[],
    },
    reducers:{
        getAllCharacters: ( state,action ) => {
            state.characters= action.payload
        }
    }
})

export const {getAllCharacters} = charactersSlice.actions;
export default charactersSlice.reducer

//EJEMPLO REDUCER.
