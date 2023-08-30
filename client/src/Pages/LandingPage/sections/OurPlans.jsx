import React from "react";
import { Link } from "react-router-dom";
import "../styles/OurPlans.css";

export default function OurPlans() {
  return (
    <div className="container-ourPlans">
      <h1 className="title-ourPlans">Conoce nuestros planes</h1>
      <div className="seccion-ourPlans">
        <div className="plan">
          <h1>SPOOT CHAT</h1>
          <p>Escucha la música como deberia sonar.</p>
          <div className="plan-benefits">
            <p>✓ Alta calidad de sonido</p>
            <p>✓ Alta calidad de sonido</p>
            <p>✓ Alta calidad de sonido</p>
            <p>✓ Alta calidad de sonido</p>
            <p>✓ Alta calidad de sonido</p>
          </div>
          <h2>30 días gratis y después 15.000 COP / mes</h2>
          <Link to="/home" className="backToMain-button">
            Prueba gratis »
          </Link>
        </div>
      </div>
    </div>
  );
}
