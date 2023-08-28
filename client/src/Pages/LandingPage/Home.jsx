import React, { useState, useEffect } from "react";
import EntryLanding from "./sections/EntryLanding";
import SliderMusic from "./sections/SliderMusic";
import Featured from "./sections/Featured";
import FAQs from "./sections/FAQs";
import BaseLayout from "../../Components/BaseLayout";
import SliderPhrases from "./sections/SliderPhrases";
import "../../styles/Home.css";
function Home() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BaseLayout>
      <div className="home">
        <EntryLanding />
        <SliderMusic />
        <Featured />
        <SliderPhrases />
        <FAQs />
      </div>

      {showButton && (
        <button
          className={`button-scroll-to-top ${showButton ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </BaseLayout>
  );
}

export default Home;
