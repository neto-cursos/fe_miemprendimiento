
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../utils/UtilsAuth';
import BrandLink from './BrandLink';
import BriefcaseIcon from './../../assets/icons/BriefcaseIcon';
import NavLinks from './NavLinks';
import NavbarLogout from './NavbarLogout';
import NavbarSesion from './NavbarSession';

const NavBar = ({ showLogin}) => {
       const { auth, userInfo} = useSelector(state => state.usuarios);   
    console.log("NavBar .. auth from useRedux:" + auth);
    const userName = userInfo.user_name;
    const userApellido = userInfo.user_apellido;
    const islogged = isLoggedIn();
    console.log("NavBar .. Shows islogged()?:" + islogged)

    return (
        <nav className='font-krona flex justify-between py-2 bg-bglogo text-whitish'>
            <BrandLink>
            </BrandLink>
            <div className='flex items-center flex-col md:flex-row'>
                <NavLinks></NavLinks>
                <div className='flex'>
                    <BriefcaseIcon color="redish"></BriefcaseIcon>
                </div>
            </div>
            <div className='flex items-center flex-col justify-center md:flex-row'>
                {showLogin ? <NavbarLogout userName={userName} userApellido={userApellido}></NavbarLogout>/*<NavLink className='mr-2 text-xs' to="/logout">
                    cerrar sesión*/
                    : <NavbarSesion></NavbarSesion>}

            </div>
        </nav>
    )
}
export default NavBar; 