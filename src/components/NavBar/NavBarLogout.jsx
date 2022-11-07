import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLogout = ({userName, userApellido}) => {
    
    return (<>
    <span className="text-xs">{userName}&nbsp;{userApellido}&nbsp;&nbsp;&nbsp;&nbsp;</span>    
    <NavLink className='mr-2 text-xs hover:text-red-900' to="/logout">
        cerrar sesión
    </NavLink></>
    );
}

export default NavBarLogout;

