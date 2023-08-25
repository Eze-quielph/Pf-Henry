import React from "react";
import "../styles/Featured.css";
import CardArtist from "../components/CardArtist";

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
    }
    // ... agregar más tarjetas
  ];
  return (
    <div className="container-featured">
      <div className="featured-subContainer">
        {/* Encabezado */}
        <h1 className="featured-title">Sumérgete de lleno en el sonido</h1>
        {/* Párrafo descriptivo */}
        <p className="featured-paragraph">
          Descubre una forma completamente nueva de enamorarte de tu música
          favoritta con Dolby Atmos Music y Sony 360 Reality Audio. Cada
          innovador formato de sonido espacial emite el sonido a tu alrededor
          con toda precisión para crear un entorno inmersivo.
        </p>
      </div>
      <div className="featured-cards">
        {tarjetas.map((tarjeta, index) => (
          <CardArtist key={index} {...tarjeta} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
