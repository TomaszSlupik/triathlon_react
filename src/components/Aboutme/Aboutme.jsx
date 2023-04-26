import React from "react";
import "./Aboutme.scss";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function Aboutme() {
  const style = {
    item: { fontSize: "4rem", color: "#7c5fe9", zIndex: "15" },
  };

  return (
    <div>
      <div className="aboutme">
        <div className="aboutme__header">O mnie</div>
        <div className="aboutme__line"></div>
        <div className="aboutme__wrapper">
          <div className="aboutme__wrapper-box">
            <div className="aboutme__wrapper-box--shadow"></div>
            <img
              src={process.env.PUBLIC_URL + "/img/politechnika.jpg"}
              alt=""
              className="aboutme__wrapper-box--imgCode"
            />
            <SchoolIcon style={style.item} />
            <div className="aboutme__wrapper-box--header">
              Magister Inżynier
            </div>
            <div className="aboutme__wrapper-box--text">
              Nauka na warszawskich uczelniach technicznych - Politechnika
              Warszawska oraz ekonomicznych wszechstronnie rozwija moją wiedzę
              teoretyczną w różnych dziedzinach zawodowych. Posiadam kilkuletnie
              doświadczenie w różnych firmach. Ważne jest dla mnie codzienna
              możliwość praktycznego zastosowania nabytych umiejętności. Lubiący
              podejmować duże wyzwania.
            </div>
          </div>
          <div className="aboutme__wrapper-box">
            <div className="aboutme__wrapper-box--shadow"></div>
            <img
              src={process.env.PUBLIC_URL + "/img/codeTwo.jpg"}
              alt=""
              className="aboutme__wrapper-box--imgCode"
            />
            <i className="fa-solid fa-code" style={style.item}></i>
            <div className="aboutme__wrapper-box--header">Programista</div>
            <div className="aboutme__wrapper-box--text">
              Na codzień pracuję w dużej korporacji jako Programista. Codziennie
              podnoszę swoje kompetencję na studiach podyplomowych. W wolnych
              chwilach również uwielbiam programować. Miłośnik tworzenia stron
              internetowych oraz aplikacji pod urządzenia Mobilne oraz Desktopy.
              Głównie skoncentrowany jestem na aspektach Frontendowych. Buduję
              również od zera procesy ETL'owe.
            </div>
          </div>
          <div className="aboutme__wrapper-box threeBox">
            <div className="aboutme__wrapper-box--shadow"></div>
            <img
              src={process.env.PUBLIC_URL + "/img/sports.JPG"}
              alt=""
              className="aboutme__wrapper-box--imgCode"
            />
            <DirectionsRunIcon style={style.item} />
            <div className="aboutme__wrapper-box--header">Sportowiec</div>
            <div className="aboutme__wrapper-box--text">
              Jestem w sporcie od trzeciego roku życia. Na początku było judo,
              kończąc na 1DAN'ie w sekcji judo na Politechnice Warszawskiej.
              Byłem też w klasie pływackiej. Cały czas jestem w sporcie. Chcę to
              kontynuować. W Triathlonie czuję się dobrze, bo zdobyłem
              kwalifikację na MŚ i chciałbym tam powalczyć.Trafiłem do tego
              sportu przez kontuzję. Biegałem na dobrym poziomie. Pojechałem na
              zawody do Krynicy, gdzie doznałem urazu. To było zmęczeniowe
              złamanie. Dlatego zacząłem pływać i jeździć na rowerze. W ten
              sposób trafiłem do triathlonu. Na co dzień trenuję samodzielnie.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
