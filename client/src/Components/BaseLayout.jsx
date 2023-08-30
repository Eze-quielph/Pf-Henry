import "../styles/BaseLayout.css";
import Header from "./Header";
import Footer from "./Footer";

import React, { useState, useEffect } from "react"; //

export default function BaseLayout({ children }) {
  const [showButton, setShowButton] = useState(false);

  //
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  //
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Estructura del diseño base
    <div className="container-base-layout">
      <Header />
      <div className="my-content">{children}</div>
      {/* // */}
      {showButton && (
        <button
          className={`button-scroll-to-top ${showButton ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
      <Footer />
    </div>
  );
}
