import { configureStore } from "@reduxjs/toolkit"
import characters from "./reducers/characterSlice"

export default configureStore({
    reducer:{
     characters: characters,
    }
})

//EJEMPLO STORE.

