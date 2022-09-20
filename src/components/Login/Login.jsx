import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import AuthButton from '../AuthButton/AuthButton';
import Label from '../Label/Label';
import "./Login.css"

function Login() {
  return (
    <AuthLayout>
      <form className="form form-login" name='login'>
        <Label
          text='E-mail'
          type='email'
          name='email'
        />
        <Label
          text='Пароль'
          type='password'
          name='password'
        />
        <AuthButton />
      </form>
    </AuthLayout>
  );
}

export default Login;
