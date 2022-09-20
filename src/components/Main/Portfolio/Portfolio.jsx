import "./Portfolio.css"

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/S-Gyr00v/how-to-learn" target="_blank">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/S-Gyr00v/russian-travel" target="_blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/S-Gyr00v/react-mesto-api-full" target="_blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
