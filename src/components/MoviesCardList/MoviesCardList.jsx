import MoviesCard from '../MoviesCard/MoviesCard';
import "./MoviesCardList.css"

function MoviesCardList({ movies, allMovies }) {
  if (movies.length === 0 && allMovies.length !== 0) return <p className="movies-not-found">Ничего не найдено</p>
  return (
    <ul className="movies-list">
      {movies.map(movie => <MoviesCard movie={movie} key={movie.id || movie.movieId} />)}
    </ul>
  );
}

export default MoviesCardList;
