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
        <Link to="/home">
          <img src="/images/spotify.png" alt="Logotipo" className="logo-nav" />
        </Link>
        <h1>SpootChat</h1>
      </div>
      <div className="menu-nav">
        <div className="dropdown">
          <button className="button-menu">Sobre SpotyFans</button>
          <div className="dropdown-content">
            <Link to="">¿Qué es SpotyFans?</Link>
            <Link to="">Team (Sobre el equipo)</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="button-menu">Ayuda</button>
          <div className="dropdown-content">
            <Link to="/Support">Soporte</Link>
            <Link to="/terms">Política de Privacidad y Términos de Uso</Link>
          </div>
        </div>
        <Link to="">
          <button className="button-menu">Iniciar sesión</button>
        </Link>
      </div>
    </nav>
  );
}
