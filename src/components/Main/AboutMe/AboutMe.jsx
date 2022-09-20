import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio'
import avatar from '../../../images/avatar.jpg'

function AboutMe() {
    return (
        <section className="about-me" id='about-me'>
            <div className="container about-me__container">
                <h3 className="title about-me__title">Студент</h3>
                <div className="about-me__wrapper">
                    <div className="about-me__description">
                        <p className="about-me__name">Виталий</p>
                        <p className="about-me__specialization">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="about-me__text">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <ul className="about-me__links">
                            <li>
                                <a className="about-me__link" href="https://github.com/S-Gyr00v?tab=repositories" target="_blank">Github</a>
                            </li>
                        </ul>
                    </div>
                    <img className="about-me__avatar" src={avatar} alt="Аватар" />
                </div>
                <Portfolio />
            </div>
        </section>
    );
}

export default AboutMe;
