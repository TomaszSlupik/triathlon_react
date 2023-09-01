import React from "react";
import "./Records.scss";
import "atropos/scss";
import Atropos from "atropos/react";
import Box from "@mui/material/Box";
import ImageButton from "../../style/mymuistyle/imagebutton";
import ImageSrc from "../../style/mymuistyle/imagesrc";
import ImageBackdrop from "../../style/mymuistyle/imagebackdrop";
import Image from "../../style/mymuistyle/images";
import ImageMarked from "../../style/mymuistyle/imagemarked";
import Typography from "@mui/material/Typography";

export default function Records() {
  return (
    <div className="records">
      <div className="records__header">Bieganie</div>
      <div className="records__text">~ ulica</div>
      <Atropos className="records__myatropos" highlight={false}>
        <ImageButton focusRipple style={{ width: "100%", height: "100%" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/recordRunOne.jpeg)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Bieg 5 km - 15'12"
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Atropos>
      <div className="records__header">Duathlon</div>
      <div className="records__text">~ dys. sprint</div>
      <div className="records__img">
        <ImageButton focusRipple style={{ width: "30%", height: "400px" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/img_2023/czempinFour.jpg)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Bieg 5 km - 15'44"
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton focusRipple style={{ width: "40%", height: "400px" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/img_2023/gdyniaseven.JPG)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Rower 20 km - śr. 43km/h
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton focusRipple style={{ width: "30%", height: "400px" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/img_2023/czempinFour.jpg)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Bieg 2,5 km - 7'52"
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </div>
      <div className="records__header">Triathlon</div>
      <div className="records__text">~ dys. sprint</div>
      <div className="records__img">
        <ImageButton focusRipple style={{ width: "30%", height: "400px" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/recordSwimOne.JPG)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Pływanie - 750 m -
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton focusRipple style={{ width: "40%", height: "400px" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/recordBikeOne.JPG)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Rower 20 km - śr. km/h
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton focusRipple style={{ width: "30%", height: "400px" }}>
          <ImageSrc
            style={{ backgroundImage: `url(/img/img_2023/czempinFour.jpg)` }}
          ></ImageSrc>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Bieg 5 km - 16'XX"
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </div>
    </div>
  );
}
