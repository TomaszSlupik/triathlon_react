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

export default function Ironman2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>Ironman Gdynia</Linetext>
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
              src={process.env.PUBLIC_URL + "/img/img_2023/gdyniaFour.jpg"}
              alt="manekin - restauracja"
            />
            <Halfbox>
              <TextDescribebox>
                Sierpień 2023 r. to w tym roku postanowiłem, że zrobię pełny
                dystans Ironman. Wybrałem Gdynię, ponieważ start i meta znajduje
                się na piaszczystej plaży w Gdyni, są super kibice, a cała trasa
                rowerowa i biegowa nie należy do najłatwiejszych z uwagi na duże
                przewyższenia i podbiegi. Do Gdyni wyruszyliśmy dzień przed
                startem i zameldowaliśmy się w Hotelu Mercure oddalonym 350 m od
                plaży. Wybraliśmy pokój z widokiem na piękną plażę. Z pokoju widoki były 
                przepieknę. 
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
        </div>
      </div>
    </div>
  );
}
