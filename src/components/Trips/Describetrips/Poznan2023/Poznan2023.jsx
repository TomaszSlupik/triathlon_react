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
import Cardflex from "../../../../style/mymuistyle/cardflex";
import Halfbox from "../../../../style/mymuistyle/halfbox";

export default function Poznan2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <BacktoPage />
      <div className="event">
        <ThemeProvider theme={theme}>
          <Linetext>5150 Poznań</Linetext>
          <Line />
        </ThemeProvider>
        <Myscrollbox />
        <div className="event__box">
          {/* <Leftheader>
            <DoubleArrowIcon /> Dzień przed startem
          </Leftheader>
          <Centerheader>Bieg</Centerheader>
           */}


          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>

          <div data-aos="fade-left">
            <TextDescribebox>
            Enea 5150 Poznań (1,5km🏊‍♂️40km🚴‍♂️10km🏃‍♂️) 2 miejsce OPEN 🥈oraz 1 miejsce w kat M30🥇.
            Super spędzony weekendzik z ekipą i dobra zabawa 😎W liczbach:
            Pływanie 🏊‍♂️: 1:34/100m i wyjście z całą grupą.
            Rower🚴‍♂️: śr. 42.14km/h - śr. 323W. Podziękowania dla @absolutefitting , pozycja na rowerze w końcu zaczyna oddawać i przekłada się to na prędkość. Zapraszam wszystkich do Wojtka do nowej lokalizacji - Arena Pruszków.
            Bieg🏃‍♂️: śr. 3’19”/km.
            </TextDescribebox>
          </div>

          <Cardflex data-aos="fade-right">
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/poznan2023_v6.jpg"}
              alt="Regeneracja w basenie"
            />
            <Halfbox>
              <TextDescribebox>
                Po ukończeniu Olimpijki, wybraliśmy się do strefy Finishera. Odebraliśmy koszulkę, 
                można było skorzystać z masażu lub zimnej kąpieli. Z kolegą postanowiliśmy wybrać SPA - kąpiel w lodzie. 
                W basenie temperatura wody wskazywała 1 st - idealne na regenerację. 
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-left">
           
            <Halfbox>
              <TextDescribebox>
                Po regeneracyjnym posiłku i SPA w basenie, wybraliśmy się na dekorację. Wszystko sprawnie poszło i odebrałem 
                zdobytą statuetkę za 1 miejsce. W Poznaniu na Enea 5150 jestem już 2 raz i tym razem byłem jeszcze bardziej zaskoczony: 
                bardzo dobra organizacja, duża strefa zmian oraz fantastyczni kibice na mecie. Za rok przemyślę nad kolejnym startem w Poznaniu. 
              </TextDescribebox>
            </Halfbox>
{window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/poznan2023_v8.jpeg"}
                alt="Statuetka"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/poznan2023_v8.jpeg"}
                alt="Statuetka"
              />
            )}
          </Cardflex>

        </div>
      </div>
    </div>
  );
}
