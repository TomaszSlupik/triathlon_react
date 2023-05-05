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
import Centerheader from "../../../../style/mymuistyle/centerheader";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";
import Halfbox from "../../../../style/mymuistyle/halfbox";
import Cardflex from "../../../../style/mymuistyle/cardflex";
import "../../../../template/Event.scss";

export default function Mprumia2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Mistrzostwa Polski Rumia</Linetext>
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
              src={process.env.PUBLIC_URL + "/img/img_2023/rumiaTwo.JPG"}
              alt="pakiet startowy Rumia"
            />
            <Halfbox>
              <TextDescribebox>
                Po udanym cyklu Indoor Triathlon przyszedł czas na otwarcie
                sezonu Duathlonowego. Rok temu nie mogłem wystartować w zawodach
                z powodu kontuzji (problemy z Achillesem). W tym roku nie
                wiedziałem czy na pewno wystartuje, ponieważ 2,5 tygodnia przed
                zawodami złapała mnie choroba i gorączka. Jednak udało się
                wyzdrowieć i zrobić treningi wprowadzające przed MP. Do Rumii
                wyjechaliśmy dzień przed tj. w sobotę i zakwaterowaliśmy się w
                Hotelu Falko.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
          <div data-aos="fade-right" style={{ marginTop: "0.4em" }}>
            <TextDescribebox>
              W tym samym dniu w Hotelu było wesele jednak na pierwszym piętrze
              było bardzo cicho. Warunki w hotelu oceniam bardzo dobrze. Po
              zakwaterowaniu się, zwiedziliśmy Rumię, a następnie zrobiłem
              lekkie rozruch 7 kilometrowy przed jutrzejszym startem.
            </TextDescribebox>
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaThree.jpg"}
                alt="Hotel Falko"
              />
            </div>
          </div>

          <Cardflex data-aos="fade-left">
            <Halfbox style={{ marginRight: "1.2em" }}>
              <TextDescribebox>
                Wieczorem postanowiliśmy wybrać się do Gdyni i spotkać się ze
                znajomymi przy dobrym jedzeniu. Padło na bardzo dobrą
                pierogarnię. Po naładowaniu baterii, wybraliśmy się nad morze,
                pospacerowaliśmy, a wieczorem wróciliśmy do Rumii.
              </TextDescribebox>
            </Halfbox>
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/rumiaFour.jpg"}
              alt="Pierogi - restauracja w Gdyni"
            />
          </Cardflex>

          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>
          <Centerheader>Bieg</Centerheader>
          <div data-aos="fade-right">
            <TextDescribebox>
              START Mistrzostw Polski Age Group zaplanowany był na godzinę
              10:00. Mając 5 min do startu, ustawiłem się w pierwszej linii i
              czekałem na wystrzał startera. Po rozpoczęciu ścigania, już na
              pierwszych metrach objąłem prowadzenie. Pierwszy km bardzo mocno
              ruszyliśmy w tempie 2:57/km. Już po 3 km miałem dość sporą
              przewagę nad zawodnikami. Całe 5km przebiegłem w 00:15:44,
              zyskując 26 sekund przewagi nad drugim zawodnikiem.
            </TextDescribebox>
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaFive.jpg"}
                alt="Etap biegowy - MP RUMIA"
              />
              <div className="maraton__box-img--signature">
                Foto. LOTTO Duathlon Energy
              </div>
            </div>
          </div>

          <Centerheader>Rower</Centerheader>
          <div data-aos="fade-left">
            <TextDescribebox>
              W strefie zmian troszkę straciłem sekund, ale udało się szybko
              odnaleźć rower i wyjechać jako pierwszy zawodnik. Do 3 nawrotki
              jechałem cały czas na prowadzeniu. Na ostatnich 5km wyprzedził
              mnie jeden zawodnik. Cały etap kolarski czułem się bardzo dobrze,
              zachowując siły na kolejny bieg. Rower pojechałem ze średnią
              prędkością 43km/h.
            </TextDescribebox>
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaSix.jpg"}
                alt="Etap kolarski - MP RUMIA"
              />
              <div className="maraton__box-img--signature">
                Foto. AK - SKA PHOTO
              </div>
            </div>

            <Centerheader>Bieg</Centerheader>

            <Cardflex data-aos="fade-right">
              <Halfbox style={{ marginRight: "1.2em" }}>
                <TextDescribebox>
                  Po wybiegnięciu ze strefy zmian traciłem do pierwszego
                  zawodnika około 6 sekund. Po pierwszym kilometrze udało się
                  zniwelować stratę i objąłem prowadzenie. Czułem się bardzo
                  dobrze i zacząłem jeszcze bardziej przyspieszać. Całość 2,5km
                  przebiegłem w bardzo dobrym tempie: 3'09"/km i wbiegłem na
                  metę jako pierwszy zawodnik OPEN zdobywając tytuł Mistrza
                  Polski.
                </TextDescribebox>
              </Halfbox>
              <img
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaSeven.jpg"}
                alt="Etap biegowy - MP RUMIA"
              />
              <div className="maraton__box-img--signature">
                Foto. LOTTO Duathlon Energy
              </div>
            </Cardflex>
          </div>

          <div data-aos="fade-right">
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaTen.jpg"}
                alt="Finish"
              />
              <div className="maraton__box-img--signature">
                Foto. LOTTO Duathlon Energy
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaEight.jpg"}
                alt="koszulki MP"
              />
              <div className="maraton__box-img--signature">
                Foto. LOTTO Duathlon Energy
              </div>
            </div>
          </div>

          <div data-aos="fade-right">
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/rumiaNine.jpg"}
                alt="Mistrz Polski - podium"
              />
              <div className="maraton__box-img--signature">
                Foto. LOTTO Duathlon Energy
              </div>
            </div>
          </div>

          <Centerheader>Mistrz Polski AG w Duathlonie</Centerheader>
        </div>
      </div>
    </div>
  );
}
