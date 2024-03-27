import Image from "next/image";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Arrival from "./Components/Arrival";
import Showcase from "./Components/Showcase";
import Slider from "./Components/SliderMenu";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomePage/>
      <About/>
      <Arrival/>
      <Showcase/> 
      <Slider/>
    </main>
  );
}
