import React from "react";
import "./Resultcharts.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Season2021 from "../../data/season 2021.json";
import Season2022 from "../../data/season 2022.json";
import Season2023 from "../../data/season 2023.json";
import { useState } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const style = {
  panel: { width: "100%", height: "100%" },
};

export default function Resultcharts() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // const data2021 = {
  //   labels: [
  //     "MP w duathlonie",
  //     "Garmin Iron Triathlon 1/2",
  //     "Serock Triathlon",
  //     "Triathlon Lwa",
  //     "Garmin Iron Triathlon 1/8",
  //     "Triathlon Radłów",
  //   ],
  //   datasets: [
  //     {
  //       data: [3, 1, 1, 1, 1, 2],
  //       borderColor: "#7c5fe9",
  //       tension: 1,
  //     },
  //   ],
  // };

  // const data2022 = {
  //   labels: [
  //     "HP Indoor Triathlon",
  //     "Duathlon Czempiń",
  //     "Mistrzostwa Europy Olsztyn",
  //     "Susz Triathlon",
  //     "Enea Bydgoszcz Triathlon",
  //     "Sprint Triathlon Gdynia",
  //     "Dziesiątka Babicka",
  //     "5150 Poznań",
  //     "Mararton Warszawski - kat M20",
  //   ],
  //   datasets: [
  //     {
  //       data: [1, 1, 4, 3, 1, 3, 1, 1, 3],
  //       borderColor: "#7c5fe9",
  //       tension: 1,
  //     },
  //   ],
  // };

  // const data2023 = {
  //   labels: ["HP Indoor Triathlon", "Grand Prix Polski"],
  //   datasets: [
  //     {
  //       data: [1, 1],
  //       borderColor: "#7c5fe9",
  //       tension: 1,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: {
  //       labels: {
  //         font: {
  //           size: 14,
  //         },
  //       },
  //     },
  //   },
  //   scales: {
  //     x: {
  //       scaleLabel: {
  //         display: true,
  //         labelString: "Miejsce zawodów",
  //         grid: {
  //           display: false,
  //         },
  //       },
  //     },

  //     y: {
  //       ticks: {
  //         stepSize: 1,
  //       },
  //       scaleLabel: {
  //         display: true,
  //         labelString: "Miejsce",
  //         position: "top",
  //       },
  //     },
  //   },
  // };

  // Wybór roku
  const [yearIntervalFirst, setYearIntervalFirst] = useState(true);
  const [yearIntervalSecond, setYearIntervalSecond] = useState(false);

  const handlerYearIntervalFirst = (e) => {
    setYearIntervalFirst(e.target.checked);
    setYearIntervalSecond(false);
  };

  const handlerYearIntervalSecond = (e) => {
    setYearIntervalSecond(e.target.checked);
    setYearIntervalFirst(false);
  };

  return (
    <div className="charts">
      <div className="charts__choice">
        <FormControl style={{ color: "#7c5fe9" }}>
          Wybierz przedział czasowy
          {/* <FormLabel 
      color="primary"
      id="demo-radio-buttons-group-label">Wybierz przedział czasowy</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="yearIntervalFirst"
              control={
                <Radio
                  checked={yearIntervalFirst}
                  onChange={handlerYearIntervalFirst}
                />
              }
              label="Rok: 2019, 2020, 2021"
            />
            <FormControlLabel
              value="yearIntervalSecond"
              control={<Radio />}
              checked={yearIntervalSecond}
              onChange={handlerYearIntervalSecond}
              label="Rok: 2022, 2023"
            />
          </RadioGroup>
        </FormControl>
      </div>
      {yearIntervalSecond === true ? (
        <div className="charts__box">
          <Box
            sx={{ bgcolor: "background.paper", width: "100%", height: "100%" }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="2021 r." {...a11yProps(0)} />
                <Tab label="2022 r." {...a11yProps(1)} />
                <Tab label="2023 r." {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <Button
              style={{ width: "100%", height: "100%" }}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel
                value={value}
                index={0}
                dir={theme.direction}
                style={style.panel}
              >
                <div className="data">
                  <Timeline position="alternate">
                    {Season2021.map((el, index) => {
                      return (
                        <div>
                          <TimelineItem key={index}>
                            <TimelineOppositeContent
                              sx={{ m: "auto 0" }}
                              align="right"
                              variant="body2"
                              color="text.secondary"
                            >
                              {el.place}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot color="primary">
                                <EmojiEventsIcon
                                  style={{ color: `${el.color}` }}
                                />
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography variant="h6" component="span">
                                {el.name_competition}
                              </Typography>
                              <Typography>{el.kind}</Typography>
                            </TimelineContent>
                          </TimelineItem>
                        </div>
                      );
                    })}
                  </Timeline>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="data">
                  <Timeline position="alternate">
                    {Season2022.map((el, index) => {
                      return (
                        <div>
                          <TimelineItem key={index}>
                            <TimelineOppositeContent
                              sx={{ m: "auto 0" }}
                              align="right"
                              variant="body2"
                              color="text.secondary"
                            >
                              {el.place}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot color="primary">
                                <EmojiEventsIcon
                                  style={{ color: `${el.color}` }}
                                />
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography variant="h6" component="span">
                                {el.name_competition}
                              </Typography>
                              <Typography>{el.kind}</Typography>
                            </TimelineContent>
                          </TimelineItem>
                        </div>
                      );
                    })}
                  </Timeline>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <div className="data">
                  <Timeline position="alternate">
                    {Season2023.map((el, index) => {
                      return (
                        <div>
                          <TimelineItem key={index}>
                            <TimelineOppositeContent
                              sx={{ m: "auto 0" }}
                              align="right"
                              variant="body2"
                              color="text.secondary"
                            >
                              {el.place}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot color="primary">
                                <EmojiEventsIcon
                                  style={{ color: `${el.color}` }}
                                />
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography variant="h6" component="span">
                                {el.name_competition}
                              </Typography>
                              <Typography>{el.kind}</Typography>
                            </TimelineContent>
                          </TimelineItem>
                        </div>
                      );
                    })}
                  </Timeline>
                </div>
              </TabPanel>
            </Button>
          </Box>
        </div>
      ) : (
        <div className="charts__box">
          <Box
            sx={{ bgcolor: "background.paper", width: "100%", height: "100%" }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="2019 r." {...a11yProps(0)} />
                <Tab label="2020 r." {...a11yProps(1)} />
                <Tab label="2021 r." {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <Button
              style={{ width: "100%", height: "100%" }}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel
                value={value}
                index={0}
                dir={theme.direction}
                style={style.panel}
              >
                <div className="data">
                  <Timeline position="alternate"></Timeline>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="data">
                  <Timeline position="alternate"></Timeline>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <div className="data">
                  <Timeline position="alternate">
                    {Season2021.map((el, index) => {
                      return (
                        <div>
                          <TimelineItem key={index}>
                            <TimelineOppositeContent
                              sx={{ m: "auto 0" }}
                              align="right"
                              variant="body2"
                              color="text.secondary"
                            >
                              {el.place}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot color="primary">
                                <EmojiEventsIcon
                                  style={{ color: `${el.color}` }}
                                />
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography variant="h6" component="span">
                                {el.name_competition}
                              </Typography>
                              <Typography>{el.kind}</Typography>
                            </TimelineContent>
                          </TimelineItem>
                        </div>
                      );
                    })}
                  </Timeline>
                </div>
              </TabPanel>
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}
