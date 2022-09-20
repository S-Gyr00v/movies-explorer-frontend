import { useNavigate } from 'react-router-dom/dist';
import "./NotFound.css"

function NotFound() {
  const navigare = useNavigate()

  return (
    <div className="not-found">
      <div className="not-found__text">
        <p className="not-found__title">404</p>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button
        className="not-found__back-button"
        onClick={() => navigare(-1)}
        type="button"
      >
        Назад
      </button>
    </div >
  );
}

export default NotFound;
