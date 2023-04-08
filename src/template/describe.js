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
import './Grandprixpolski2023.scss'

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
                <Centerheader>Bieg</Centerheader>
            </div>
        </div>
    </div>
  )
}
