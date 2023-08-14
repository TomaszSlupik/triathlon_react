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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";

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
                przepiękne. 
              </TextDescribebox>
            </Halfbox>
          </Cardflex>

          <Cardflex data-aos="fade-right">
            <Halfbox>
              <TextDescribebox>
                Po przyjeździe, udaliśmy się w stronę Expo, gdzie znajomi startowali na krótszym dystansie Sprint. 
                My wymęczeni podróżą, oni startem, zdecydowaliśmy podładować kcal. Padło na pizzę, a następnie 
                pyszne smakołyki z kawą. Trzeba było mieć nadmiar energii, ponieważ w niedzielę start był zaplanowany na 
                godzinę 6:00. 
              </TextDescribebox>
            </Halfbox>
            {window.innerWidth < 900 ? (
                 <Swiper
                 style={{ marginLeft: "0em", height: '100%' }}
                 effect={"flip"}
                 grabCursor={true}
                 pagination={true}
                 navigation={true}
                 modules={[EffectFlip, Pagination, Navigation]}
                 className="mySwiper event__box-map"
                 color="primary"
               >
                 <div className="carousel__box-slide event__box-map"
                 
                 >
                   <SwiperSlide
                   
                   >
                     <img
                       className="carousel__box-slide"
                       src={process.env.PUBLIC_URL + "/img/img_2023/gdyniaFive.jpg"}
                       alt="Ładowanie kcal przed zawodami"
                     />
                   </SwiperSlide>
                   <SwiperSlide>
                     <img
                       className="carousel__box-slide"
                       src={process.env.PUBLIC_URL + "/img/img_2023/gdyniaSix.jpg"}
                       alt="Ładowanie kcal przed zawodami"
                     />
                   </SwiperSlide>
                 </div>
               </Swiper>
            ) : (

              <Swiper
            style={{ marginLeft: "1.2em" }}
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper carousel__box"
            color="primary"
          >
            <div className="carousel__box-slide">
              <SwiperSlide>
                <img
                  className="carousel__box-slide"
                  src={process.env.PUBLIC_URL + "/img/img_2023/gdyniaFive.jpg"}
                  alt="Ładowanie kcal przed zawodami"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="carousel__box-slide"
                  src={process.env.PUBLIC_URL + "/img/img_2023/gdyniaSix.jpg"}
                  alt="Ładowanie kcal przed zawodami"
                />
              </SwiperSlide>
            </div>
          </Swiper>
            )}
          </Cardflex>

          <Leftheader>
            <DoubleArrowIcon />
            Dzień startu
          </Leftheader>

          <div data-aos="fade-left">
            <TextDescribebox>
            Enea IRONMAN Gdynia w wersji skróconej 180,2km🚴‍♂️ + 42,195 km 🏃‍♂️Zrobiłem to‼️‼️‼️I am an Ironman🤩1 Polak🇵🇱w kat, 6 open w kat M30, 13 OPEN.
            Sam nie dowierzam, że to zrobiłem w takich warunkach, ale mając taki support @lolek_wu @olku123 , wszytko możemy i z tego miejsca chciałbym serdecznie dziękuję moim najbliższym! Również bardzo dziękuję @mareknegu który wspierał mnie na trasie.
            Ze względu na duże fale, etap pływacki został odwołany i o 7:00 mieliśmy zacząć od roweru. Od 6:45, godzinę czasu czekałem bez bluzy aż ruszy moja strefa. Ruszając na etap kolarski, wyziębiony na 0,1km 😂😂wypad mi cały bidon z picie i tak 180km leciałem bez płynu, tylko zatrzymywałem się na punktach odżywczych. Po 20km już chciałem zejść z trasy!!!! Po 70km jechałem już w bluzie @endlesspain_team i zanim rozgrzałem organizm trochę minęło. Dostałem jeszcze dodatkowo 1’ kary za wyrzucenie żelu w nieodpowiednie miejsce.
            Podsumowując wyniki z datasport:
            🚴‍♂️240W - śr. 34km/h
            🏃‍♂️ śr. 4’03 => 2h53😅
            </TextDescribebox>
          </div>
        </div>
      </div>
    </div>
  );
}
