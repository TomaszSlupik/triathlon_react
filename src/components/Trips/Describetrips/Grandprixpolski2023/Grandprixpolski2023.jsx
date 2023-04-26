import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import BacktoPage from "../BacktoPage";
import "./Grandprixpolski2023.scss";
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

export default function Grandprixpolski2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="grandprix">
        <ThemeProvider theme={theme}>
          <Linetext>Grand Prix Polski Aquathlon</Linetext>
          <Line />
        </ThemeProvider>
        <Myscrollbox />
        <div className="grandprix__box">
          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>
          <Cardflex data-aos="fade-left">
            <div className="arbiter">
              <div className="arbiter__signature">Foto. Oliwia Głownia</div>
              <img
                className="grandprix__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/aquathlonTwo.jpg"}
                alt="rozpoczęcie zawodów Aquathlon"
              />
            </div>
            <Halfbox>
              <TextDescribebox>
                Sezon 2023 r. rozpocząłem od sprawdzenia się w Grand Prix Polski
                w Aquathlonie. W tym dniu miałem do pokonania 400m pływania na
                pływalni (ul. Wyszyńskiego 56, Mińsk Mazowiecki) oraz 5 km
                biegania na stadionie lekkoatletycznym (ul. Budowlana 2A, Mińsk
                Mazowiecki). Pakiet startowy odebrałem o godz. 10:00. Etap
                pływacki zaplanowany był na godzinę 11:15.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
          <Centerheader>Pływanie </Centerheader>
          <div data-aos="fade-right">
            <TextDescribebox>
              Przed startem, zrobiłem rozpływanie 300 m w luźnym tempie.
              Następnie 4x 25 m szybkich odcinków i tak zakończyłem rozgrzewkę.
              Pływanie, od pierwszych 25m od razu zacząłem bardzo mocno,
              pierwsze 200 m minęło szybko. Całe 400 m przepłynąłem w tempie
              1:17/100 m co dało wyniki 05:11 i pierwsze miejsce w swojej serii
              startowej. Po pływaniu mieliśmy 2h na przebranie się i dojechanie
              na stadion, gdzie czekało na nas 5 000 m na stadionie
              lekkoatletycznym.
            </TextDescribebox>
          </div>
          <Centerheader>Bieg</Centerheader>
          <div data-aos="fade-left">
            <TextDescribebox>
              Po dobrym pływaniu, czekało na mnie do przebiegnięcia 12,5
              okrążenia na stadionie lekkoatletycznym - 5 000 m. Pierwszy km
              minąłem w tempie 2'55"/km. Od pierwszych metrów oderwałem się od
              rywali i tak musiałem sam biec SOLO, bez grupy 5km. Do 3km biegłem
              na złamanie 15:00, jednak silny wiatr na każdym okrążeniu nie
              pomagał. Finalnie wbiegłem na metę jako pierwszy zawodnik z czasem
              15:26 co dało tempo z całości 3'05"/km.
            </TextDescribebox>
          </div>

          <Cardflex data-aos="fade-right">
            <img
              className="maraton__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/aquathlonThree.jpg"}
              alt="wynik biegania"
            />
            <img
              className="maraton__box-map four"
              src={process.env.PUBLIC_URL + "/img/img_2023/aquathlon.JPG"}
              alt="logo Aquathlon"
            />
          </Cardflex>

          <Centerheader>1 miejsce OPEN - Grand Prix Polski</Centerheader>
        </div>
      </div>
    </div>
  );
}
