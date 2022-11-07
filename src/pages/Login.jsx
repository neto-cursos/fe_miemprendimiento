import {Header} from './../components/Forms/Elements';
import LoginForm from './../components/Forms/LoginForm';

const Login = (props) => {
    return (
        <>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <Header
                        heading="Ingresa a tu cuenta"
                        paragraph="¿Aún no tiene una cuenta? "
                        linkName="Crear cuenta"
                        linkUrl="/signup"
                    />
                    <LoginForm/>
                </div>
            </div>
        </>
    );
}

export default Login;