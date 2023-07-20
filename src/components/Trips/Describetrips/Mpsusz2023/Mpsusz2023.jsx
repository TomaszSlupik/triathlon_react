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
import Halfbox from "../../../../style/mymuistyle/halfbox";
import Cardflex from "../../../../style/mymuistyle/cardflex";
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";

export default function Mpsusz2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Mistrzostwa Polski w Suszu</Linetext>
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
              src={process.env.PUBLIC_URL + "/img/img_2023/suszTwo.jpg"}
              alt="Jezioro Iławskie"
            />
            <Halfbox>
              <TextDescribebox>
                Po dwóch startach duathlonowych, rangi Mistrzostw Polski, gdzie
                zdobyłem dwa medale, przyszedł czas na start Triathlonowy.
                Wyjazd do Susza zaplanowany miałem na sobotę. Podróż minęła
                bardzo szybko, a nocleg miałem w Iławie.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                Po przyjeździe, zakwaterowałem się w Iławie. Z racji tego, że
                hotel miałem 50 m od pięknego jeziora Iławskiego, postanowiłem
                zrobić 8km lekkiego rozruchu. Następnie poszedłem na szybkie
                zakupy, a w drodze powrotnej skusiłem się na pyszne lody.
              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/suszThree.jpg"}
                alt="Lody - jezioro Iławskie"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/suszThree.jpg"}
                alt="Lody - jezioro Iławskie"
              />
            )}
          </Cardflex>

          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>

          <Cardflex data-aos="fade-left">
            <Halfbox style={{ marginRight: "1.2em" }}>
              <TextDescribebox>
                Pakiet startowy odebrałem przed godziną 7:00. Szybkie oddanie
                roweru do strefy zmian i o 8:00 start. Pływanie bardzo dobrze mi
                poszło. Wyszedłem z wody w czołówce. Niestety w Suszu warunki
                pogodowe tego dnia nie były dobre. Śliska nawierzchnia
                asfaltowa, padający deszcz nie ułatwiał zawodnikom na trasie. W
                połowie trasy rowerowej, koło 10km wyprzedając zawodnika nagle z
                naprzeciwka ktoś zahaczył o moją lemondkę i przy prędkości
                44km/h przeleciałem przez kierownicę. Na szczęście skończyło się
                tylko na mocnym poobijaniu. Nie mogłem dalej kontynuować
                wyścigu, ponieważ łańcuch zablokował mi się, a musiałbym
                rozkręcać całą korbę. Szkoda, że wyścig tak ułożył się bo
                chciałem powalczyć o miejsca medalowe.
              </TextDescribebox>
            </Halfbox>
            <img
              className="event__box-img"
              src={process.env.PUBLIC_URL + "/img/img_2023/suszFour.jpg"}
              alt="Etap kolarski - wypadek"
            />
          </Cardflex>
          <Centerheader>DNF - Mistrzostwa Polski Triathlon</Centerheader>
        </div>
      </div>
    </div>
  );
}
