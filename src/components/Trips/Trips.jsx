import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../style/mybreakpoints';
import { Card, ThemeProvider } from '@mui/material';
import Data from '../../data/data.json'
import { useState} from 'react';
import { teal, blue, indigo, lime } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Trips.scss'
import Mycard from '../../style/mymuistyle/card';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Textradio from '../../style/mymuistyle/textradio';
import Search from '../Search/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Trips() {

const [trip, setTrip] = useState(Data)
 
const style = {
  grid: {alignItems: 'center',   display: 'flex', justifyContent: 'center'}, 
  card: {height: '345px'}, 
  label: {color: '#fff'}, 
  radioGroup: {color: '#7c5fe9'}, 
  trophy: {marginLeft: '0.2em', color: '#faaf00'}, 
  filter: {color: '#7c5fe9', cursor: 'pointer', fontSize: '2rem', marginLeft: '0.4em'}
}

let navigate = useNavigate()

const goToPage = (id) => {
    navigate(`${id}`)
}


const [triathlon, setTriathlon] = useState (false)
const [duathlon, setDuathlon] = useState(false)
const [run, setRun] = useState(false)



const filterTrips = (type) => {
      setTrip(Data)  
      const tripCopy = Data
      const updateTrips = tripCopy.filter((el) => {
        return el.type === type
      })
      setTrip(updateTrips)  
}


const filterTripsYes = () => {
  setTrip(Data)  
  setTriathlon(false)
  setDuathlon(false)
  setRun(false)
 
}


const searchText = (text) => {
  const serachEvent = Data.filter(el => el.name.toLowerCase().includes(text.toLowerCase()))
  setTrip(serachEvent)
}

const allData = () => {
  const data = [...Data]
  setTrip(data)
}

// Filtrowanie 

const [windowFilter, setWindowFilter] = useState(false)
const [windowFilterSecond, setWindowFilterSecond] = useState(false)

const [check2023, setCheck2023] = useState(false)
const [disabledCheck2023, setDisabledCheck2023] = useState(false)
const [label2023, setLabel2023] = useState("2023 r.")

const [check2022, setCheck2022] = useState(false)
const [disabledCheck2022, setDisabledCheck2022] = useState(false)
const [label2022, setLabel2022] = useState("2022 r.")

const [checkTriathlon, setCheckTriathlon] = useState(false)
const [disabledCheckTriathlon, setDisabledCheckTriathlon] = useState(false)
const [labelTriathlon, setLabelTriathlon] = useState("Triathlon")

const [checkDuathlon, setCheckDuathlon] = useState(false)
const [disabledCheckDuathlon, setDisabledCheckDuathlon] = useState(false)
const [labelDuathlon, setLabelDuathlon] = useState("Duathlon")


const [checkAquathlon, setCheckAquathlon] = useState(false)
const [labelAquathlon, setLabelAquathlon] = useState("Aquathlon")


const [checkRun, setCheckRun] = useState(false)
const [disabledCheckRun, setDisabledCheckRun] = useState(false)
const [labelRun, setLabelRun] = useState("Bieganie")

const handlerChange2023 = (e) => {
  setCheck2023(e.target.checked)
}

const handlerChange2022 = (e) => {
  setCheck2022(e.target.checked)
}

const handlerTriathlon = (e) => {
  setCheckTriathlon(e.target.checked)
}

const handlerDuathlon = (e) => {
  setCheckDuathlon(e.target.checked)
}

const handlerAquathlon = (e) => {
  setCheckAquathlon(e.target.checked)
}

const handlerRun = (e) => {
  setCheckRun(e.target.checked)
}

const handlerFilterOpen = () => {
  setWindowFilter(true)
} 


const eventClickAll = []
const clickTrue = true

const handlerAccept = () => {

switch(clickTrue) {
  case (check2023):
    eventClickAll.push(`${check2023}2023`)
  case (check2022):
    eventClickAll.push(`${check2022}2022`)
  case(checkTriathlon):
    eventClickAll.push(`${checkTriathlon}Triathlon`)
  case(checkDuathlon):
    eventClickAll.push(`${checkDuathlon}Duathlon`)
  case(checkAquathlon):
    eventClickAll.push(`${checkAquathlon}Aquathlon`)
  case(checkRun):
    eventClickAll.push(`${checkRun}Bieg`)
  default:
    console.log('Filtruję rok')
}


function el (eventClickAll) {
  return eventClickAll.startsWith('true')
}

const allClickEvent = eventClickAll.filter(el).map(el => el.substr(4))

const missingItems = []
  const numberAdd = 7 - allClickEvent.length 
  for (let i = 0; i < numberAdd; i++) {
      missingItems.push(i.toString())
  }

  const allItem = allClickEvent.concat(missingItems)

  const newArr = [...Data].filter(el => el.type === allItem[0].toString() || el.type === allItem[1].toString() ||
  el.type === allItem[2].toString() || el.type === allItem[3].toString() || el.type === allItem[4].toString() || 
  el.type === allItem[5].toString() || el.type === allItem[6].toString() || el.year === Number(allItem[0]))

  console.log(newArr)
  console.log(allItem)
  setTrip(newArr)
  
  setWindowFilter(false)
  setWindowFilterSecond(true)
  // if (check2023 === true) {
  //     const start2023 = Data.filter((el => el.year === 2023))
  //     setTrip(start2023)
  // }
  // else if (check2022 === true) {
  //   const start2022 = Data.filter((el => el.year === 2022))
  //   setTrip(start2022)
  // }

  // else if (checkTriathlon === true) {
  //   const triathlonAll = Data.filter((el => el.type === 'Triathlon'))
  //   setTrip(triathlonAll)
  // }

  // setWindowFilter(false)
  // setCheck2023(false)
  // setCheck2022(false)
  // setDisabledCheck2023(false)
  // setDisabledCheck2022(false)
}


const handlerAcceptSecond = () => {
  setWindowFilterSecond(false)
}

const handlerFilterClose = () => {
  setWindowFilter(false)
  setCheck2023(false)
  setCheck2022(false)
  setDisabledCheck2023(false)
  setDisabledCheck2022(false)
} 

  return (
    <div>
      <div className="trip">
        <div className="trip__headerImage">
          <div className="trip__headerImage-text">
            Wyjazdy Triathlonowe, Duathlonowe i biegowe.
            <div className="trip__headerImage-describe">
          Zapraszam do moich artykułów i galerii z wyjazdów
          </div>
          </div>
          
          <img className="trip__headerImage" src={process.env.PUBLIC_URL + '/img/bikes.jpg'} alt="rowery - trip" />
        </div>
        <div className="trip__switch">
              <div className="trip__switch-header">
              <Search searchText={searchText} allData={allData}/>
              <FilterAltIcon 
              onClick={handlerFilterOpen}
              style={style.filter}/>
                <Dialog
                  open={windowFilter}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handlerFilterClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Filtrowanie szczegółowe - wybierz rok"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    <FormGroup>
                    <FormControlLabel control={<Checkbox
                    disabled={disabledCheck2023}
                    checked={check2023}
                    onChange={handlerChange2023}
                    />} label={label2023} />
                    <FormControlLabel control={<Checkbox 
                    checked={check2022}
                    disabled={disabledCheck2022}
                    onChange={handlerChange2022}
                    />} label={label2022} />
                    {/* <FormControlLabel control={<Checkbox 
                    checked={checkTriathlon}
                    onChange={handlerTriathlon}
                    />} label={labelTriathlon} />
                    <FormControlLabel control={<Checkbox 
                    checked={checkDuathlon}
                    onChange={handlerDuathlon}
                    />} label={labelDuathlon} />
                    <FormControlLabel control={<Checkbox 
                    checked={checkAquathlon}
                    onChange={handlerAquathlon}
                    />} label={labelAquathlon} />
                    <FormControlLabel control={<Checkbox 
                    checked={checkRun}
                    onChange={handlerRun}
                    />} label={labelRun} /> */}
                  </FormGroup>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button 
                    variant='outlined'
                    onClick={handlerFilterClose}>Anuluj</Button>
                    <Button 
                    variant='contained'
                    onClick={handlerAccept}>Dalej</Button>
                  </DialogActions>
                </Dialog>

              {/* Drugie okno */}
              <Dialog
              open={windowFilterSecond}
              // onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Wybierz dyscyplinę"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <FormGroup>
                    <FormControlLabel control={<Checkbox 
                    checked={checkTriathlon}
                    onChange={handlerTriathlon}
                    />} label={labelTriathlon} />
                    <FormControlLabel control={<Checkbox 
                    checked={checkDuathlon}
                    onChange={handlerDuathlon}
                    />} label={labelDuathlon} />
                    <FormControlLabel control={<Checkbox 
                    checked={checkAquathlon}
                    onChange={handlerAquathlon}
                    />} label={labelAquathlon} />
                    <FormControlLabel control={<Checkbox 
                    checked={checkRun}
                    onChange={handlerRun}
                    />} label={labelRun} />
                  </FormGroup>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose}>Disagree</Button> */}
                <Button onClick={handlerAcceptSecond} autoFocus>
                  Akcteptuję
                </Button>
              </DialogActions>
            </Dialog>


              </div>
            <FormControl>
            <RadioGroup
              style={style.radioGroup}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel 
              onClick={() => filterTrips("Triathlon")}
              value="Triathlon" control={<Radio />} label={<Textradio>Triathlon</Textradio>} />
              <FormControlLabel 
              onClick={() => filterTrips("Duathlon")}
              value="Duathlon" control={<Radio />} label={<Textradio>Duathlon</Textradio>} />
               <FormControlLabel 
              onClick={() => filterTrips("Aquathlon")}
              value="Aquathlon" control={<Radio />} label={<Textradio>Aquathlon</Textradio>} />
              <FormControlLabel 
              onClick={() => filterTrips("Bieg")}
              value="Bieganie" control={<Radio />} label={<Textradio>Bieganie</Textradio>} />
              <FormControlLabel 
              onClick={filterTripsYes}
              value="Wszystko" control={<Radio />} label={<Textradio>Wszystko</Textradio>} />
            </RadioGroup>
          </FormControl>
    
        </div>
        <div className="trip__box">
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={style.grid}>
                  <ThemeProvider theme={theme}>
                    {
                      trip.map((el, index) => { 
                        return (
                          <div key={index}>
                            <Grid item xs={12} sm={6} md={4}>
                                  <Mycard>
                                  <Card style={style.card}>
                                  <CardHeader
                                        avatar={
                                          
                                            el.type === "Bieg" ? 
                                            (
                                            <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                                            B
                                            </Avatar> )
                                            :
                                            el.type === "Triathlon" ? 
                                            (
                                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                            T
                                            </Avatar>)
                                            : 
                                            el.type === 'Aquathlon' ?
                                            (
                                            <Avatar sx={{ bgcolor: lime [500] }} aria-label="recipe">
                                            A
                                            </Avatar>
                                            )
                                            :
                                            (
                                            <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
                                            D
                                            </Avatar>)
                                          
                                        }
                                        action={
                                          <Button aria-label="settings">
                                            <MoreVertIcon onClick={() => goToPage(el.nav)}/>
                                          </Button>
                                        }
                                        title={el.name}
                                        subheader={el.data}
                                      />
                                      <CardMedia
                                        component="img"
                                        height="194"
                                        image={process.env.PUBLIC_URL + el.image}
                                        alt={el.name + 'zdjęcie opisujące zawody'}
                                      />
                                      <div className='signature'>{el.signature}</div>
                                       <Rating name="read-only" value={el.marks} precision={0.5} readOnly />
                                        <div className='trophy'>
                                        {el.trophy}
                                        <i style={style.trophy} class="fa-solid fa-trophy"></i>
                                        </div>
                                  </Card>
                                </Mycard>
                              </Grid>
                          </div>
                        )
                      })
                    }
                  </ThemeProvider>
                  </Grid>
              </Box>
        </div>
      </div>
    </div>
  )
}
