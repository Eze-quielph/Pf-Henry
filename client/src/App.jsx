// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import React from "react";

// Importación de las páginas
import Home from "../src/Pages/LandingPage/Home";
import Login from "../src/Pages/Login/Login";
// import Register from "../src/Pages/RegisterPage/Register";

export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página principal o inicio de la aplicación */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
{/* 
      <Route path="/register" element={<PonerPaginaCorrespondiente />} />

      <Route path="/user" element={<PonerPaginaCorrespondiente />} />
      <Route path="/manage-my-account" element={<PonerPaginaCorrespondiente />} />

      <Route path="/about-spootchat" element={<PonerPaginaCorrespondiente />} />
      <Route path="/meet-our-team" element={<PonerPaginaCorrespondiente />} />

      <Route path="/contact-us" element={<PonerPaginaCorrespondiente />} />

      <Route path="/support" element={<PonerPaginaCorrespondiente />} />
      <Route path="/terms-and-conditions" element={<PonerPaginaCorrespondiente />} />
      <Route path="/privacy-policies" element={<PonerPaginaCorrespondiente />} /> */}
    </Routes>
  );
}
