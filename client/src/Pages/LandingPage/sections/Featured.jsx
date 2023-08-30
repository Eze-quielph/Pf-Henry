import React from "react";
import "../styles/Featured.css";
import CardArtist from "../components/CardArtist";
import Carousel from "../components/Carousel";

const Featured = () => {
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
  ];
  return (
    <div className="container-featured">
      <div className="featured-subContainer">
        {/* Encabezado */}
        <h1 className="featured-title">
          Descubre los artistas y bandas más destacados de esta temporada
        </h1>
        {/* Párrafo descriptivo */}
        <p className="featured-paragraph">
          Sumérgete en la música más vibrante y actual: Explora los sonidos y
          talentos que están marcando tendencia en esta temporada.
        </p>
      </div>
      {/* Por cada artista se renderiza una tarjeta */}
      <div className="featured-cards">
        <Carousel
          cards={tarjetas.map((tarjeta, index) => (
            <CardArtist key={index} {...tarjeta} />
          ))}slidesPerView={3}
        ></Carousel>
      </div>
    </div>
  );
};

export default Featured;
