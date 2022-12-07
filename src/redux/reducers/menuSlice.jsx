import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import { menuCanva, menuCronograma, menuEmprendimiento, menuPrincipalAuth, menuPrincipalUnauth } from '../../constants/MenuSideBar';
const initialState = [
    { id: 1, texto: 'Inicio', enlace: '/', icon: null },
    { id: 2, texto: 'Iniciar Sesión', enlace: "/login", icon: null },
    { id: 3, texto: 'Crear Cuenta', enlace: "/signup", icon: null },
    { id: 4, texto: 'Soporte', enlace: '/soporte', icon: null },
]

const menuSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        reset:(state,action) => {
            state=initialState;
            return state;
        },
        changeMenu: (state, action) => {
            switch (action.payload.title) {
                case 'MENU_UNAUTH':
                    state = menuPrincipalUnauth;
                    break;
                case 'MENU_AUTH':
                    state = menuPrincipalAuth;
                    break;
                case 'MENU_EMPREND':
                    menuEmprendimiento.map(e => {
                        // let text = document.getElementById("demo").innerHTML; 
                        // let result = text.replace(/blue|house|car/gi, function (x) {
                        //   return x.toUpperCase();
                        // });    
                        if (e.enlace.includes(":empr_id"))
                            e.enlace = e.enlace.replace(":empr_id", String(action.payload.empr_id))

                    })
                    state = menuEmprendimiento;
                    break;
                case 'MENU_CANVAS':
                    state = menuCanva;
                    break;
                case 'MENU_CRONOS':
                    state = menuCronograma;
                    console.log("YAY te quiero mucho")
                    console.log(menuCronograma);
                    break;
                default:

                    break;
            }
            return state;
        },

    },
    extraReducers(builder) {

    },

});

export const { changeMenu,reset } = menuSlice.actions

export default menuSlice.reducer;
