import Header from "./../components/Forms/Elements/Header";
import SignUpForm from "./../components/Forms/SignUpForm";
import React from 'react';
import {motion} from 'framer-motion';
const Signup = () => {
    return (
        <>
            <motion.div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            initial={{width:0,opacity:0}} animate={{width:"100%",opacity:2}} exit={{x:window.innerWidth, transition:{duration:0.8}}}
            >
                <div className="max-w-md w-full space-y-8">

                    <Header
                        heading="Crear nueva Cuenta"
                        paragraph="¿Ya esta registrado? "
                        linkName="Iniciar Sesión"
                        linkUrl="/login"
                    />
                    <SignUpForm />
                </div>
            </motion.div>
        </>
    );
}

export default Signup;
