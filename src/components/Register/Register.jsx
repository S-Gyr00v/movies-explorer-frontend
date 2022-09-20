import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import AuthButton from '../AuthButton/AuthButton';
import Error from '../Error/Error';
import Label from '../Label/Label';
import "./Register.css"

function Register() {
  return (
    <AuthLayout>
      <form className="form form-register" name='register' noValidate>
        <Label
          text='Имя'
          name='name'
        />
        <Label
          text='E-mail'
          name='email'
          type='email'
        />
        <Label
          text='Пароль'
          name='password'
          type='password'
        />
        <Error text="Что-то пошло не так..." />
        <AuthButton />
      </form>
    </AuthLayout>
  );
}

export default Register;
