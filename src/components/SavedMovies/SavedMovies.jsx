import HeaderAndFooterLayout from '../../layouts/HeaderAndFooterLayout'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'
import { useEffect, useState } from 'react'
import Preloader from '../Preloader/Preloader'

function SavedMovies({ savedFilms, realizeSavedCards }) {
  const [searchFormInput, setSearchFormInput] = useState('')
  const [durationButton, setDurationButton] = useState(false)
  const [foundedFilms, setFoundedFilms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isMistake, setIsMistake] = useState('')

  useEffect(() => {
    setIsLoading(true)
    setIsMistake()
    realizeSavedCards()
      .catch((err) => {
        setIsMistake(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setFoundedFilms(filterSearchResult(savedFilms))
  }, [searchFormInput, savedFilms, durationButton])

  useEffect(() => {
    if (foundedFilms.length !== 0)
      localStorage.setItem(
        'savedMoviesState',
        JSON.stringify({ searchFormInput, durationButton, foundedFilms })
      )
  }, [foundedFilms])

  useEffect(() => {
    if (localStorage.getItem('savedMoviesState')) {
      const { searchFormInput, durationButton, foundedFilms } = JSON.parse(
        localStorage.getItem('savedMoviesState')
      )
      setSearchFormInput(searchFormInput)
      setDurationButton(durationButton)
      setFoundedFilms(foundedFilms)
    }
  }, [])

  function filterSearchResult(movies) {
    return movies.filter((movie) => {
      const isIncludes = movie.nameRU
        .toLowerCase()
        .includes(searchFormInput.toLowerCase())
      return durationButton ? isIncludes && movie.duration <= 40 : isIncludes
    })
  }

  return (
    <HeaderAndFooterLayout>
      <div className="saved">
        <div className="container movies__container">
          <SearchForm
            searchFormInput={searchFormInput}
            durationButton={durationButton}
            setSearchFormInput={setSearchFormInput}
            setDurationButton={setDurationButton}
          />
          {isLoading && !isMistake ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={filterSearchResult(savedFilms)}
              allMovies={savedFilms}
            />
          )}
        </div>
      </div>
    </HeaderAndFooterLayout>
  )
}

export default SavedMovies