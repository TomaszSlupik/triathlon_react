import React, {useEffect} from 'react'
import BacktoPage from '../BacktoPage'
import 'aos/dist/aos.css'
import Aos from 'aos';
import './Babicka2022.scss'
import theme from '../../../../style/mybreakpoints';
import { ThemeProvider } from '@mui/material'
import Myscrollbox from '../../../../style/myscrollbox';
import Linetext from '../../../../style/mymuistyle/linetext';
import Line from '../../../../style/mymuistyle/line';
import Leftheader from '../../../../style/mymuistyle/leftheader';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Cardflex from '../../../../style/mymuistyle/cardflex';
import Halfbox from '../../../../style/mymuistyle/halfbox';
import TextDescribebox from '../../../../style/mymuistyle/textdescribebox';
import Centerheader from '../../../../style/mymuistyle/centerheader';

export default function Babicka2022() {

  useEffect (()=> {
    Aos.init({duration: 3000})
  }, [])

  
  return (
    <div>
        <BacktoPage />
        <div className="babicka">
        <ThemeProvider theme={theme}>
        <Linetext>Dziesiątka Babicka</Linetext>
        <Line />
        <Myscrollbox />
        <div className="babicka__box">
        <Leftheader><DoubleArrowIcon />Dzień startu</Leftheader>
        <Cardflex data-aos="fade-left">
                    <img className='babicka__box-map' src={process.env.PUBLIC_URL + '/img/img_2022/babickaone.JPG'} alt="pakiet startowy - dziesiątka babicka" />
                    <Halfbox>
                        <TextDescribebox>
                        Dziesiątka Babicka - start dość spontaniczny, ponieważ pakiet startowy kupiłem 2 lata temu. Impreza wtedy nie odbyła się ze względu na Pandemię COVID-19. Organizator przełożył start na 27.08.2022 r. Bieg był zaplanowany na godzinę 18:00 w upalny dzień. 
                        </TextDescribebox>
                    </Halfbox>
        </Cardflex>


        <Cardflex data-aos="fade-right">
                    <Halfbox>
                        <TextDescribebox>
                        Przed godziną 17:00 odebrałem pakiet startowy: worek a w nim koszulka startowa z biegu zawodów, chip z numerkiem startowym, batonik i picie. Na bieg ubrałem koszulkę organiztora, zrobiłem rozgrzewkę oraz kilka rytmów na dogrzanie się i 10 min przed startem udałem się w stronę linii startu. 
                        </TextDescribebox>
                    </Halfbox>
                    <img className='babicka__box-map' src={process.env.PUBLIC_URL + '/img/img_2022/babicka.JPG'} alt="koszulka - dziesiątka babicka" />   
        </Cardflex>
        <Centerheader>Bieg</Centerheader>
        <div data-aos="fade-left">
                <TextDescribebox >
                Ustawiłem się w pierwszej lini i czekałem na odliczanie 10, 9, 8, ... , 1, START. Ruszyliśmy! Od początku narzuciłem bardzo mocne tempo, mimo 30 st. upału. Nie wiedziałem czego spodziewać się, ponieważ ostatni raz biegłem 10km dwa lata temu.
                </TextDescribebox>
        </div>
        <div data-aos="fade-right">
                <div className="babicka__box-img">
                <img className="babicka__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/babickatwo.jpg'} alt="Start biegu" />
                <div className="babicka__box-img--signature">
                Foto. Dziesiątka Babicka
                </div>
                </div>      
        </div>
        <div data-aos="fade-left">
                <TextDescribebox >
                Pierwsze 3km biegło mi się zupełnie luźno a tempo z kilometrowych odcinków pokazało: 3:06/km, 3:07/km oraz 3:10km. Pierwsze 5 km zamknąłem z czasem 15:59. Po 7km zaatakowałem i oderwałem się od kolegi z którym biegłem. 
                </TextDescribebox>
        </div>
        <div data-aos="fade-right">
                <div className="babicka__box-img">
                <img className="babicka__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/babickathree.jpg'} alt="W połowie trasy - zdjęcie z trasy" />
                <div className="babicka__box-img--signature">
                Foto. Dziesiątka Babicka
                </div>
                </div>      
        </div>
        <div data-aos="fade-left">
                <div className="babicka__box-img">
                <img className="babicka__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/babickafour.jpg'} alt="W połowie trasy - zdjęcie z trasy" />
                <div className="babicka__box-img--signature">
                Foto. Dziesiątka Babicka
                </div>
                </div>      
        </div>
        <div data-aos="fade-right">
                <TextDescribebox >
                Finalnie wbiegłem na metę jako pierwszy zawodnik z czasem 32:36 na atestowanej 10km trasie. 
                Start uważam za bardzo dobry.
                </TextDescribebox>
        </div>
        <div data-aos="fade-left">
                <div className="babicka__box-img">
                <img className="babicka__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/babickafive.jpg'} alt="Wynik biegu" />
 
                </div>      
        </div>
        <Centerheader>1 miejsce OPEN - Dziesiątka Babicka</Centerheader>

        <div data-aos="fade-right">
                <div className="babicka__box-img">
                <img className="babicka__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/babickasix.JPG'} alt="Podium" />
               
                </div>      
        </div>



        </div>
        </ThemeProvider>
        </div>
    </div>
  )
}
