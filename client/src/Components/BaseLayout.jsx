import "../styles/BaseLayout.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    // Estructura del diseño base
    <div className="container-base-layout">
      <Header />
      <div className="my-content">{children}</div>
      <Footer />
    </div>
  );
}
