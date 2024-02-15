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

export default function Bielany2024() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Bieg o Puchar Bielan</Linetext>
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
                process.env.PUBLIC_URL + "/img/img_2024/bielanyFive.JPG"
              }
              alt="Start bieg o Puchar Bielan"
            />
            <Halfbox>
              <TextDescribebox>
              Sezon 2024 rozpocząłem od Pucharu Bielan na dystansie 5 kilometrów, 
              który odbył się na atestowanej trasie. Ten bieg słynie z silnej konkurencji, 
              przyciągając do udziału najlepszych zawodników. Dla wielu biegaczy jest to 
              ważne wydarzenie w kalendarzu sportowym, ponieważ stanowi doskonałą okazję do 
              sprawdzenia swojej formy przed sezonem i rywalizacji z innymi zawodnikami 
              na wymagającym dystansie 5 kilometrów. 
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
        </div>
      </div>
    </div>
  );
}
