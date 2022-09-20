import { useLocation } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './AuthLayout.css'


function AuthLayout({ children }) {
    const location = useLocation()
    const isSignIn = location.pathname === '/signin'

    return (
        <main className="auth">
            <div className="container auth__container">
                <div className="auth__wrapper">
                    <div className="auth__logo">
                        <Logo />
                    </div>
                    <h1 className='auth__title'>
                        {isSignIn ? "Рады видеть!" : "Добро пожаловать!"}
                    </h1>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout;
