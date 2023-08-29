import React from "react";
import "../styles/FAQs.css";

export default function FAQs() {
  return (
    <div className="container-faq">
      <h1 className="title-faq">FAQ</h1>
      <div className="seccion-faq">
        <div className="pregunta">
          <h1>¿Cómo puedo registrarme?</h1>
          <p>
            La transmisión HiFi funciona muy bien con las redes 4G/LTE. Además,
            hemos tenido resultados estupendos con transmisiones por 3G; sin
            embargo, si se mueve rápidamente, como en un tren o automóvil,
            recomendamos utilizar el modo sin conexión para garantizar una
            reproducción sin interrupciones.
          </p>
        </div>
        <div className="pregunta">
          <h1>¿Cómo puedo contactar al soporte?</h1>
          <p>
            La transmisión HiFi funciona muy bien con las redes 4G/LTE. Además,
            hemos tenido resultados estupendos con transmisiones por 3G; sin
            embargo, si se mueve rápidamente, como en un tren o automóvil,
            recomendamos utilizar el modo sin conexión para garantizar una
            reproducción sin interrupciones.
          </p>
        </div>
        <div className="pregunta">
          <h1>¿Puedo probar Spoty Fans de forma gratuita?</h1>
          <p>
            La transmisión HiFi funciona muy bien con las redes 4G/LTE. Además,
            hemos tenido resultados estupendos con transmisiones por 3G; sin
            embargo, si se mueve rápidamente, como en un tren o automóvil,
            recomendamos utilizar el modo sin conexión para garantizar una
            reproducción sin interrupciones.
          </p>
        </div>
      </div>
    </div>
  );
}
