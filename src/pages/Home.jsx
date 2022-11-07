import React from 'react'
import { Link } from 'react-router-dom';
import ChkWindowSize from '../components/ChkWindowSize';
import bmcportada from './../assets/image/img_business_model_canvas.jpg';
import {getWindowSize} from './../utils/checkWindow';
const Home = () => {
    const [windowSize, setWindowSize] = React.useState(getWindowSize());
    const clase1 = `md:h-full container flex items-center flex-row`;
    const clase2 = `md:h-full flex items-center flex-row`;
    return (
        <>
            <ChkWindowSize setWindowSize={setWindowSize}></ChkWindowSize>
            <div className={`${windowSize.innerWidth > 640 ? clase2 : clase1}`}>
                <div className='bg-redish px-12 py-16 w-full md:w-1/2 items-center md:h-full'>
                    <h1 className='font-krona text-lg mb-2 mt-10 md:mt-32'>
                        Crea tu plan de negocios
                    </h1>
                    <p className='text-sm mb-6'>
                        Crea de manera rápida el plan de negocios para tu emprendimiento, cronogramas, presupuesto y mucho más
                    </p>
                    <Link to="/login" className='py-2 bg-grayish rounded-xl font-bold font-krona px-2 text-xs text-darkish'>
                        Iniciar Emprendimiento
                    </Link>
                    <p className='mb-32'></p>
                </div>

                {windowSize.innerWidth > 640 && <div className='w-full md:w-1/2 md:h-full bg-fondoimghome'>
                    <img className='mx-auto object-fill h-full sm:object-scale-down' src={bmcportada} alt="Modelo de negocios canvas" />
                </div>}
            </div>
        </>
    );
}

export default Home;
