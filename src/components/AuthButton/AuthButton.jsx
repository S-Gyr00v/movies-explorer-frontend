import { Link } from 'react-router-dom';
import "./AuthButton.css"

function AuthButton() {
  return (
    <>
      <button
        type="submit"
        className='form__submit-button'
      >Регистрация</button>
      <div className="auth__question">
        <p className="auth__question-text">Ещё не зарегистрированы?</p>
        <Link className="auth__question-link" to="/signin">
          Войти
        </Link>
      </div>
    </>
  );
}

export default AuthButton;
