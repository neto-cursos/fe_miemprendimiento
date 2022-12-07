import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { listRespuestas,updateRespuestas,
    deleteRespuestas,createRespuestas} from './../actions/respuesta2Actions'

const initialState=[
    // {}
]
export const respuestaSlice=createSlice({
    name:'respuestas',
    //initialState:[],
    initialState:initialState,
    reducers:{
        reset:(state,action) => {
            state=initialState;
            return state;
        },
        addRespuesta:(state,action) => {
            console.log(state);
            state.push(action.payload);
        },
        agregarRespuesta:(state,action)=>{
            action.payload.map(data => {
                console.log("data from add respuestas:")
                console.log(data);
                if(!state.find(respuesta => respuesta.resp_id === data.resp_id))
                state.push(data);
                return state;
            });
            console.log("state last")
            console.log(state);
        },
        deleteRespuesta:(state,action)=>{
            console.log(action.payload);
            //fin devuelve undefined si no lo encuentra
            const nodo=state.find(respuesta=>respuesta.resp_id===action.payload)
            if (nodo){
                state.splice(state.indexOf(nodo),1);
            }
        },
        updateRespuesta:(state,action)=>{
            const {resp_id,preg_id, modu_nume, canv_id, resp_nume, resp_text,resp_desc, resp_esta}=action.payload;
            const respuestaTask=state.find(respuesta=>respuesta.resp_id===resp_id)
            if(respuestaTask){
                respuestaTask.preg_id=preg_id;
                respuestaTask.modu_nume=modu_nume;
                respuestaTask.canv_id=canv_id;
                respuestaTask.resp_nume=resp_nume;
                respuestaTask.resp_text=resp_text;
                respuestaTask.resp_desc=resp_desc;
                respuestaTask.resp_esta=resp_esta;                
            }
        },
        resetRespuesta:(state,action) => {
            console.log("STATE RESETBEFORE RESPUESTA: ");
            console.log(state);
            state.length=0;
            console.log("STATE RESET RESPUESTA: ");
            console.log(state);
            return state;
        },

    },
    extraReducers(builder) {
        // login user
        builder
            .addCase(listRespuestas.pending, (state, action) => {
                console.log("Getrespuestas Pending");
            })
            .addCase(listRespuestas.fulfilled, (state, action) => {
                console.log("Getrespuestas Fullfilled");
                action.payload.map(data => {
                    // console.log("data from add respuestas:")
                    // console.log(data);
                    if(!state.find(respuesta => respuesta.resp_id === data.resp_id))
                    state.push(data);
                    return state;
                });
                console.log("state last")
                console.log(state);

            })
            .addCase(listRespuestas.rejected, (state, action) => {
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
export const {addRespuesta,deleteRespuesta,updateRespuesta,agregarRespuesta,resetRespuesta,reset}=respuestaSlice.actions
export default respuestaSlice.reducer;