import Header from '../Header/Header';
import "./Profile.css"

function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="container profile__container">
          <div className="profile__wrapper">
            <h1 className="profile__title">Привет, Виталя!</h1>
            <form className="profile__form">
              <label className='profile__label'>
                <p className="profile__text">Имя</p>
                <input
                  className="profile__input"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                />
              </label>
              <label className='profile__label'>
                <p className="profile__text">E-mail</p>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  placeholder="Ваш E-mail"
                />
              </label>
            </form>
            <div className="profile__buttons">
              <button
                className='profile__button'
                type="button"
              >Редактировать</button>
              <button
                className='profile__button profile__button_color_pink'
                type="button"
              >Выйти из аккаунта</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
