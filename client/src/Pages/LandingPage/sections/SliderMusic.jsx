import React from "react";
import "../styles/SliderMusic.css";
import CardSong from "../components/CardSong";
import Carousel from "../components/Carousel";

function SliderMusic() {
  // Datos de ejemplo para las tarjetas
  const tarjetas = [
    {
      imagen: "/images/gojira.jpeg",
      cancion: "The Chant",
      artista: "Gojira",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/gojira.jpeg",
      cancion: "The Chant",
      artista: "Gojira",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/gojira.jpeg",
      cancion: "The Chant",
      artista: "Gojira",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
  ];

  return (
    <div className="slider-cardSong">
      {/* por cada song se renderiza una CardSong */}
      <Carousel
        cards={tarjetas.map((tarjeta, index) => (
          <CardSong key={index} {...tarjeta} />
        ))}
        slidesPerView={4}
      ></Carousel>
    </div>
  );
}

export default SliderMusic;
