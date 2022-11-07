import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";

export const Store = configureStore({
    reducer:{
        // tasks:exampleReducer,
        // emprendimientos:emprendReducer,
        // respuestas:respuestaReducer,
        usuarios:userSlice,
        // respuestasAsistidas:respuestasAsistidasReducer,
        // preguntas:preguntaReducer,
        // canvas:canvasReducer,
        // sugerencias:sugerenciasReducer,
        // cronogramas:cronogramasReducer,
    }
    
})
