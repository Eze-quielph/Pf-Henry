import EntryLanding from "./sections/EntryLanding"
import SliderMusic from "./sections/SliderMusic"
import Featured from "./sections/Featured"
// import Carousel from "./sections/Carousel"
import FAQs from "./sections/FAQs"

function Home() {
  return (
    <div className="home">
      <EntryLanding />
      <SliderMusic />
      <Featured />
      {/* <Carousel /> */}
      <FAQs />
    </div>
  );
}

export default Home;
