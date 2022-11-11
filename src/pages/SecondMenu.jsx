import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { queryEmpr } from '../redux/reducers/emprendSlice';

const SecondMenu = () => {
    const { empr_nomb_activo } = useSelector(state => state.emprendimientos)
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        user_name: '',
        user_apellido: '',
        user_id: '',
        isAuth: false,
    })
    const [datos, setDatos] = useState({
        empr_id: ''
    })
    const { empr_id } = useParams();
    console.log("empr_id:" + empr_id)
    useEffect(() => {
        if (localStorage.getItem('usr_dt')) {
            const getData = JSON.parse(localStorage.getItem('usr_dt'));
            setUserData({
                ...userData,
                user_name: getData.user_name,
                user_apellido: getData.user_apellido,
                user_id: getData.user_id,
                auth: getData.auth,
            })
            console.log("userData:" + userData.user_name);
        }
    }, []);
    useEffect(() => {
        setDatos({ ...datos, empr_id: empr_id })
        console.log("entrouseeffect1:" + datos.empr_id)

    }, [empr_id]);

    useEffect(() => {
        console.log("secondmenu datosuseeffect:" + datos.empr_id)
        if (datos.empr_id !== '')
            dispatch(queryEmpr(datos));
    }, [datos])

    return (
        <>
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                <div className="max-w-md w-full space-y-8">
                    <div className='text-center font-bold text-bluenavish text-transform: uppercase'>{empr_nomb_activo}</div>

                    <div>
                        <Link to={`/emprendimiento/${empr_id}/bmc`} className='relative block w-full px-3 py-4 bg-redish rounded-lg font-bold font-krona text-xs text-darkish text-center'>
                            Plan de negocios
                        </Link>
                    </div>
                    <div>
                        <Link to="/planfinanciamiento" className='relative block w-full px-3 py-4 bg-redish rounded-lg font-bold font-krona text-xs text-darkish text-center'>
                            Estructura de Financiamiento
                        </Link>
                    </div>

                    <div>
                        <Link to={`/emprendimiento/${empr_id}/cronograma`} className='relative block w-full px-3 py-4 bg-redish rounded-lg font-bold font-krona text-xs text-darkish text-center'>
                            Cronograma
                        </Link>
                    </div>
                    {/*<div>
                        <Link to="/Actividades claves" className='relative block w-full px-3 py-4 bg-redish rounded-lg font-bold font-krona text-xs text-darkish text-center'>
                            Actividades claves
                        </Link>
                    </div>*/}
                    <p className='md:mb-16 md:pb-24' />
                    <p className='md:mb-16 md:pb-16' />
                </div>
            </div>
        </>
    );
}

export default SecondMenu;
