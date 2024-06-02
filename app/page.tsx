import Image from "next/image";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
}
