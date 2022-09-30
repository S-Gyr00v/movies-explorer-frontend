import HeaderAndFooterLayout from '../../layouts/HeaderAndFooterLayout';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import "./SavedMovies.css"
import { useEffect, useState } from 'react';
import { getSavedMovies } from '../../utils/MoviesApi';

function SavedMovies({ savedFilms, realizeSavedCards }) {
  const [searchFormInput, setSearchFormInput] = useState("")
  const [durationButton, setDurationButton] = useState(false)
  const [foundedFilms, setFoundedFilms] = useState([])

  useEffect(() => {
    if (savedFilms.length === 0) realizeSavedCards()
  }, [])

    useEffect(() => {
    setFoundedFilms(filterSearchResult(savedFilms))
  }, [ searchFormInput, savedFilms, durationButton])

    useEffect(() => {
    if (foundedFilms.length !== 0) localStorage.setItem('savedMoviesState', JSON.stringify({ searchFormInput, durationButton, foundedFilms }))
  }, [foundedFilms])

    useEffect(() => {
    if (localStorage.getItem("savedMoviesState")) {
      const { searchFormInput, durationButton, foundedFilms } = JSON.parse(localStorage.getItem("savedMoviesState"))
      setSearchFormInput(searchFormInput)
      setDurationButton(durationButton)
      setFoundedFilms(foundedFilms)
    }
  }, [])

  function filterSearchResult(movies) {
    return movies.filter((movie) => {
      const isIncludes = movie.nameRU.toLowerCase().includes(searchFormInput.toLowerCase())
      return durationButton
        ? isIncludes && movie.duration <= 40
        : isIncludes
    }
    )
  }

  return (
    <HeaderAndFooterLayout>
      <div className="saved">
        <div className="container movies__container">
          <SearchForm
            searchFormInput={searchFormInput}
            durationButton={durationButton}
            setSearchFormInput={setSearchFormInput}
            setDurationButton={setDurationButton} />
          <MoviesCardList movies={filterSearchResult(savedFilms)} allMovies={savedFilms} />
        </div>
      </div>
    </HeaderAndFooterLayout>
  );
}

export default SavedMovies;

// <MoviesCardList movies={foundedFilms.slice(0, countFilms)} allMovies={allMovies} />