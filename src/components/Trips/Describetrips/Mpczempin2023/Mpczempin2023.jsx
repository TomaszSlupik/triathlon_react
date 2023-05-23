import "../../../../template/Event.scss";
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

export default function Mpczempin2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Mistrzostwa Polski Czempiń</Linetext>
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
              src={process.env.PUBLIC_URL + "/img/img_2023/czempinTwo.jpg"}
              alt="Batony białkowe"
            />
            <Halfbox>
              <TextDescribebox>
                Drugi start sezonu zaplanowany miałem na imprezę w Czempiniu.
                Podobnie jak w Rumii były to Mistrzostwa Polski, ale na średnim
                dystansie (10km bieg - 60km rower - 10km bieg). Z optymistycznym
                nastawieniem ruszyliśmy do Poznania, aby zakwaterować się. W
                podróży testowaliśmy batony z wysoką ilością białka. Smak oreo
                wygrał!
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox style={{ marginRight: "1.2em" }}>
              <TextDescribebox>
                Po przyjeździe, zakwaterowaliśmy się w apartamencie w Poznaniu.
                Szybkie zakupy w żabce i mogliśmy podładować kcal przed
                niedzielnym startem, które były zaplanowane na 13:00.
              </TextDescribebox>
            </Halfbox>
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/czepinThree.jpg"}
              alt="Ładowanie kcal przed zawodami"
            />
          </Cardflex>

          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>
          <Centerheader>Bieg</Centerheader>
          <div data-aos="fade-left">
            <TextDescribebox>
              Mistrzostwa Polski w Duathlonie na dystansie średnim zaplanowane
              były na godzinę 13:00. Dziesięć minut przed startem zrobiłem 1km
              rozgrzewki w tym kilka rytmów. Pięć minut przed startem już każdy
              ustawił się na linii startu. Wystrzał startera i od razu
              narzuciłem bardzo mocne tempo. Chciałem zaryzykować i oderwać się
              od grupy. Już od początkowych kilometrów byłem na prowadzeniu.
              Całe 10km prowadziłem, a ze mną biegł 1 zawodnik z kat. PRO.
              Pierwsze 10km zrobiłem w czasie 00:32:34 wbiegając jako pierwszy
              zawodnik do T1.
            </TextDescribebox>
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/czempinFour.jpg"}
                alt="Etap biegowy, pierwsze 10km - MP Czempin"
              />
            </div>
          </div>
          <Centerheader>Rower</Centerheader>
          <div data-aos="fade-right">
            <TextDescribebox>
              W tym dniu rower w moim wykonaniu był bardzo słaby. Na
              początkowych kilometrach próbowałem nawiązać walkę z rywalami,
              którzy mieli stratę do mnie po etapie biegowym, jednak nic nie
              szło. Nie mogłem wejść na wysokie obroty. Mój czas z roweru to
              dopiero (27) miejsce. Jednak nie poddałem się i w myślach miałem,
              że po skończeniu roweru i rozpoczęciu ostatniego etapu uda mi się
              jeszcze nawiązać walkę z rywalami.
            </TextDescribebox>
          </div>
          <Centerheader>Bieg</Centerheader>
          <Cardflex data-aos="fade-left">
            <Halfbox style={{ marginRight: "1.2em" }}>
              <TextDescribebox>
                Drugi bieg to również było 10km. Od początku ruszyłem mocno. Już
                na pierwszym kilometrze wyprzedziłem pierwszego zawodnika do
                którego straciłem na etapie rowerowym. Z każdym kilometrem
                próbowałem rozpędzać się. Udało się dogonić kolejnych zawodników
                i ich wyprzedzić. Ostatnie 2 kilometry to już było na zasadzie
                dobiegnięcia do mety.
              </TextDescribebox>
            </Halfbox>
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/czempinFive.jpg"}
              alt="Etap biegowy - MP RUMIA"
            />
          </Cardflex>
          <div data-aos="fade-right">
            <TextDescribebox>
              Podsumowując cały start i zawody w Czempiniu - ze startu jestem
              zadowolony. Wiem jakie wnioski należy wyciągnąć, aby na kolejnych
              zawodach było jeszcze lepiej. Podziękowania dla organizatorów za
              super przygotowaną imprezę, jak zawsze na najwyższym poziomie,
              polecam każdemu kto jeszcze nie spróbował. Finalnie udało się
              zdobyć brązowy medal Mistrzostw Polski w kat. M30.
            </TextDescribebox>
          </div>

          <div data-aos="fade-left">
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/czempinSix.JPG"}
                alt="Medal MP - brązowy medal"
              />
            </div>
          </div>

          <Cardflex data-aos="fade-right">
            <Halfbox style={{ marginRight: "1.2em" }}>
              <TextDescribebox>
                Brązowy medal Mistrzostw Polski - kat. M30
              </TextDescribebox>
            </Halfbox>
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/czempinSeven.JPG"}
              alt="Podium - MP Czempin"
            />
          </Cardflex>

          <Centerheader>3 miejsce kat. M30 - Mistrzostwa Polski</Centerheader>
        </div>
      </div>
    </div>
  );
}
