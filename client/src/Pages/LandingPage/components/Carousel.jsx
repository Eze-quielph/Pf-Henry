import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "../styles/Carousel.css";

register();

export default function Carousel({ cards,  slidesPerView }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <swiper-container
      effect="coverflow"
      ref={swiperElRef}
      slides-per-view={slidesPerView}
      navigation="false"
      pagination="false"
      centeredSlides
      speed="500"
      loop="true"  
    >
        {cards}
    </swiper-container>
  );
}
