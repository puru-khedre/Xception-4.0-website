import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[url('/images/bg.png')] bg-[100%_auto] bg-no-repeat">
      <Navbar className={"fixed top-0"} />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
