import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import dataAssets from "../../data/dataAsets.json";
import "./Gallery.scss";

export default function Gallery() {
  return (
    <div style={{ marginTop: "5em" }}>
      <ImageList
        sx={{ width: "100%", height: "50%", backgroundSize: "contain" }}
        variant="woven"
        cols={window.innerWidth < 576 ? 2 : window.innerWidth < 768 ? 3 : 3}
        gap={8}
      >
        {dataAssets.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div className="signature">{item.signature}</div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
