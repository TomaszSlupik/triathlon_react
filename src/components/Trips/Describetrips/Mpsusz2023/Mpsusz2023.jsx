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
import Centerheader from '../../../../style/mymuistyle/centerheader';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Halfbox from "../../../../style/mymuistyle/halfbox";
import Cardflex from "../../../../style/mymuistyle/cardflex";
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";



export default function Mpsusz2023() {


    useEffect (()=> {
        Aos.init({duration: 3000})
      }, [])

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
                    <Leftheader><DoubleArrowIcon />Dzień przed startem</Leftheader>
                    <Cardflex data-aos="fade-left">
            <img
              className="event__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2023/rumiaTwo.JPG"}
              alt="pakiet startowy Rumia"
            />
            <Halfbox>
              <TextDescribebox>
                Po dwóch startach duathlonowych, rangi Mistrzostw Polski, gdzie zdobyłem dwa medale, przyszedł czas na start Triathlonowy. 
                Wyjazd do Susza zaplanowany miałem na sobotę. Podróż minęła bardzo szybko, a nocleg miałem w Iławie.  
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                Po przyjeździe, zakwaterowaliśmy się w apartamencie w Poznaniu.
                Szybkie zakupy w żabce i mogliśmy podładować kcal przed
                niedzielnym startem, które były zaplanowane na 13:00.
              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
              <img
                style={{ marginLeft: "0em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/czepinThree.jpg"}
                alt="Ładowanie kcal przed zawodami"
              />
            ) : (
              <img
                style={{ marginLeft: "1.2em" }}
                className="event__box-map"
                src={process.env.PUBLIC_URL + "/img/img_2023/czepinThree.jpg"}
                alt="Ładowanie kcal przed zawodami"
              />
            )}
          </Cardflex>

        
                </div>
            </div>
        </div>
      )
    }