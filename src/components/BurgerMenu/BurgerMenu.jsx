import { Link, NavLink } from 'react-router-dom';

import './BurgerMenu.css';

// import ProfileButton from '../ProfileButton/ProfileButton';

function BurgerMenu({ isShowMenu, setIsShowMenu }) {
    return (
        <div className={isShowMenu ? 'menu menu_active' : 'menu'}>
            <div className="menu__wrapper">
                <button
                    className="menu__close-button"
                    onClick={() => setIsShowMenu(false)}
                    type="button"
                ></button>
                <nav className="menu__nav">
                    <ul className="menu__nav-list">
                        <li><NavLink
                            className={({ isActive }) => isActive ? "menu__nav-link menu__nav-link_active" : "menu__nav-link"}
                            to="/"
                        >
                            Главная
                        </NavLink></li>
                        <li><NavLink
                            className={({ isActive }) => isActive ? "menu__nav-link menu__nav-link_active" : "menu__nav-link"}
                            to="/movies"
                        >
                            Фильмы
                        </NavLink></li>
                        <li><NavLink
                            className={({ isActive }) => isActive ? "menu__nav-link menu__nav-link_active" : "menu__nav-link"}
                            to="/saved-movies"
                        >
                            Сохранённые фильмы
                        </NavLink></li>
                    </ul>
                </nav>
                <Link className="header__profile-button" to="/profile">
                    <div className="header__profile-button__photo" />
                    <p className="header__profile-button__text">Аккаунт</p>
                </Link>
            </div>
        </div>
    );
}

export default BurgerMenu;
