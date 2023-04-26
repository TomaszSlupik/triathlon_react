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
                wyjechaliśmy dzień przed
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>
          <Centerheader>Bieg</Centerheader>
          <div data-aos="fade-right">
            <TextDescribebox>
              Dalsza relacja już niebawem :)
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </TextDescribebox>
          </div>
        </div>
      </div>
    </div>
  );
}
