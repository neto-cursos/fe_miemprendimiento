import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getRespuestas,updateRespuestas,
    deleteRespuestas,createRespuestas} from './../actions/respuestaActions'

const initialState = [{}
]
export const respuestaAsistSlice = createSlice({
    name: 'respuestasAsistidas',
    //initialState:[],
    initialState: initialState,
    reducers: {
        getRespuesta: (state, action) => {
            console.log(state, action);
            state.push(action.payload);
        },
        addRespuesta: (state, action) => {
            console.log(state, action);
            state.push(action.payload);
        },
        deleteRespuesta: (state, action) => {
            console.log(action.payload);
            //fin devuelve undefined si no lo encuentra
            const nodo = state.find(respuesta => respuesta.resp_id === action.payload)
            if (nodo) {
                state.splice(state.indexOf(nodo), 1)
            }
        },
        updateRespuesta: (state, action) => {
            const { id, preg_id, modu_nume, canv_id, resp_nume, resp_text, resp_desc, resp_esta } = action.payload;
            const respuestaTask = state.find(respuesta => respuesta.id === id)
            if (respuestaTask) {
                respuestaTask.preg_id = preg_id;
                respuestaTask.modu_nume = modu_nume;
                respuestaTask.canv_id = canv_id;
                respuestaTask.resp_nume = resp_nume;
                respuestaTask.resp_text = resp_text;
                respuestaTask.resp_desc = resp_desc;
                respuestaTask.resp_esta = resp_esta;
            }
        },
        resetRespuestaAsistida:(state,action)=>{
            state.length=0;
        }
    },
    extraReducers(builder) {
        // login user
        builder
            .addCase(getRespuestas.pending, (state, action) => {
                console.log("Getrespuestas Pending");
            })
            .addCase(getRespuestas.fulfilled, (state, action) => {
                console.log("Getrespuestas Fullfilled");
            })
            .addCase(getRespuestas.rejected, (state, action) => {
                console.log("Getrespuestas Rejected");
            })
            // register user
            .addCase(createRespuestas.pending, (state, action) => {
                console.log("Createrespuestas Pending");
            })
            .addCase(createRespuestas.fulfilled, (state, action) => {
                console.log("Createrespuestas FullFilled");
            })
            .addCase(createRespuestas.rejected, (state, action) => {
                console.log("Createrespuestas Rejected");
            })
            // get user details
            .addCase(updateRespuestas.pending, (state, action) => {
                console.log("Updaterespuestas Pending");
            })
            .addCase(updateRespuestas.fulfilled, (state, { payload }) => {
                console.log("Updaterespuestas FullFilled");
            })
            .addCase(updateRespuestas.rejected, (state, { payload }) => {
                console.log("Updaterespuestas Rejected");
            })
            // check if user is loggedIn
            .addCase(deleteRespuestas.pending, (state, action) => {
                console.log("Deleterespuestas Pending");
            })
            .addCase(deleteRespuestas.fulfilled, (state, { payload }) => {
                console.log("Deleterespuestas FullFilled");

            })
            .addCase(deleteRespuestas.rejected, (state, { payload }) => {
                console.log("Deleterespuestas Rejected");
            })
    },
})
export const { addRespuesta, deleteRespuesta, updateRespuesta,resetRespuestaAsistida } = respuestaAsistSlice.actions
export default respuestaAsistSlice.reducer;