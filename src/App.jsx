import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[url('/images/bg.png')] bg-cover min-h-screen h-[110vh]">
      <Navbar className={"fixed top-0"} />
      <Hero />
    </div>
  );
}

export default App;
