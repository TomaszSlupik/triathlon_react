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

export default function Ursynow2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Bieg Ursynowa</Linetext>
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
              className="maraton__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/ursynowFour.jpg"}
              alt="początek biegu"
            />
            <Halfbox>
              <TextDescribebox>
                Przed sezonem warto sprawdzić formę i tak padło na bieg
                Ursynowa, gdzie rozgrywany był dystans 5km. Wybrałem ten bieg,
                ponieważ trasa posiada ATEST PZLA. Na starcie stanęli bardzo
                mocni biegacze w tym osoby, które wypełniają minima na Igrzyska
                Olimpijskie w Maratonie. Od początku biegu uformowały się dwie
                mocne grupy. Ja byłem w drugiej grupie, gdzie cały czas ją
                prowadziłem. Pierwszy km minąłem w tempie 2'54"/km.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
          <div data-aos="fade-right" style={{ marginTop: "1em" }}>
            <TextDescribebox>
              Do 3km biegłem na wyniki 14:XX. Jednak na 3 km był tak silny
              wiatr, który uniemożliwił mi złamanie 15 min na 5km. Fajnie, że
              udało się uzyskać przyzwoity wynik biegnąc od początku SOLO i
              mając za sobą zawodników. Na ostatnich metrach wyprzedziło mnie 2
              zawodników i finalnie skończyłem zawody na 6 miejscu OPEN. Jestem
              bardzo zadowolony z dyspozycji tego dnia. Poprawiłem życiówkę o 14
              sekund uzyskując bardzo dobry czas jak na Triathlonistę - 15 min
              12 sek., co daje średnie tempo 3'02"/km.
            </TextDescribebox>
          </div>

          <div data-aos="fade-left">
            <div className="maraton__box-img">
              <img
                className="maraton__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/ursynowThree.jpg"}
                alt="zdjęcie z trasy"
              />
            </div>
          </div>

          <div data-aos="fade-right">
            <div className="maraton__box-img">
              <img
                className="maraton__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/ursynowOne.jpeg"}
                alt="zdjęcie z trasy"
              />
            </div>
          </div>
          <Centerheader>5km z atestem w czasie 15:12</Centerheader>
        </div>
      </div>
    </div>
  );
}
