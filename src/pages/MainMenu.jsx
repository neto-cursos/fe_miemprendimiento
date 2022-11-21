import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import miempr01 from './../assets/images/startbusiness.png';
import misemprendimientos01 from './../assets/images/misemprendimientos01.png';
const MainMenu = ({ windowSize }) => {
    const msgNotif = "Su lista de emprendimientos se ha cargado correctamente";
    const [showButton, setShowButton] = React.useState(0);
    const [showNotif, setShowNotif] = React.useState(false);
    const usuarios = useSelector(state => state.usuarios);
    const fecha = new Date();
    const [fechaActual, setFechaActual] = React.useState(
        new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate())
    );
    const [tareasAlert, setTareasAlert] = React.useState([]);
    const crons = useSelector(state => state.cronogramas);
    const dispatch = useDispatch();

    const formatDate = (date) => {
        let end = 0;
        end = date.indexOf("/");
        const day = date.slice(0, end);
        date = date.slice(end + 1);
        end = date.indexOf("/");
        const month = date.slice(0, end);
        date = date.slice(end + 1);
        const year = date.slice(0);
        return (new Date(year, month - 1, day))
    }
    const tareasAlertTemp = [];
    useEffect(() => {
        if (crons.cron.length > 0) {

            crons.cron.map(tarea => {

                if (formatDate(tarea.end) < fechaActual) {
                    if (tarea.id !== 1) {
                        const t = {
                            ...tareasAlertTemp, id: tarea.id, name: tarea.name,
                            end: tarea.end, message: `la tarea ${tarea.name} del proyecto 
                        ${tarea.project} esta retrasada`
                        }
                        if (!tareasAlertTemp.find(cronograma => cronograma.id === tarea.id))
                            tareasAlertTemp.push(t);
                    }
                    else {
                        const t = {
                            ...tareasAlertTemp, id: tarea.id, name: tarea.name,
                            end: tarea.end, message: `El proyecto ${tarea.name}  esta retrasado`
                        }
                        if (!tareasAlertTemp.find(cronograma => cronograma.id === tarea.id))
                            tareasAlertTemp.push(t);
                    }
                }



                return true;
            })
            setTareasAlert(tareasAlertTemp);
        }
    }, [crons.cron])

    useEffect(() => {
        if (tareasAlert.length > 0)
            setShowNotif(true);
    }, [tareasAlert])
    /**
     * bg-gradient-to-r from-[#7b00e0] to-[ #ae31d9]
     */
    return (
        <>{showNotif && tareasAlert.map(alertas => {
            return <Alert severity="error" key={nanoid()}>{alertas.message} </Alert>
        })

        }
            <motion.div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                initial={{ width: 0, opacity: 0 }} animate={{ width: "100%", opacity: 2 }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            >
                <div className="max-w-md w-full space-y-8">
                    <h1 className='text-2xl mb-16 text-center'>Bienvenido <span className='font-extrabold'>{usuarios.userInfo.user_name}&nbsp;
                        {usuarios.userInfo.user_apellido}
                    </span></h1>
                    <div>

                        <div className="relative h-44 overflow-hidden mx-0 my-auto rounded-lg transition-all ease-in-out
                         shadow-custom1   
                         hover:shadow-custom2"
                            onMouseEnter={() => setShowButton(1)} onMouseLeave={() => setShowButton(0)}>
                            <div className={`${showButton===1 ? 'blur-sm' : 'blur-none'}`} >

                                <img src={miempr01} alt="/" className=" z-20 rounded-md block border-solid border-whitish object-cover mx-6 my-auto transition-all duration-300 " />

                                {/* <div className="text-whitish text-sm font-bold p-3 leading-6">
                                    Andrew Neil
                                </div>
                                <div className="text-whitish text-sm leading-none mx-3 my-0">
                                    Surkhet, Nepal
                                </div> */}
                            </div>
                            <Link to="/nuevoemprendimiento">
                                {(showButton===1) && <span className='absolute top-20 w-full px-3 py-4 bg-redish hover:bg-orange-500 rounded-lg font-bold font-krona text-xs text-darkish text-center hover:scale-110'>
                                    nuevo Emprendimiento </span>}
                            </Link>
                            {/* <div className="text-whitish text-sm mt-3 pl-1 py-5 pr-3">
                                <p>
                                    User Interface Designer and <br/>front-end developer
                                </p>
                                <div>
                                    <div className="btn">
                                        <button className='h-full w-full bg-whitish border-none outline-none cursor-pointer text-sm font-bold rounded-sm transition-all duration-75 hover:transform hover:scale-95'>Message</button>
                                    </div>
                                    <div className="btn">
                                        <button>Following</button>
                                    </div>
                                </div>
                            </div>
                            <div className="icons">
                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                            </div> */}
                        </div>


                    </div>
                    <div className="relative h-36 overflow-hidden mx-0 my-auto rounded-lg transition-all ease-in-out
                         shadow-custom1   
                         hover:shadow-custom2"
                        onMouseEnter={() => setShowButton(2)} onMouseLeave={() => setShowButton(0)}>
                        <div className={`${showButton===2 ? 'blur-sm' : 'blur-none'}`} >

                            <img src={misemprendimientos01} alt="/" className="z-20 rounded-md block border-solid border-whitish object-cover mx-6 my-auto transition-all duration-300 " />
                        </div>

                        <Link to="/misemprendimientos">
                                {(showButton===2) && <span className='absolute top-16  w-full px-3 py-4 bg-redish hover:bg-orange-500 rounded-lg font-bold font-krona text-xs text-darkish text-center hover:scale-110'>
                                    Mis Emprendimientos </span>}
                            </Link>
                    </div>
                    {/* <p className='mb-16 pb-16' /> */}

                </div>
            </motion.div>
        </>
    );
}

export default MainMenu;
