import React from 'react';
import "../styles/SliderMusic.css";
import CardSong from '../components/CardSong';

function SliderMusic() {
  // Datos de ejemplo para las tarjetas
  const tarjetas = [
    { imagen: '/images/gojira.jpeg', cancion: 'The Chant', artista: 'Gojira', album: 'Álbum 1', descripcion: 'Descripción 1' },
    { imagen: '/images/gojira.jpeg', cancion: 'The Chant', artista: 'Gojira', album: 'Álbum 1', descripcion: 'Descripción 1' },
    { imagen: '/images/gojira.jpeg', cancion: 'The Chant', artista: 'Gojira', album: 'Álbum 1', descripcion: 'Descripción 1' },
    { imagen: '/images/gojira.jpeg', cancion: 'The Chant', artista: 'Gojira', album: 'Álbum 1', descripcion: 'Descripción 1' },
    // ... agregar más tarjetas
  ];

  return (
    <div className="seccion-carrusel">
      {tarjetas.map((tarjeta, index) => (
        <CardSong key={index} {...tarjeta} />
      ))}
    </div>
  );
}

export default SliderMusic;
