import React from "react";
import "../styles/CardSong.css";

function CardSong({ imagen, cancion, artista }) {
  // Función para manejar el error de carga de imagen 🖼️
  const handleImageError = (event) => {
    event.target.onerror = null; // Evita el bucle infinito al asignar null al evento onerror
    event.target.src = "/countryNotFound.png"; // Carga una imagen por defecto en caso de error
  }; // (Aún no escogi una imagen 😉❗)

  // El método substring se utiliza para extraer una porción de una cadena.
  // Los parámetros que se pasan son los índices de inicio y final.
  const chainClipping = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  return (
    <swiper-slide>
    <div className="card-song">
    {/* <div className="card-song" style={{ backgroundImage: `url(${imagen})` }}> */}
      <div className="image-song">
        <img
          src={imagen}
          alt="imagen"
          className="card-image"
          onError={handleImageError}
        />
      </div>
      <div className="card-song-info">
        <div className="card-info">
          <p className="card-name">{chainClipping(cancion, 15)}</p>
        </div>
        <div className="card-info">
          <p className="card-artista">{artista}</p>
        </div>
      </div>
    </div>
    </swiper-slide>
  );
}

export default CardSong;
