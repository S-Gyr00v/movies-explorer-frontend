import { useState, useContext } from 'react';
import "./MoviesCard.css"
import film from '../../images/film.jpg'
import { durationFormat } from './../../utils/durationFormat';
import { createMovie, deleteMovie } from '../../utils/MoviesApi';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../contexts/appContext';

function MoviesCard({ movie }) {
  const { setSavedFilms, savedFilms } = useContext(AppContext)
  const [isActive, setActive] = useState(!!movie?._id)
  const [idCard, setIdCard] = useState(movie._id)
  const location = useLocation()
  const isSavedMovie = location.pathname === "/saved-movies"


  function saveFilm() {
    const token = localStorage.getItem('JWT')
    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: "https://api.nomoreparties.co" + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
      movieId: movie.id,
    }

    createMovie(token, newMovie)
      .then((card) => {
        setActive(true)
        setIdCard(card._id)
      })
  }

  function deleteFilm(id) {
    const token = localStorage.getItem('JWT')
    deleteMovie(token, id)
      .then((card) => {
        setActive(false)
      })
  }

  function clickButton() {
    if (isSavedMovie) {
      deleteFilm(movie._id)
      setSavedFilms(savedFilms.filter(film => film._id !== movie._id))
    } else {
      isActive ? deleteFilm(idCard) : saveFilm()
    }
  }

  return (
    <li className="card-film">
      <div className="card-film__description">
        <p className="card-film__name">{movie.nameRU}</p>
        <button
          className={isActive
            ? "card-film__like-button card-film__like-button_active"
            : "card-film__like-button"
          }
          type="button"
          onClick={clickButton}
        />
        <p className="card-film__duration">{durationFormat(movie.duration)}</p>
      </div>
      <a className='card-film__trailer-link' href={movie.trailerLink} target="_blank">
        <img
          className="card-film__image"
          src={isSavedMovie ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`}
          alt="33 слова о дизайне"
        />
      </a>
    </li >
  );
}



export default MoviesCard;
