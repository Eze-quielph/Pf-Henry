import React from "react";
import "../styles/SliderPhrases.css";
import PhraseBoxes from "../components/PhraseBoxes.jsx";

export default function SliderPhrases() {
  // Datos de ejemplo para las frases
  const phrases = [
    {
      texto:
        "SPOOTCHAT es un excelente servicio de streaming de música, ideal para cualquier persona con afición por el audio de alta fidelidad.",
    },
  ];

  return (
    <div className="slider-phraseBoxes">
      {phrases.map((frase, index) => (
        <PhraseBoxes key={index} {...frase} />
      ))}
    </div>
  );
}
