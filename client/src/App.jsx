// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import React from "react";

// Importación de las páginas
import Home from "../src/Pages/LandingPage/Home"
import Terms from "./Pages/Terms/components/Terms";
import ChatenVivo from './SocketIo/Chat'
import SupportPage from "./Pages/SupportPage/components/SupportPage"


export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página principal o inicio de la aplicación */}
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path='/chat' element={<ChatenVivo/>}/>
      <Route path='/Support' element={<SupportPage/>}/>

    </Routes>
  );
}
