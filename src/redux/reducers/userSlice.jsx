import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import {
    checkLoggedIn, getUserDetails, logOutSession,
    registerUser, userLogin
} from '../actions/userActions';
import { logOut, OpLogIn } from './../../utils/UtilsAuth'


const initialState = {
    loading: false,
    success:false,
    userInfo: {
        user_name: '',
        user_id: '',
        user_apellido: '',
        access_token: '',
        access_type: ''
    },
    userToken: null,
    auth: false,
    status: 'idle',//idle|loading|succeeded|failed
    error: null,
    errores: [{ id: '', msg: '' }],
    //success: authValue,
}


const userSlice = createSlice({
    name: 'usuarios',
    initialState,
    reducers: {
        changeSuccess:(state,action)=>{
            state.success=action.payload;
            return state;
        },
        logout: (state) => {
            localStorage.removeItem('bearerToken');
            state = initialState;
            logOut();
            return state;
        },
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
        updateAuth: (state, action) => {
            state.auth = action.payload;
        },
        setDataFromLocalSave: {
            reducer(state, action) {
            const userInfo = localStorage.getItem('usr_dt') ?
                JSON.parse(localStorage.getItem('usr_dt')) :
                {user_name:'',user_id:'',user_apellido:'',access_token:'',token_type:''};
            state= {
                ...state, userInfo: {
                    ...state.userInfo,
                    user_name: userInfo.user_name,
                    user_id: userInfo.user_id,
                    user_apellido: userInfo.user_apellido,
                    access_token: userInfo.access_token,
                    access_type: userInfo.token_type
                },auth:localStorage.getItem('auth')? true : false,
            };
            console.log("State CHANGED");
            console.log(state);
            console.log("CHANGED FINISHED");
            return state;
        }}
    },
    extraReducers(builder) {
        // login user
        builder
            .addCase(userLogin.pending, (state, action) => {
                console.log('USERLOGIN PENDING');
                state.loading = true;
                state.error = null;
                state.auth = false;
                state.errores = [{}];
                localStorage.removeItem('usr_dt');
                localStorage.setItem('auth', state.auth);
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                console.log('USERLOGIN FULLFLLLED');
                state.loading = false;
                state.userInfo = {
                    user_name: action.payload.user_name,
                    user_id: action.payload.user_id,
                    user_apellido: action.payload.user_apellido,
                    access_token: action.payload.access_token,
                    access_type: action.payload.token_type
                };

                state.userToken = `Bearer ${action.payload['access_token']}`;
                localStorage.setItem('usr_dt', JSON.stringify(state.userInfo));
                console.log(localStorage.getItem('usr_dt'))
                state.auth = true;
                localStorage.setItem('auth', state.auth);
                state.errores = [{}];
                OpLogIn();
            })
            .addCase(userLogin.rejected, (state, action) => {
                
                console.log('USERLOGIN REJECTEDS');
                console.log(action);
                state.loading = false
                state.error = action
                state.auth = false
                localStorage.removeItem('usr_dt');
                localStorage.setItem('auth', state.auth);
                console.log('STATEERROR')
                if(action.error)
                console.log(action);
                if (action.error.message === 'Request failed with status code 401')
                    state.errores = [{ id: nanoid(), msg: 'usuario o password incorrecto' }]

            })
            // register user
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.auth = false;
                state.errores = [{}];
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.success = true // registration successful
                console.log('USERLOGIN FULLFLLLED');
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log('USERLOGIN REJECTEDS');
                console.log(action);
                state.success=false;
                state.loading = false;
                state.error = action.error;
                console.log('STATEERROR')
                if(action.error)
                console.log(action);
                if (action.error.message)
                    state.errores = [{ id: nanoid(), msg: action.error.message }]

                
            })
            // get user details
            .addCase(getUserDetails.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUserDetails.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload
            })
            .addCase(getUserDetails.rejected, (state, { payload }) => {
                state.loading = false
            })
            // check if user is loggedIn
            .addCase(checkLoggedIn.pending, (state, action) => {
                state.loading = true
            })
            .addCase(checkLoggedIn.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload.user === 'auth' ? true : false;
                state.user_id = payload.user_id != null ? payload.user_id : '';

            })
            .addCase(checkLoggedIn.rejected, (state, { payload }) => {
                state.loading = false
            })
            //check if user is loggout
            .addCase(logOutSession.pending, (state, action) => {
                state.loading = true
                console.log("LOGOUT SESSION PENDIENTE");
            })
            .addCase(logOutSession.fulfilled, (state, { payload }) => {
                console.log("LOGOUT SESSION EXITOSA");
                state = {
                    ...state,
                    loading: false,
                    userInfo: { user_name: '', user_id: '', user_apellido: '', access_token: '', access_type: '' },
                    userToken: null,
                    error: null,
                    errores: [{ id: '', msg: '' }],
                    auth: false
                };
                console.log("USERSLICE STATE");
                console.log(state);
                return state;
            })
            .addCase(logOutSession.rejected, (state, { payload }) => {
                state={...state,loading:false,auth:false};
                console.log("LOGOUT SESSION FALLÍDA");
                return state;
            })
    },

});

export const { logout, updateLoading, setDataFromLocalSave, updateAuth,changeSuccess } = userSlice.actions
export const getauth = (state) => state.usuarios.auth;
export default userSlice.reducer;
