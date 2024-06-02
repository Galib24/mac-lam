import Image from "next/image";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features></Features>
      </div>
    </>
  );
}
