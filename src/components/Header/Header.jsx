import "./Header.css"
import Navigation from './../Navigation/Navigation'
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../Logo/Logo';
import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const { isLogin } = useContext(AppContext);
  return (
    <>
      <header
        className="header"
      >
        <div className="container header__container">
          <div className="header__wrapper">
            <Logo />
            {isLogin
              ? <>
                <Navigation />
                <Link className="header__profile-button" to="/profile">
                  <div className="header__profile-button__photo" />
                  <p className="header__profile-button__text">Аккаунт</p>
                </Link>
                <div className="header__menu-button" onClick={() => setIsShowMenu(true)}></div>
              </>
              :

              <div className="header__buttons">
                <Link className="header__button" to="/signup">Регистрация</Link>
                <Link className="header__button header__button_color_black" to="/signin">Войти</Link>
              </div>
            }


          </div>
        </div>
      </header >
      <BurgerMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />

    </>

  );
}

export default Header;
