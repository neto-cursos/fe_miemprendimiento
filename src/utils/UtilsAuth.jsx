import Cookies from 'js-cookie'
//let location = useLocation();

export const isLoggedIn = (reqCookies = null) => {
    return !! Cookies.get('ticket_management_is_user_logged_in')
}


export const OpLogIn = () => {
    //const [isAuth,setIsAuth]=useState(false);
    Cookies.set('ticket_management_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'})
    console.log("Se creó el cookie");
    //setIsAuth(true);
    //localStorage.setItem('isAuth',JSON.stringify(true));
    /*return <RedirectToPage pageAdress="\welcome"></RedirectToPage>*/
}

export const logOut = () => {
    if (typeof window !== 'undefined') {
        // remove logged in user's cookie and redirect to login page
        Cookies.remove('ticket_management_is_user_logged_in', {expires: 86400, sameSite: 'lax'})
        console.log("logout exitoso")
        //return navigate("/login")
    }
}