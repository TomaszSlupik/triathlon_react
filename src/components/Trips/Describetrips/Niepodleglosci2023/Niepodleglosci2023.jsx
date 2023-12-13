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
import Cardflex from "../../../../style/mymuistyle/cardflex";
import Halfbox from "../../../../style/mymuistyle/halfbox";
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";

export default function Niepodleglosci2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>33 Bieg Niepodległości</Linetext>
          <Line />
        </ThemeProvider>
        <Myscrollbox />
        <div className="event__box">
          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>
          <Centerheader>Bieg</Centerheader>

          <Cardflex data-aos="fade-left">
            <img
              className="event__box-map"
              src={
                process.env.PUBLIC_URL + "/img/img_2023/niepodleglosciFive.jpg"
              }
              alt="Bieg niepodległości - 3 km trasy"
            />
            <Halfbox>
              <TextDescribebox>
                Pierwsze 5 kilometrów to były prawdziwe emocje! Razem z grupą
                pięciu innych zawodników walczyliśmy o przewagę, próbując uciec
                rywalom. Start zawodów był z Arkadii, a trasa prowadziła nas
                przez pierwsze pięć kilometrów w kierunku Uczelni SGH, by
                później powrócić tą samą trasą. Atmosfera rywalizacji w grupie
                naprawdę napędzała mnie do dalszego wysiłku.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                Na 7km bieg stał się jeszcze bardziej intensywny. Moment
                przełomowy nadszedł na dziewiątym kilometrze, gdy postanowiłem
                zaatakować. Skoncentrowałem się, wykorzystałem swoje rezerwy sił
                i z determinacją rzuciłem się do przodu. To było ryzykowne
                posunięcie, ale zaowocowało - udało mi się zdobyć drugie miejsce
                w kategorii OPEN
              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em", backgroundSize: "cover" }}
                className="event__box-map"
                src={
                  process.env.PUBLIC_URL +
                  "/img/img_2023/niepodleglosciFour.jpg"
                }
                alt="Bieg niepodległości - czołówka biegu"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em", backgroundSize: "cover" }}
                className="event__box-map"
                src={
                  process.env.PUBLIC_URL +
                  "/img/img_2023/niepodleglosciFour.jpg"
                }
                alt="Bieg niepodległości - czołówka bieg"
              />
            )}
          </Cardflex>

          <div data-aos="fade-left">
            <TextDescribebox>
              Podsumowując, 10km z atestem w czasie 31:05‼️‼️‼️podczas
              Narodowego Święta Niepodległości w Warszawie i drugie 🥈miejsce
              OPEN na ponad 15 tys uczestników oraz 1 🥇w swojej kat. wiekowej.
              To dla mnie ogromny zaszczyt, że mogłem uczestniczyć w tak
              wyjątkowym wydarzeniu, celebrującym historię Polski. Tym samym
              życiówkę poprawiam o 1’25”. To dla mnie ogromny postęp i dowód na
              to, że ciężka praca naprawdę się opłaca. Jestem podekscytowany i
              zmotywowany do podnoszenia dalszej poprzeczki. Oby więcej takich
              wyzwań przed mną!
            </TextDescribebox>
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={
                  process.env.PUBLIC_URL +
                  "/img/img_2023/niepodleglosciThree.jpg"
                }
                alt="Zdjęcie z podium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
