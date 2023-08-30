import "../styles/Header.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  // Nav flotante
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Event listener al componente para detectar el scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiamos el event listener cuando el componente se desmonta
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Obtenemos la posición actual del scroll en el eje vertical
    setScrolling(scrollY > 0); // Cambiamos el estado de scrolling dependiendo de si la posición del scroll es mayor a 0
  };

  return (
    <nav className={scrolling ? "scrolling" : ""}>
      <div className="logo-container">
        <Link to="/">
          <img src="/images/spotify.png" alt="Logotipo" className="logo-nav" />
        </Link>
        <h1>SpootChat</h1>
      </div>
      <div className="menu-nav">
        <div className="dropdown">
          <p className="menu-option">Sobre SpootChat</p>
          <div className="dropdown-content">
            <Link to="">¿Qué es SpootChat?</Link>
            <Link to="">Team - Conoce nuestro equipo</Link>
          </div>
        </div>
        <div className="dropdown">
          <p className="menu-option">Ayuda</p>
          <div className="dropdown-content">
            <Link to="">Soporte</Link>
            <Link to="">Políticas de Privacidad</Link>
            <Link to="">Términos y Condiciones</Link>
          </div>
        </div>
        <Link className="buttonMenu-option" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
}
