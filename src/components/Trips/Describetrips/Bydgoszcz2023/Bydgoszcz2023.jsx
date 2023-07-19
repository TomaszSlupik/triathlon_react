import React, {useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import BacktoPage from '../BacktoPage';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../../style/mybreakpoints';
import Linetext from '../../../../style/mymuistyle/linetext';
import Line from '../../../../style/mymuistyle/line';
import Myscrollbox from '../../../../style/myscrollbox';
import Leftheader from '../../../../style/mymuistyle/leftheader';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";
import Halfbox from "../../../../style/mymuistyle/halfbox";
import Cardflex from "../../../../style/mymuistyle/cardflex";

export default function Bydgoszcz2023() {

    useEffect (()=> {
        Aos.init({duration: 3000})
      }, [])

  return (
    <div>
        <BacktoPage />
        <div className="event">
        <ThemeProvider theme={theme}>
            <Linetext>Enea Bydgoszcz Triathlon</Linetext>
            <Line />
        </ThemeProvider>
        <Myscrollbox />
            <div className="event__box">
                <Leftheader><DoubleArrowIcon />Dzień przed startem</Leftheader>
                <Cardflex data-aos="fade-left">
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczThree.jpg"}
              alt="manekin - restauracja"
            />
            <Halfbox>
              <TextDescribebox>
                W zeszłym roku, początek lipca był debiutem w Enea Bydgoszcz Triathlon. Postanowiłem w tym roku,
                również wystartować w tej imprezie z racji tego, że jest super atmosfera, dobra organizacja, dobrze zorganizowana strefa 
                T1 oraz T2 pomimo dużej liczby uczestników oraz wspaniali kibice na trasie. Oczywiście dzień przed startem odwiedziliśmy 
                Manekina, gdzie podładowaliśmy troszkę kcal. 
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                W sobotę znajomi startowali na dłuższym dystanie 1/4, więc po rozruchu 8km udaliśmy się, aby im kibicować. Z wyścigu byli 
                zadowoleni. 

              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczFour.jpg"}
                alt="Zdjęcie z ekipą"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/bydgoszczFour.jpg"}
                alt="Zdjęcie z ekipą"
              />
            )}
          </Cardflex>
            </div>


        </div>
    </div>
  )
}
