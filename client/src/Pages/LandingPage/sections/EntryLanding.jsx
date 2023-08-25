import React from "react";
import { Link } from "react-router-dom";
import "../styles/EntryLanding.css";

export default function EntryLanding() {
  return (
    <div className="container-entryLanding">
      <div className="subContainer-text-and-button">
        {/* Encabezado */}
        <h1 className="welcome-text">
          ¡Bienvenido a nuestra plataforma de música!
        </h1>
        {/* Párrafo descriptivo */}
        <p className="text-paragraph">
          Descubre la mejor música de tus artistas favoritos.
        </p>
        {/* Enlace a la página de inicio */}
        <Link to="/home" className="home-button">
          <span> SUSCRÍBETE » </span>
        </Link>
      </div>
    </div>
  );
}
