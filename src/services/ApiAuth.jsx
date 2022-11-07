import axios from 'axios';

const ApiAuth = () => {
    //window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    let token='';
    localStorage.getItem('bearertoken')?token=localStorage.getItem('bearertoken'):token='';
    console.log('token: '+token);
    
    const api = axios.create({
        //baseURL: 'http://localhost:8000/api',
        // baseURL: 'http://44.202.39.9/public/api',
        baseURL: 'api',
        withCredentials: true,
        headers:{
            Authorization:`${token}`,
            'X-Requested-With' : XMLHttpRequest},
    })
    api.interceptors.response.use(response => response, async error => {
        if (error.response.status === 401) {
           console.log("BUUU")
           
            //logOut()
           return Promise.reject(error)
        }
        if (error.response && 422 === error.response.status) {
            console.log(error.response);
            console.log("BUUU2")
            return Promise.reject(()=>error.response.data.map(t=>new Error(t)))
        }
        if (error.response && 419 === error.response.status) {
            //window.location.reload()
            console.log("error 419 mismatch or expired token")
        }
        
        return Promise.reject(error)
    })
    return (api);
}


export default ApiAuth;