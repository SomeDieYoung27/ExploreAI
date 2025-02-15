import Image from "next/image";
import CTA from "./components/CTA";
import GradientWrapper from "./components/GradientWrapper";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper />
      <CTA />
    </>
  );
}
