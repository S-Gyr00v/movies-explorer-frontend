import NavTab from '../NavTab/NavTab';
import "./Promo.css"

function Promo() {
  return (
    <section className="promo">
      <div className="container promo__container">
        <div className="promo__wrapper">
          <p className="promo__text">
            Учебный проект студента факультета Веб-разработки.
          </p>
          <NavTab />
        </div>
      </div>
    </section>
  );
}

export default Promo;
