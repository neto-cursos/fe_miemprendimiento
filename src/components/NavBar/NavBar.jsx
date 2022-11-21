
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../utils/UtilsAuth';
import BrandLink from './BrandLink';
import BriefcaseIcon from './../../assets/icons/BriefcaseIcon';
import NavLinks from './NavLinks';
import NavBarLogout from './NavBarLogout';
import NavBarSession from './NavBarSession';
import NavBarFondo from './../../assets/svg/FondoNavBar';
import navbarfondo from './../../assets/svg/navbarfondo.svg';
import SideBar2 from '../SideBar2/SideBar2';

const NavBar = ({ showLogin }) => {
    const { auth, userInfo } = useSelector(state => state.usuarios);
    console.log("NavBar .. auth from useRedux:" + auth);
    const userName = userInfo.user_name;
    const userApellido = userInfo.user_apellido;
    const islogged = isLoggedIn();
    console.log("NavBar .. Shows islogged()?:" + islogged)

    return (
        <nav className='font-krona  pt-0 md:pt-2 bg-gradient-to-r from-naranja-fondo 
        via-rojo to-naranja-fondo text-whitish relative' >
            <SideBar2></SideBar2>            
            <div className='flex justify-between'>
                {/* style={{backgroundImage: `url(data:image/svg+xml;base64,${btoa(navbarfondo)})`}} */}
                {/* <div className="relative flex">
            <NavBarFondo></NavBarFondo></div> */}

                <BrandLink>
                </BrandLink>
                <div className='hidden items-center  lg:flex lg:flex-row'>
                    <NavLinks></NavLinks>
                    <div className='flex'>
                        <BriefcaseIcon color="redish"></BriefcaseIcon>
                    </div>
                </div>
                <div className='flex items-center flex-col justify-center md:flex-row'>
                    {showLogin ? <NavBarLogout userName={userName} userApellido={userApellido}></NavBarLogout>/*<NavLink className='mr-2 text-xs' to="/logout">
                    cerrar sesión*/
                        : <NavBarSession></NavBarSession>}

                </div></div>
            <div className='py-0 my-0 block align-middle'>
                <NavBarFondo></NavBarFondo>
            </div>

        </nav>

    )
}
export default NavBar; 