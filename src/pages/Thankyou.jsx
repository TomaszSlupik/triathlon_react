import React from 'react'
import './Thankyou.scss'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Thankyou() {

  let navigate = useNavigate()

  const goToBack = () => {
    navigate("/")
  }


  return (
    <div className='thankyou'>
      <div className="thankyou__img">
        <img className='thankyou__img' src={`${process.env.PUBLIC_URL}/img/win.jpg`} alt="Wygrana w zawodach" />
        <div className="thankyou__img-shadow"></div>
        <div className='thankyou__img-text'>Dziękuję za widomość.
        <Button
        onClick={goToBack}
        style={{width: '100px'}}
        variant='contained'
        >
          Powrót
        </Button>
        </div>

      </div>
    </div>
  )
}
