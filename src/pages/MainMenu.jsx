import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { nanoid } from 'nanoid';
import {motion} from 'framer-motion';
const MainMenu = () => {
    const msgNotif = "Su lista de emprendimientos se ha cargado correctamente";
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
    return (
        <>{showNotif && tareasAlert.map(alertas => {
            return <Alert severity="error" key={nanoid()}>{alertas.message} </Alert>
        })

        }
            <motion.div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            initial={{width:0,opacity:0}} animate={{width:"100%",opacity:2}} exit={{x:window.innerWidth, transition:{duration:0.1}}}
            >
                <div className="max-w-md w-full space-y-8">
                    <h1 className='text-2xl mb-16 text-center'>Bienvenido <span className='font-extrabold'>{usuarios.userInfo.user_name}&nbsp;
                        {usuarios.userInfo.user_apellido}
                    </span></h1>
                    <div>
                        <Link to="/nuevoemprendimiento" className='block w-full px-3 py-4 bg-redish hover:bg-orange-500 rounded-lg font-bold font-krona text-xs text-darkish text-center'>
                            nuevo Emprendimiento
                        </Link>
                    </div>
                    <div>
                        <Link to="/misemprendimientos" className='block w-full px-3 py-4 bg-redish rounded-lg font-bold font-krona text-xs text-darkish text-center
                        hover:bg-orange-500'>
                            Mis Emprendimientos
                        </Link>
                    </div>
                    <p className='mb-32 pb-32' />

                </div>
            </motion.div>
        </>
    );
}

export default MainMenu;
