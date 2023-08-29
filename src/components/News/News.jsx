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

export default function News() {
  const [message, setMessage] = useState(Message);

  return (
    <div className="news">
      <div className="news__header">Aktualności</div>
      <div className="news__box">
        <div className="news__box-wrapper">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {message.map((el, index) => {
              return (
                <Grid item xs={6} md={4}>
                  <Link to={el.link}>
                    <Card key={index}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          image={el.img}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="news__box-title"
                          >
                            {el.name_news}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Data dodania: {el.data_add}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        </div>
        
      </div>
    </div>
  );
}
