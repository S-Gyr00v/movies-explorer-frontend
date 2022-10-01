import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import AuthButton from '../AuthButton/AuthButton';
import Error from '../Error/Error';
import Label from '../Label/Label';
import "./Register.css"
import { useState, useEffect } from 'react';
import { useFormWithValidation } from './../Hooks/useFormWithValidation';
import { VALIDATION_PARAMS } from '../../utils/const';

function Register({ registrationAccount, serverError, isDisabledButton }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({ name: '', email: '', password: '' })
  const [isValidName, setValidName] = useState(true)
  const [isValidEmail, setValidEmail] = useState(true)

  useEffect(() => {
    if (values.name) setValidName(VALIDATION_PARAMS.REGEX.NAME.test(values.name))
    if (values.email) setValidEmail(VALIDATION_PARAMS.REGEX.EMAIL.test(values.email))
  }, [values])

  function sendFormOnSubmit(event) {
    event.preventDefault();
    registrationAccount(values)

  }
  return (
    <AuthLayout>
      <form className="form form-register" name='register' noValidate onSubmit={sendFormOnSubmit}>
        <Label
          text='Имя'
          name='name'
          setValue={handleChange}
          value={values}
        />
        {!isValidName && <Error text={VALIDATION_PARAMS.MESSAGES.NAME} />}
        <Label
          text='E-mail'
          name='email'
          type='email'
          setValue={handleChange}
          value={values}
        />
        {!isValidEmail && <Error text={VALIDATION_PARAMS.MESSAGES.EMAIL} />}
        <Label
          text='Пароль'
          name='password'
          type='password'
          setValue={handleChange}
          value={values}
        />
        <Error text={errors.password} />
        <AuthButton isDisabled={isDisabledButton || !isValid || !isValidEmail || !isValidName} serverError={serverError} />
      </form>
    </AuthLayout>
  );
}

export default Register;
