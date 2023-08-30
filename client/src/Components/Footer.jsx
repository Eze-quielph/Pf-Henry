import "../styles/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Descubre</p>
          <Link to="">¿Qué es SpootChat?</Link>
          <Link to="">Team - Conoce nuestro equipo</Link>
        </div>

        <div className="footer-section">
          <p>Ayuda</p>
          <Link to="">Soporte</Link>
          <Link to="">Contacto</Link>
        </div>

        <div className="footer-section">
          <p>Cuenta</p>
          <Link to="">Regístrate</Link>
          <Link to="">Administra tu cuenta</Link>
        </div>
      </div>
      <div className="footer-data">
        <div className="footer-media">
          <p>
            SPOOTCHAT es una plataforma de streaming de música centrada en los
            artistas y en los fans que ofrece más de 100 millones de canciones
            en calidad de sonido HiFi a la comunidad musical mundial.
          </p>
          <Link>
            <img
              src="/images/twitter.png"
              alt="Logotipo"
              className="logo-footer"
            />
          </Link>
          <Link>
            <img
              src="/images/instagram.png"
              alt="Logotipo"
              className="logo-footer"
            />
          </Link>
          <Link>
            <img
              src="/images/facebook.png"
              alt="Logotipo"
              className="logo-footer"
            />
          </Link>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-data">
        <div className="footer-derechos">
          <img
            src="/images/spotify.png"
            alt="Logotipo"
            className="logo-footer"
          />
          <p className="footer-text">All rights reserved &copy; 2023</p>
        </div>
        <div className="footer-menu">
          <Link to="">Políticas de Privacidad</Link>
          <Link to="">Terminos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
}
