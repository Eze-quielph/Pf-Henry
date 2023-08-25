import React from 'react';
import SliderPhrases from '../components/SliderPhrases.jsx';

function Carousel() {
  // Datos de ejemplo para las frases y logos
  const phrases = [
    { texto: 'La mejor plataforma de música'},
    { texto: 'Descubre nuevas canciones'},
    // ... agregar más frases y logos
  ];

  return (
    <div className="seccion-slider">
      {phrases.map((frase, index) => (
        <SliderPhrases key={index} {...frase} />
      ))}
    </div>
  );
}

export default Carousel;
