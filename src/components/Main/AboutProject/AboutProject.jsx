import "./AboutProject.css"

function AboutProject() {
  return (
    <section className="project" id='project'>
      <div className="container project__container">
        <h3 className="title project__title">О проекте</h3>
        <div className="project__description">
          <div className="project__description-column">
            <p className="project__description-title">Дипломный проект включал 5 этапов</p>
            <p className="project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="project__description-column">
            <p className="project__description-title">На выполнение диплома ушло 5 недель</p>
            <p className="project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="project__progress">
          <div className="project__progress-column">
            <div className="project__progress-bar project__progress-bar_color_black">1 неделя</div>
            <p className="project__progress-title">Back-end</p>
          </div>
          <div className="project__progress-column">
            <div className="project__progress-bar">4 недели</div>
            <p className="project__progress-title">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
