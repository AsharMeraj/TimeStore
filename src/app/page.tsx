import Image from "next/image";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Arrival from "./Components/Arrival";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomePage/>
      <About/>
      <Arrival/>
    </main>
  );
}
