import "./Logo.css"
import logoSrc from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  return (
    <img
      className="logo"
      src={logoSrc}
      alt="Логотип"
      onClick={() => navigate('/')}
    />
  );
}

export default Logo;
