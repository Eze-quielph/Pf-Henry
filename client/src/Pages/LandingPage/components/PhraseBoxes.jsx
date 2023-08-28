import React from "react";
import "../styles/PhraseBoxes.css"

export default function PhraseBoxes({ texto }) {
  return (
    <div className="boxPhrase">
      <p>"{texto}"</p>
    </div>
  );
}
