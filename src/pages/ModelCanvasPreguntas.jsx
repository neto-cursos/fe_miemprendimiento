import React from 'react';
import CanvasPreguntas from '../components/CanvasPreguntas/CanvasPreguntas';
import {motion} from 'framer-motion';
const ModelCanvasPreguntas = () => {
    return (
        <motion.div className='flex relative flex-col my-2 pl-2'
        initial={{width:0,opacity:0}} animate={{width:"100%",opacity:2}} exit={{x:window.innerWidth, transition:{duration:0.1}}}
        ><CanvasPreguntas/>
        </motion.div>

    );
}

export default ModelCanvasPreguntas;
