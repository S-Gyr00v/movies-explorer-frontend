import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import AuthButton from '../AuthButton/AuthButton';
import Label from '../Label/Label';
import "./Login.css"
import { useState, useEffect } from 'react';
import { useFormWithValidation } from './../Hooks/useFormWithValidation';
import Error from '../Error/Error';
import { VALIDATION_PARAMS } from '../../utils/const';

function Login({ enterInAccount, serverError,isDisabledButton }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '' })
  const [isValidEmail, setValidEmail] = useState(true)

  useEffect(() => {
    if (values.email) setValidEmail(VALIDATION_PARAMS.REGEX.EMAIL.test(values.email))
  }, [values])

  function sendFormOnSubmit(event) {
    event.preventDefault();
    enterInAccount(values)
  }

  return (
    <AuthLayout>
      <form className="form form-login" name='login' onSubmit={sendFormOnSubmit}>
        <Label
          text='E-mail'
          type='email'
          name='email'
          value={values}
          setValue={handleChange}

        />

        {!isValidEmail && <Error text={VALIDATION_PARAMS.MESSAGES.EMAIL} />}
        <Label
          text='Пароль'
          type='password'
          name='password'
          value={values}
          setValue={handleChange}

        />
        <Error text={errors.password} />
        <AuthButton isDisabled={isDisabledButton || !isValid || !isValidEmail} serverError={serverError} />
      </form>
    </AuthLayout>
  );
}


export default Login;
