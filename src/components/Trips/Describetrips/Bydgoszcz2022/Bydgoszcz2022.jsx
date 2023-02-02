import React, {useEffect} from 'react'
import Aos from 'aos';
import BacktoPage from '../BacktoPage'
import './Bydgoszcz2022.scss'
import theme from '../../../../style/mybreakpoints';
import { ThemeProvider } from '@mui/material'
import Linetext from '../../../../style/mymuistyle/linetext';
import Line from '../../../../style/mymuistyle/line';
import Myscrollbox from '../../../../style/myscrollbox';
import Leftheader from '../../../../style/mymuistyle/leftheader';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TextDescribebox from '../../../../style/mymuistyle/textdescribebox'
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { EffectCards } from "swiper";

export default function Bydgoszcz2022() {

  useEffect (()=> {
    Aos.init({duration: 3000})
  }, [])


  return (
    <div>
         <BacktoPage />
          <div className="bydgoszcz">
          <ThemeProvider theme={theme}>
          <Linetext>Enea Bydgoszcz</Linetext>
          <Line />
          <Myscrollbox />
          <div className="bydgoszcz__box">
              <Leftheader><DoubleArrowIcon />Dzień przed startem</Leftheader>

                  <div data-aos="fade-right">
                    <div className="bydgoszcz__box-img">
                    <img className='bydgoszcz__box-img' src={process.env.PUBLIC_URL + '/img/img_2022/bydgoszczone.jpeg'} alt="czepek startowy" />
     
                    </div>      
                </div>

                <div data-aos="fade-left">
                  <TextDescribebox >
                  Enea Bydgoszcz Triathlon zaplanowane na 9-10 lipca 2022 r. , zapowowiadało się na super wydarzenie sportowe z racji tego, że jest to największy triathlon w Polsce! Chciałem przekonać się o tym na własnej skórze. Nigdy wcześniej na tej imprezie nie startowałem, więc byłem zawodnikiem nieznanym dla organiztorów. Ustawili mnie w 3 strefie startowej w niebeiskich czepkach. Nie miało to żadnego wpływu, ponieważ i tak liczył się czas od przekroczenia pierwszej belki do wbiegnięcia na metę. 
                  </TextDescribebox>
              </div>
              
                       
                    
           
                <div data-aos="fade-right" className='textdescribe'>
                  <TextDescribebox>
                  Dzień przed startem poszliśmy rozruszać nogi, wybierając spacer z widokiem na Bydgoski rynek oraz na rzekę Brdę. Odwiedziliśmy Pasibus, aby naładować kcal przed wyścigiem. Wieczorkiem wróciliśmy do hotelu, aby odpoczywać przed zawodami. 
                  </TextDescribebox>
                </div>
                <div className="bydgoszcz__box-card">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <img className='bydgoszcz__box-card--img' src={process.env.PUBLIC_URL + '/img/img_2022/bydgoszczthree.JPG'} alt="Burger" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img className='bydgoszcz__box-card--img' src={process.env.PUBLIC_URL + '/img/img_2022/bydgoszcztwo.JPG'} alt="Burger" />
                  </SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                </div>
          </div>
          </ThemeProvider>
          </div>
    </div>
  )
}
