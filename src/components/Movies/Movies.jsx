import "./Movies.css"
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import HeaderAndFooterLayout from '../../layouts/HeaderAndFooterLayout';

function Movies() {
  return (
    <HeaderAndFooterLayout>
      <div className="movies">
        <div className="container movies__container">
          <SearchForm />
          <MoviesCardList />
          <button
            className="movies__more-button"
            type='button'
          >
            Ещё
          </button>
        </div>
      </div >
    </HeaderAndFooterLayout>
  );
}

export default Movies;
