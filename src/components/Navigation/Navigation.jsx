import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li><NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link_active" : "nav__link"}
          to="/movies"
        >
          Фильмы
        </NavLink></li>
        <li><NavLink
          className={({ isActive }) => isActive ? "nav__link nav__link_active" : "nav__link"}
          to="/saved-movies"
        >
          Сохранённые фильмы
        </NavLink></li>
      </ul>
    </nav>

  );
}

export default Navigation;


<NavLink className={({ isActive }) => isActive ? "nav__link_active" : "nav__link"} to="/about" />

