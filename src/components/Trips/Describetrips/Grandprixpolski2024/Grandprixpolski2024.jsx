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
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";
import Cardflex from "../../../../style/mymuistyle/cardflex";

export default function Grandprixpolski2024() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Grand Prix Polski Aquathlon</Linetext>
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
              src={process.env.PUBLIC_URL + "/img/img_2024/aquatlonTwo.JPG"}
              alt="Start bieg o Puchar Bielan"
            />
            <Halfbox>
              <TextDescribebox>
                Dzisiaj wystartowałem w Grand Prix Polski w Aquathlonie i cieszę
                się ogromnie z zajęcia pierwszego miejsca! Moje wyniki to: 400
                metrów pływania ukończyłem w czasie 4 minuty i 54 sekundy, przy
                średnim tempie 1 minutę i 13 sekund na 100 metrów. Następnie
                przebiegłem 5 kilometrów w czasie 15 minut i 34 sekundy. Teraz
                skupiam się na przygotowaniach do Mistrzostw Polski w
                Duathlonie, które odbędą się już za dwa tygodnie
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
        </div>
      </div>
    </div>
  );
}
