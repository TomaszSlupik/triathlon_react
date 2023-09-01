import React, { useState } from "react";
import "./News.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Message from "../../data/news.json";
import { Link } from "react-router-dom";
import theme from "../../style/mybreakpoints";
import { ThemeProvider } from "@mui/system";

export default function News() {
  const [message, setMessage] = useState(Message);

  return (
    <div className="news">
      <div className="news__header">Aktualności</div>
      <div className="news__box">
        <div className="news__box-wrapper">
          <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
              <Grid
                container
                spacing={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
                columns={{ xs: 4, sm: 4, md: 4, lg: 12 }}
              >
                {message.map((el, index) => {
                  return (
                    <Grid item xs={6} sm={6} md={4}>
                      <Link to={el.link}>
                        <Card key={index}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="240"
                              image={el.img}
                              alt="green iguana"
                            />
                            <div className="news__box-wrapper--content">
                            <CardContent
                            style={{minHeight: '100%'}}
                            >
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="news__box-title"
                              >
                                {el.name_news}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Data dodania: {el.data_add}
                              </Typography>
                            </CardContent>
                            </div>
                          </CardActionArea>
                        </Card>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </ThemeProvider>
          </Box>
        </div>
      </div>
    </div>
  );
}
