import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__wrapper">
          <p className="footer__copyright">© 2022</p>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__link" href="https://github.com/" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
