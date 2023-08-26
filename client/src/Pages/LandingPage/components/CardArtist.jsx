import React from "react";
import "../styles/CardArtist.css";

function CardArtist({ imagen, cancion, artista }) {
  // Función para manejar el error de carga de imagen 🖼️
  const handleImageError = (event) => {
    event.target.onerror = null; // Evita el bucle infinito al asignar null al evento onerror
    event.target.src = "/notFound.png"; // Carga una imagen por defecto en caso de error
  }; // (Aún no he escogido una imagen 😉❗)

  // El método substring se utiliza para extraer una porción de una cadena.
  // Los parámetros que se pasan son los índices de inicio y final.
  const chainClipping = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  return (
    <div className="card-artist">
      <div className="imageArtist-artist">
        <img
          src={imagen}
          alt="imagen"
          className="cardArtist-image"
          onError={handleImageError}
        />
      </div>
      <div className="card-artist-info">
        <div className="cardArtist-info">
          <p className="cardArtist-name">{chainClipping(cancion, 15)}</p>
        </div>
        <div className="cardArtist-info">
          <p className="cardArtist-artista">{artista}</p>
        </div>
      </div>
    </div>
  );
}

export default CardArtist;
