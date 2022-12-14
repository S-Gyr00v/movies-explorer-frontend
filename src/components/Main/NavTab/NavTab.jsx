import "./NavTab.css"

function NavTab() {
  return (
    <ul className="nav-tab">
      <li>
        <a className="nav-tab__link" href="#project">О проекте</a>
      </li>
      <li>
        <a className="nav-tab__link" href="#techs">Технологии</a>
      </li>
      <li>
        <a className="nav-tab__link" href="#about-me">Студент</a>
      </li>
    </ul>
  );
}

export default NavTab;
