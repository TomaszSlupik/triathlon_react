import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Gallery() {
  const itemData = [
    {
      img: "/img/assets/galleryOne.jpg",
      title: "Po wyścigu",
    },
    {
      img: "/img/assets/gallerySix.JPG",
      title: "Przed startem - basen",
    },
    {
      img: "/img/assets/galleryFive.jpg",
      title: "Etap rowerowy - zakładanie buta",
    },
    {
      img: "/img/assets/gallerySeven.jpg",
      title: "Bieżnia mechaniczna - bieganie",
    },
    {
      img: "/img/assets/galleryNine.jpg",
      title: "cc",
    }, 
    {
      img: "/img/assets/galleryTen.jpg",
      title: "bb",
    },
    {
      img: "/img/assets/galleryThree.JPG",
      title: "Laptop",
    },
    {
      img: "/img/assets/galleryTwo.jpg",
      title: "Doors",
    },
    {
      img: "/img/assets/galleryTwelve.JPG",
      title: "Coffee",
    },
    {
      img: "/img/assets/galleryEleven.jpg",
      title: "Storage",
    },
    {
      img: "/img/assets/galleryEight.jpg",
      title: "Rower - drugi etap kolarski",
    },
    {
      img: "/img/assets/galerryFour.JPG",
      title: "Pozycja na rowerze",
    },
  ];

  return (
    <div style={{marginTop: '5em'}}>
      <ImageList
        sx={{ width: "100%", height: "50%", backgroundSize: 'contain' }}
        variant="woven"
        cols={ window.innerWidth < 576 ? 2 : window.innerWidth < 768 ? 3 : 3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
