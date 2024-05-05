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
import ScrollToTop from "../../../../hooks/ScrollToTop";
import "./Mprumia2024.scss";

export default function Mprumia2024() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <ScrollToTop />
      <BacktoPage />
      <div className="rumia">
        <ThemeProvider theme={theme}>
          <Linetext>Mistrzostwa Polski Rumia</Linetext>
          <Line />
        </ThemeProvider>
        <Myscrollbox />
        <div className="rumia__box">
          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>
          <Centerheader>Bieg</Centerheader>
          <Cardflex data-aos="fade-left">
            <img
              className="rumia__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2024/rumiaFive.JPG"}
              alt="Rumia MP"
            />
            <Halfbox>
              <TextDescribebox>
                Obroniłem tytuł Mistrza Polski w triathlonie na dystansie
                sprint! To moje trzecie złoto na tym dystansie, więc jestem
                niesamowicie zadowolony z tego osiągnięcia. Pomimo trudnych
                warunków pogodowych – wiatru i chłodu – udało mi się utrzymać
                solidne tempo na pierwszych 5 kilometrach biegu, osiągając
                średnio 3’09” na kilometr i wypracowanie sobie sporej przewagi
                nad rywalami.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Centerheader>Rower</Centerheader>
          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                Moja średnia moc podczas jazdy rowerem wyniosła 334 waty. Na
                pierwszych 10 kilometrach utrzymywałem równomierne tempo, ale
                wiedziałem, że w końcu moim rywalom uda się mnie dogonić. Mimo
                to postanowiłem zachować siły na kolejny bieg, dlatego
                pozostawałem z nimi w grupie, starając się dotrzeć razem do
                strefy T2.
              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em", backgroundSize: "cover" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2024/rumiaSix.jpg"}
                alt="Rumia MP - etap rowerowy"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em", backgroundSize: "cover" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2024/rumiaSix.jpg"}
                alt="Rumia MP - etap rowerowy"
              />
            )}
          </Cardflex>

          <Centerheader>Bieg</Centerheader>
          <div data-aos="fade-left">
            <TextDescribebox>
              W drugim biegu postawiłem na mocne rozpoczęcie, aby oderwać się od
              rywali. Gdy już uzyskałem pewną przewagę, postanowiłem zachować
              spokój i kontrolować tempo biegu. Później już spokojnie zmierzałem
              do mety, mając na celu zdobycie tytułu mistrza Polski.
            </TextDescribebox>
            <div className="event__box-img">
              <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/czempinFour.jpg"}
                alt="Etap biegowy - MP RUMIA 2024"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
