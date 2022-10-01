import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import HeaderAndFooterLayout from '../../layouts/HeaderAndFooterLayout'
import { useEffect, useState } from 'react'
import { getMovies } from '../../utils/MainApi'
import Preloader from './../Preloader/Preloader'
import { useCardResize } from './../Hooks/useCardResize'

function Movies({ savedFilms, realizeSavedCards }) {
  const [allMovies, setAllMovies] = useState([])
  const [searchFormInput, setSearchFormInput] = useState('')
  const [durationButton, setDurationButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMistake, setIsMistake] = useState('')
  const { countAddFilms, startCountFilms, setParamsCountFilms } =
    useCardResize()
  const [countFilms, setCountFilms] = useState(0)
  const [foundedFilms, setFoundedFilms] = useState([])
  const isShowButton = countFilms < foundedFilms.length

  useEffect(() => {
    setCountFilms(startCountFilms)
    setFoundedFilms(filterSearchResult(allMovies))
  }, [startCountFilms, searchFormInput, allMovies, durationButton])

  useEffect(() => {
    if (localStorage.getItem('moviesState')) {
      const { searchFormInput, durationButton, foundedFilms } = JSON.parse(
        localStorage.getItem('moviesState')
      )
      setSearchFormInput(searchFormInput)
      setDurationButton(durationButton)
      setFoundedFilms(foundedFilms)
    }
  }, [])

  useEffect(() => {
    if (allMovies.length === 0 && searchFormInput && !isLoading) fetchMovies()
  }, [searchFormInput, durationButton])

  useEffect(() => {
    if (foundedFilms.length !== 0)
      localStorage.setItem(
        'moviesState',
        JSON.stringify({ searchFormInput, durationButton, foundedFilms })
      )
  }, [foundedFilms])

  useEffect(() => {
    setParamsCountFilms('all')
    window.addEventListener('resize', setParamsCountFilms)
    return () => window.removeEventListener('resize', setParamsCountFilms)
  }, [])

  function filterSearchResult(movies) {
    return movies.filter((movie) => {
      const isIncludes = movie.nameRU
        .toLowerCase()
        .includes(searchFormInput.toLowerCase())
      return durationButton ? isIncludes && movie.duration <= 40 : isIncludes
    })
  }

  async function fetchMovies() {
    const myFilms = await realizeSavedCards()
    setIsLoading(true)
    setIsMistake()

    getMovies()
      .then((data) => {
        setAllMovies(setLike(data, myFilms))
      })
      .catch((err) => {
        setIsMistake(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function setLike(allMovies, savedFilms) {
    return allMovies.map((movie) => {
      let toggle = false
      let filmId = null

      savedFilms.forEach((film) => {
        if (movie.id == film.movieId) {
          toggle = true
          filmId = film._id
        }
      })

      return toggle ? { ...movie, _id: filmId } : movie
    })
  }

  function showMoreCards() {
    setCountFilms(countFilms + countAddFilms)
  }

  return (
    <HeaderAndFooterLayout>
      <div className="movies">
        <div className="container movies__container">
          <SearchForm
            searchFormInput={searchFormInput}
            durationButton={durationButton}
            setSearchFormInput={setSearchFormInput}
            setDurationButton={setDurationButton}
          />
          {isMistake && <p>{isMistake}</p>}
          {isLoading && !isMistake ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={foundedFilms.slice(0, countFilms)}
              allMovies={allMovies}
            />
          )}
          {isShowButton && (
            <button
              className="movies__more-button"
              type="button"
              onClick={showMoreCards}
            >
              Ещё
            </button>
          )}
        </div>
      </div>
    </HeaderAndFooterLayout>
  )
}

export default Movies