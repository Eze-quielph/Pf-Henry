// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import React from "react";

// Importación de las páginas
import Home from "../src/Pages/LandingPage/Home"

export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página principal o inicio de la aplicación */}
      <Route path="/" element={<Home />} />

    </Routes>
  );
}
