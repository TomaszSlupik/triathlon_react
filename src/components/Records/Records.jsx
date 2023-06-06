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
      <Atropos className="records__myatropos" highlight={false}>
        <ImageButton focusRipple style={{ width: "100%", height: "100%" }}>
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
              Bieg 5km - 15:25
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        {/* <img
                className="event__box-img"
                src={process.env.PUBLIC_URL + "/img/img_2023/czempinFour.jpg"}
                alt="Etap biegowy, pierwsze 10km - MP Czempin"
              /> */}
      </Atropos>
    </div>
  );
}
