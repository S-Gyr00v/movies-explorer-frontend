import { useState } from 'react';
import "./MoviesCard.css"
import film from '../../images/film.jpg'

function MoviesCard() {
  const [active, setActive] = useState(true)

  return (
    <li className="card-film">
      <div className="card-film__description">
        <p className="card-film__name">33 слова о дизайне</p>
        <button
          className={active
            ? "card-film__like-button card-film__like-button_active"
            : "card-film__like-button"
          }
          type="button"
        />
        <p className="card-film__duration">1ч 47м</p>
      </div>
      <a className='card-film__trailer-link' href="#" target="_blank">
        <img
          className="card-film__image"
          src={film}
          alt="33 слова о дизайне"
        />
      </a>
    </li >
  );
}

export default MoviesCard;
