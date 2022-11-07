import Cookies from 'js-cookie'


export const isLoggedIn = (reqCookies = null) => {
    return !! Cookies.get('ticket_management_is_user_logged_in')
}


export const OpLogIn = () => {

    Cookies.set('ticket_management_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'})
    console.log("Se creó el cookie");
}

export const logOut = () => {
    if (typeof window !== 'undefined') {

        Cookies.remove('ticket_management_is_user_logged_in', {expires: 86400, sameSite: 'lax'})
        console.log("logout exitoso")

    }
}