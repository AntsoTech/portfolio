import React from "react";
import Fade from "react-reveal/Fade";
import Watermark from "./Watermark";

const About = () => {
  return (
    <div className="about">
      <Watermark text="MON HISTOIRE" />
      {/* Introduction text */}
      <Fade bottom delay={1000} fraction={1}>
        <div className="about__paragraph">
          <h2 className="about__paragraph__quote">
            « La meilleure façon de prédire l’avenir c’est de le créer. »
          </h2>
          <h2 className="about__paragraph__title"> Peter Drucker</h2>
        </div>
      </Fade>
      {/* Main text */}
      <Fade bottom cascade delay={1000} fraction={1}>
        <div className="about__info">
          <div className="about__info__intro">
            <h4>{`< Intro  / >`}</h4>
            <p>
              Je suis un développeur junior spécialisé en Javascript, React et
              node.js. Je suis actuellement en recherche d’un stage pour
              continuer à progresser et aider une entreprise à générer de la
              valeur pour leurs clients.
            </p>
          </div>

          <div className="about__info__main">
            <h4>{`< Main / >`} </h4>
            <div className="about__info__main__experience1">
              {" "}
              <h3>{`< 2022 >`}</h3>
              <h2> Wild code school</h2>
              <p>
                6 mois de formation intensive “développeur web et web mobile”
                (équivalence BAC+2 informatique) Javascript (ES6) / Node.JS /
                Typescript / React / SQL
              </p>
            </div>
            <div className="about__info__main__experience2">
              {" "}
              <h3>{`< 2018-2021 >`}</h3>
              <h2> Galeries Lafayette </h2>
              <p>Head of innovation and digital-in-store product</p>
            </div>
            <div className="about__info__main__experience3">
              {" "}
              <h3>{`< 2015-2018 >`}</h3>
              <h2> Carrefour France (BU proximité)</h2>
              <p>Head of ecommerce operations & innovation</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
