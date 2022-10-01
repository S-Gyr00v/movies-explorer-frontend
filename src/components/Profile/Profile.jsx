import { useContext } from 'react';
import { AppContext } from '../../contexts/appContext';
import Header from '../Header/Header';
import { useFormWithValidation } from '../Hooks/useFormWithValidation';
import "./Profile.css"
import { VALIDATION_PARAMS } from '../../utils/const';
import { useState, useEffect } from 'react';

function Profile({ logOut, userUpdate, resultUserUpdate,isDisabledButton }) {
  const { currentUser } = useContext(AppContext)
  const { values, handleChange, errors, isValid } = useFormWithValidation({ name: currentUser.name, email: currentUser.email })
  const [isValidName, setValidName] = useState(true)
  const [isValidEmail, setValidEmail] = useState(true)


    useEffect(() => {
      if (values.name) setValidName(VALIDATION_PARAMS.REGEX.NAME.test(values.name))
      if (values.email) setValidEmail(VALIDATION_PARAMS.REGEX.EMAIL.test(values.email))
    }, [values])

  return (
    <>
      <Header />
      <div className="profile">
        <div className="container profile__container">
          <div className="profile__wrapper">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form">
              <label className='profile__label'>
                <p className="profile__text">Имя</p>
                <input
                  className="profile__input"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={values.name}
                  onInput={handleChange}
                  required
                />
              </label>
              <label className='profile__label'>
                <p className="profile__text">E-mail</p>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  placeholder="Ваш E-mail"
                  value={values.email}
                  onInput={handleChange}
                  required
                />
              </label>
            </form>
            <p>{resultUserUpdate || !isValidName && VALIDATION_PARAMS.MESSAGES.NAME || !isValidEmail && VALIDATION_PARAMS.MESSAGES.EMAIL}</p>
            <div className="profile__buttons">
              <button
                className='profile__button'
                type="button"
                onClick={() => userUpdate(values)}
                disabled={isDisabledButton || !isValid || !isValidEmail || !isValidName ||  currentUser.name === values.name && currentUser.email === values.email}
              >Редактировать</button>
              <button
                className='profile__button profile__button_color_pink'
                type="button"
                onClick={logOut}
              >Выйти из аккаунта</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
