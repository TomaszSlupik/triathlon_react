import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import BacktoPage from "../BacktoPage";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../../style/mybreakpoints";
import Linetext from "../../../../style/mymuistyle/linetext";
import Line from "../../../../style/mymuistyle/line";
import Myscrollbox from "../../../../style/myscrollbox";
import Leftheader from "../../../../style/mymuistyle/leftheader";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";
import Halfbox from "../../../../style/mymuistyle/halfbox";
import Cardflex from "../../../../style/mymuistyle/cardflex";

export default function Bydgoszcz2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Enea Bydgoszcz Triathlon</Linetext>
          <Line />
        </ThemeProvider>
        <Myscrollbox />
        <div className="event__box">
          <Leftheader>
            <DoubleArrowIcon />
            Dzień przed startem
          </Leftheader>
          <Cardflex data-aos="fade-left">
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczThree.jpg"}
              alt="manekin - restauracja"
            />
            <Halfbox>
              <TextDescribebox>
                W zeszłym roku, początek lipca był debiutem w Enea Bydgoszcz
                Triathlon. Postanowiłem w tym roku, również wystartować w tej
                imprezie z racji tego, że jest super atmosfera, dobra
                organizacja, dobrze zorganizowana strefa T1 oraz T2 pomimo dużej
                liczby uczestników oraz wspaniali kibice na trasie. Oczywiście
                dzień przed startem odwiedziliśmy Manekina, gdzie podładowaliśmy
                troszkę kcal.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                W sobotę znajomi startowali na dłuższym dystansie 1/4, więc po
                rozruchu 8km udaliśmy się, aby im kibicować. Z wyścigu byli
                zadowoleni. Etap kolarski należał do Łukasza, natomiast biegowy
                do Karola. Po starcie spędziliśmy czas w Expo, a wieczorkiem
                było wyjście na miasto.
              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczFour.jpg"}
                alt="Zdjęcie z ekipą"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczFour.jpg"}
                alt="Zdjęcie z ekipą"
              />
            )}
          </Cardflex>

          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>

          <div data-aos="fade-left">
            <TextDescribebox>
              Pływanie odbywało się w rzece Brda. Z prądem rzeki udało się
              uzyskać tempo 01:03 min/100m i 0.475 KM przepłynąłem w czasie
              00:05:00. Szybka strefa zmian i wyjechałem na etap kolarski.
              Tydzień temu miałem wypadek na rowerze na zawodach w Suszu,
              jeszcze nie doszedłem tego dnia do pełni zdrowia i etap kolarski
              pojechałem zachowawczo. Bieg w moim wykonaniu był bardzo dobry,
              pobiegłem najlepszy czas na tych zawodach co pozwoliło uzyskać 3
              miejsce w kat M30 oraz 4 miejsce OPEN.
            </TextDescribebox>
          </div>

          <Cardflex data-aos="fade-right" style={{ marginBottom: "1em" }}>
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczTwo.jpg"}
              alt="statuetka"
            />
            <Halfbox>
              <TextDescribebox>
                Jak zawsze organizatorzy stanęli na wysokości zadania i za każde
                miejsce OPEN czy kategoriach wiekowych dostawaliśmy super
                nagrody i bardzo ładne statuetki.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <div data-aos="fade-left">
            <img
              className="championman__box-img"
              src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczOne.jpg"}
              alt="podium Enea Bydgoszcz Triathlon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
