import React, {useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import BacktoPage from '../BacktoPage';
import './Grandprixpolski2023.scss'
import { ThemeProvider } from '@emotion/react';
import theme from '../../../../style/mybreakpoints';
import Linetext from '../../../../style/mymuistyle/linetext';
import Line from '../../../../style/mymuistyle/line';
import Myscrollbox from '../../../../style/myscrollbox';
import Leftheader from '../../../../style/mymuistyle/leftheader';
import Centerheader from '../../../../style/mymuistyle/centerheader';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Cardflex from '../../../../style/mymuistyle/cardflex';
import Halfbox from '../../../../style/mymuistyle/halfbox';
import TextDescribebox from '../../../../style/mymuistyle/textdescribebox';

export default function Grandprixpolski2023() {

    useEffect (()=> {
        Aos.init({duration: 3000})
      }, [])
    

  return (
    <div>
        <BacktoPage />
        <div className="grandprix">
        <ThemeProvider theme={theme}>
            <Linetext>Grand Prix Polski Aquathlon</Linetext>
            <Line />
        </ThemeProvider>
        <Myscrollbox />
            <div className="grandprix__box">
                <Leftheader><DoubleArrowIcon />Dzień startu</Leftheader>
                <Cardflex data-aos="fade-left">
                    <img className='grandprix__box-map' src={process.env.PUBLIC_URL + '/img/img_2023/aquathlonTwo.jpg'} alt="rozpoczęcie zawodów Aquathlon" />
                    <Halfbox>
                        <TextDescribebox>
                            Sezon 2023 r. rozpocząłem od sprawdzenia się w Grand Prix Polski w Aquathlonie. W tym dniu miałem do pokonania 400m pływania na pływalni (ul. Wyszyńskiego 56, Mińsk Mazowiecki) oraz 5 km biegania na stadionie 
                            lekkoatletycznym (ul. Budowlana 2A, Mińsk Mazowiecki). Odbiór pakietów startowych zaplanowany był na godziną 10:00. Etap pływacki zaplanowany był na godzinę 11:15. 
                        </TextDescribebox>
                        </Halfbox>
                </Cardflex>
                <Centerheader>Pływanie  </Centerheader>
            </div>
        </div>
    </div>
  )
}
