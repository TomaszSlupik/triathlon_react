import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import theme from "../../style/mybreakpoints";
import { Card, ThemeProvider } from "@mui/material";
import Data from "../../data/data.json";
import { useState } from "react";
import { teal, blue, indigo, lime } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Trips.scss";
import Mycard from "../../style/mymuistyle/card";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Textradio from "../../style/mymuistyle/textradio";
import Search from "../Search/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import themeColor from "../../theme/themeColor";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ScrollToTop from '../../hooks/ScrollToTop'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Trips() {
  const [trip, setTrip] = useState(Data);

  const style = {
    grid: { alignItems: "center", display: "flex", justifyContent: "center" },
    card: { height: "365px", position: "relative" },
    label: { color: "#fff" },
    radioGroup: { color: "#7c5fe9" },
    trophy: { marginLeft: "0.2em", color: "#faaf00" },
    filter: {
      color: "#7c5fe9",
      cursor: "pointer",
      fontSize: "2rem",
      marginLeft: "0.4em",
    },
    sort: { textAlign: "left" },
  };

  let navigate = useNavigate();

  const goToPage = (id) => {
    navigate(`${id}`);
  };

  const [triathlon, setTriathlon] = useState(false);
  const [duathlon, setDuathlon] = useState(false);
  const [run, setRun] = useState(false);

  const filterTrips = (type) => {
    setTrip(Data);
    const tripCopy = Data;
    const updateTrips = tripCopy.filter((el) => {
      return el.type === type;
    });
    setTrip(updateTrips);
  };

  const filterTripsYes = () => {
    setTrip(Data);
    setTriathlon(false);
    setDuathlon(false);
    setRun(false);
  };

  const searchText = (text) => {
    const serachEvent = Data.filter((el) =>
      el.name.toLowerCase().includes(text.toLowerCase())
    );
    setTrip(serachEvent);
  };

  const allData = () => {
    const data = [...Data];
    setTrip(data);
  };

  // Filtrowanie

  const [windowFilter, setWindowFilter] = useState(false);
  const [windowFilterSecond, setWindowFilterSecond] = useState(false);

  const [check2024, setCheck2024] = useState(false);
  const [disabledCheck2024, setDisabledCheck2024] = useState(false);
  const [label2024, setLabel2024] = useState("2024 r.");

  const [check2023, setCheck2023] = useState(false);
  const [disabledCheck2023, setDisabledCheck2023] = useState(false);
  const [label2023, setLabel2023] = useState("2023 r.");

  const [check2022, setCheck2022] = useState(false);
  const [disabledCheck2022, setDisabledCheck2022] = useState(false);
  const [label2022, setLabel2022] = useState("2022 r.");

  const [checkTriathlon, setCheckTriathlon] = useState(false);
  const [disabledCheckTriathlon, setDisabledCheckTriathlon] = useState(false);
  const [labelTriathlon, setLabelTriathlon] = useState("Triathlon");

  const [checkDuathlon, setCheckDuathlon] = useState(false);
  const [disabledCheckDuathlon, setDisabledCheckDuathlon] = useState(false);
  const [labelDuathlon, setLabelDuathlon] = useState("Duathlon");

  const [checkAquathlon, setCheckAquathlon] = useState(false);
  const [labelAquathlon, setLabelAquathlon] = useState("Aquathlon");

  const [checkRun, setCheckRun] = useState(false);
  const [disabledCheckRun, setDisabledCheckRun] = useState(false);
  const [labelRun, setLabelRun] = useState("Bieganie");

  const [errorYear, setErrorYear] = useState(false);
  const [errorSports, setErrorSports] = useState(false);

  const handlerChange2024 = (e) => {
    setCheck2024(e.target.checked);
  };

  const handlerChange2023 = (e) => {
    setCheck2023(e.target.checked);
  };

  const handlerChange2022 = (e) => {
    setCheck2022(e.target.checked);
  };

  const handlerTriathlon = (e) => {
    setCheckTriathlon(e.target.checked);
  };

  const handlerDuathlon = (e) => {
    setCheckDuathlon(e.target.checked);
  };

  const handlerAquathlon = (e) => {
    setCheckAquathlon(e.target.checked);
  };

  const handlerRun = (e) => {
    setCheckRun(e.target.checked);
  };

  const handlerFilterOpen = () => {
    setWindowFilter(true);
  };

  const eventClickAll = [];
  const clickTrue = true;

  const handlerAccept = () => {
    if (check2024 === false && check2023 === false && check2022 === false) {
      setErrorYear(true);
      setTimeout(() => {
        setErrorYear(false);
      }, 1500);
    } else {
      switch (clickTrue) {
        case check2024:
          eventClickAll.push(`${check2024}2024`);
        case check2023:
          eventClickAll.push(`${check2023}2023`);
        case check2022:
          eventClickAll.push(`${check2022}2022`);
        default:
          console.log("Filtruję rok");
      }

      function el(eventClickAll) {
        return eventClickAll.startsWith("true");
      }

      const allClickEvent = eventClickAll.filter(el).map((el) => el.substr(4));

      const missingItems = [];
      const numberAdd = 2 - allClickEvent.length;
      for (let i = 0; i < numberAdd; i++) {
        missingItems.push(i.toString());
      }

      const allItem = allClickEvent.concat(missingItems);

      const newArr = [...Data].filter(
        (el) => el.year === Number(allItem[0]) || el.year === Number(allItem[1])
      );

      setTrip(newArr);

      setWindowFilter(false);
      setWindowFilterSecond(true);
    }
  };

  const handlerAcceptSecond = () => {
    if (
      checkTriathlon === false &&
      checkDuathlon === false &&
      checkAquathlon === false &&
      checkRun === false
    ) {
      setErrorSports(true);
      setTimeout(() => {
        setErrorSports(false);
      }, 1500);
    } else {
      const eventSportsAll = [];
      const clickSports = true;

      switch (clickSports) {
        case checkTriathlon:
          eventSportsAll.push(`${checkTriathlon}Triathlon`);
        case checkDuathlon:
          eventSportsAll.push(`${checkDuathlon}Duathlon`);
        case checkAquathlon:
          eventSportsAll.push(`${checkAquathlon}Aquathlon`);
        case checkRun:
          eventSportsAll.push(`${checkRun}Bieg`);
        default:
          console.log("Filtruję dyscyplinę");
      }

      function el(eventClick) {
        return eventClick.startsWith(true);
      }

      const allClickSports = eventSportsAll
        .filter(el)
        .map((el) => el.substr(4));

      const missingSportsItems = [];

      const numberAddSports = 4 - allClickSports.length;
      for (let i = 0; i < numberAddSports; i++) {
        missingSportsItems.push(i.toString());
      }

      const allItemWithAll = allClickSports.concat(missingSportsItems);

      const newArrSports = [...trip].filter(
        (el) =>
          el.type === allItemWithAll[0].toString() ||
          el.type === allItemWithAll[1].toString() ||
          el.type === allItemWithAll[2].toString() ||
          el.type === allItemWithAll[3].toString()
      );

      setTrip(newArrSports);
      setCheck2024(false);
      setCheck2023(false);
      setCheck2022(false);
      setCheckTriathlon(false);
      setCheckDuathlon(false);
      setCheckAquathlon(false);
      setCheckRun(false);
      setWindowFilterSecond(false);
    }
  };

  const handlerFilterClose = () => {
    setWindowFilter(false);
    setCheck2024(false);
    setCheck2023(false);
    setCheck2022(false);
    setDisabledCheck2024(false);
    setDisabledCheck2023(false);
    setDisabledCheck2022(false);
  };

  // Sortowanie
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlerSortData = () => {
    setTrip([
      ...trip.sort((a, b) =>
        new Date(b.dateadded) > new Date(a.dateadded) ? 1 : -1
      ),
    ]);
    setAnchorEl(null);
  };

  const handlerSortName = () => {
    setTrip([...trip.sort((a, b) => (a.name < b.name ? -1 : 1))]);
    setAnchorEl(null);
  };

  const handlerSortMark = () => {
    setTrip([
      ...trip.sort((a, b) =>
        a.trophy.substr(0, 1) < b.trophy.substr(0, 1) ? -1 : 1
      ),
    ]);
    setAnchorEl(null);
  };

  const handlerSortCity = () => {
    setTrip([...trip.sort((a, b) => (a.city < b.city ? -1 : 1))]);
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="trip">
        <ScrollToTop />
        <div className="trip__headerImage">
          <div className="trip__headerImage-text">
            Wyjazdy Triathlonowe, Duathlonowe i biegowe.
            <div className="trip__headerImage-describe">
              Zapraszam do moich artykułów i galerii z wyjazdów
            </div>
          </div>

          <img
            className="trip__headerImage"
            src={process.env.PUBLIC_URL + "/img/bikes.jpg"}
            alt="rowery - trip"
          />
        </div>
        <div className="trip__switch">
          <div className="trip__switch-header">
            <Search searchText={searchText} allData={allData} />
            <FilterAltIcon onClick={handlerFilterOpen} style={style.filter} />
            <Dialog
              open={windowFilter}
              TransitionComponent={Transition}
              keepMounted
              onClose={handlerFilterClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Filtrowanie szczegółowe"}</DialogTitle>
              <div className="trip__switch-header--info">
                Wybierz rok eventu jaki Cię interesuje
              </div>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <FormGroup style={{ marginLeft: "0.4em" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={disabledCheck2024}
                          checked={check2024}
                          onChange={handlerChange2024}
                        />
                      }
                      label={label2024}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={disabledCheck2023}
                          checked={check2023}
                          onChange={handlerChange2023}
                        />
                      }
                      label={label2023}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={check2022}
                          disabled={disabledCheck2022}
                          onChange={handlerChange2022}
                        />
                      }
                      label={label2022}
                    />
                  </FormGroup>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant="outlined" onClick={handlerFilterClose}>
                  Anuluj
                </Button>
                <Button variant="contained" onClick={handlerAccept}>
                  Dalej
                </Button>
              </DialogActions>
            </Dialog>

            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar open={errorYear} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: "100%" }}>
                  Wybierz rok eventu
                </Alert>
              </Snackbar>
            </Stack>

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
              <div className="trip__switch-header--info">
                Możesz wybrać jedną lub kilka dyscyplin, które chcesz obejrzeć
              </div>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkTriathlon}
                          onChange={handlerTriathlon}
                        />
                      }
                      label={labelTriathlon}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkDuathlon}
                          onChange={handlerDuathlon}
                        />
                      }
                      label={labelDuathlon}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkAquathlon}
                          onChange={handlerAquathlon}
                        />
                      }
                      label={labelAquathlon}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checkRun} onChange={handlerRun} />
                      }
                      label={labelRun}
                    />
                  </FormGroup>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose}>Disagree</Button> */}
                <Button
                  variant="contained"
                  onClick={handlerAcceptSecond}
                  autoFocus
                >
                  Akcteptuję
                </Button>
              </DialogActions>
            </Dialog>

            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar open={errorSports} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: "100%" }}>
                  Wybierz dyscyplię sportową
                </Alert>
              </Snackbar>
            </Stack>
          </div>
          <div className="trip__switch-sort">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={style.sort}
              variant="outlined"
            >
              Sortuj
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handlerSortData}>Dacie dodania</MenuItem>
              <MenuItem onClick={handlerSortName}>Nazwie</MenuItem>
              <MenuItem onClick={handlerSortMark}>Miejscu</MenuItem>
              <MenuItem onClick={handlerSortCity}>Miejscowości</MenuItem>
            </Menu>
          </div>

          <FormControl>
            <RadioGroup
              defaultValue="Wszystko"
              style={style.radioGroup}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onClick={() => filterTrips("Triathlon")}
                value="Triathlon"
                control={<Radio />}
                label={<Textradio>Triathlon</Textradio>}
              />
              <FormControlLabel
                onClick={() => filterTrips("Duathlon")}
                value="Duathlon"
                control={<Radio />}
                label={<Textradio>Duathlon</Textradio>}
              />
              <FormControlLabel
                onClick={() => filterTrips("Aquathlon")}
                value="Aquathlon"
                control={<Radio />}
                label={<Textradio>Aquathlon</Textradio>}
              />
              <FormControlLabel
                onClick={() => filterTrips("Bieg")}
                value="Bieganie"
                control={<Radio />}
                label={<Textradio>Bieganie</Textradio>}
              />
              <FormControlLabel
                onClick={filterTripsYes}
                value="Wszystko"
                control={<Radio />}
                label={<Textradio>Wszystko</Textradio>}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="trip__box">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={style.grid}
            >
              <ThemeProvider theme={{ theme, themeColor }}>
                {trip.map((el, index) => {
                  return (
                    <div key={index}>
                      <Grid item xs={12} sm={6} md={4}>
                        <Mycard>
                          <Card style={style.card}>
                            <CardHeader
                              avatar={
                                el.type === "Bieg" ? (
                                  <Avatar
                                    sx={{ bgcolor: teal[500] }}
                                    aria-label="recipe"
                                  >
                                    B
                                  </Avatar>
                                ) : el.type === "Triathlon" ? (
                                  <Avatar
                                    sx={{ bgcolor: blue[500] }}
                                    aria-label="recipe"
                                  >
                                    T
                                  </Avatar>
                                ) : el.type === "Aquathlon" ? (
                                  <Avatar
                                    sx={{ bgcolor: lime[500] }}
                                    aria-label="recipe"
                                  >
                                    A
                                  </Avatar>
                                ) : (
                                  <Avatar
                                    sx={{ bgcolor: indigo[500] }}
                                    aria-label="recipe"
                                  >
                                    D
                                  </Avatar>
                                )
                              }
                              action={
                                <Button
                                  color="primary"
                                  aria-label="settings"
                                  onClick={() => goToPage(el.nav)}
                                >
                                  Zobacz
                                  <MoreVertIcon />
                                </Button>
                              }
                              title={el.name}
                              subheader={el.data}
                            />
                            <div className="trip__box-city">
                              {el.city}
                              <LocationCityIcon />
                            </div>

                            <CardMedia
                              style={{
                                position: "relative",
                                marginTop: "0.8em",
                              }}
                              component="img"
                              height="194"
                              image={process.env.PUBLIC_URL + el.image}
                              alt={el.name + "zdjęcie opisujące zawody"}
                            />
                            {el.signature === "" ? (
                              <div className="signatureTrip">
                                <br></br>
                              </div>
                            ) : (
                              <div className="signatureTrip">
                                {el.signature}
                              </div>
                            )}

                            <Rating
                              name="read-only"
                              value={el.marks}
                              precision={0.5}
                              readOnly
                            />
                            <div className="trophy">
                              {el.trophy}
                              <i
                                style={style.trophy}
                                class="fa-solid fa-trophy"
                              ></i>
                            </div>
                          </Card>
                        </Mycard>
                      </Grid>
                    </div>
                  );
                })}
              </ThemeProvider>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
