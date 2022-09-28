import "./Main.css"
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import HeaderAndFooterLayout from '../../layouts/HeaderAndFooterLayout';

function Main() {
  return (
    <div className="main">
      <HeaderAndFooterLayout>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </HeaderAndFooterLayout>
    </div>
  );
}

export default Main;
