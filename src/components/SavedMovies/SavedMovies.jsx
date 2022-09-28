import HeaderAndFooterLayout from '../../layouts/HeaderAndFooterLayout';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import "./SavedMovies.css"

function SavedMovies() {
  return (
    <HeaderAndFooterLayout>
      <div className="saved">
        <div className="container movies__container">
          <SearchForm />
          <MoviesCardList />
        </div>
      </div>
    </HeaderAndFooterLayout>
  );
}

export default SavedMovies;
