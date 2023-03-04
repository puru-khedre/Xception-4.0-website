import { Carousel } from "flowbite-react";
import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App bg-[url('/images/bg.png')] bg-x-full invert">
        {/* <Carousel /> */}
        <Navbar className={"fixed top-0"} />
        <Hero />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
