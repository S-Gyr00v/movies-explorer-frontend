import { Link, useLocation } from 'react-router-dom';
import Error from '../Error/Error';
import "./AuthButton.css"

function AuthButton({ isDisabled, serverError }) {
  const location = useLocation()
  const isLoginPage = location.pathname === "/signin"
  return (
    <>
      <button
        disabled={isDisabled}
        type="submit"
        className='form__submit-button'
      >{isLoginPage ? "Войти" : "Регистрация"}</button>
      <Error text={serverError} type="button" />
      <div className="auth__question">
        <p className="auth__question-text">{isLoginPage ? "Ещё не зарегистрированы?" : "Уже зарегистрированы?"}</p>
        <Link className="auth__question-link" to={isLoginPage ? "/signup" : "/signin"}>
          {isLoginPage ? "Регистрация" : "Войти"}
        </Link>
      </div>
    </>
  );
}

export default AuthButton;
