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
import Cardflex from "../../../../style/mymuistyle/cardflex";
import Halfbox from "../../../../style/mymuistyle/halfbox";
import TextDescribebox from "../../../../style/mymuistyle/textdescribebox";
import ScrollToTop from '../../../../hooks/ScrollToTop';
import './Mprumia2024.scss'


export default function Mprumia2024() {

    useEffect (()=> {
        Aos.init({duration: 3000})
      }, [])
    

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
                <Leftheader><DoubleArrowIcon />Dzień startu</Leftheader>
                <Centerheader>Bieg</Centerheader>
                <Cardflex data-aos="fade-left">
            <img
              className="rumia__box-map"
              src={process.env.PUBLIC_URL + "/img/img_2024/rumiaFive.JPG"}
              alt="Start bieg o Puchar Bielan"
            />
            <Halfbox>
              <TextDescribebox>
              Obroniłem tytuł Mistrza Polski w triathlonie na dystansie sprint! 
              To moje trzecie złoto na tym dystansie, więc jestem niesamowicie zadowolony z tego 
              osiągnięcia. Pomimo trudnych warunków pogodowych – wiatru i chłodu – udało mi się 
              utrzymać solidne tempo na pierwszych 5 kilometrach biegu, o
              siągając średnio 3’09” na kilometr i wypracować sobie 
              sporą przewagę nad rywalami.
              </TextDescribebox>
            </Halfbox>
          </Cardflex>
            </div>
        </div>
    </div>
  )
}




