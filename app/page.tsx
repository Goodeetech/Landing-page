import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Intro />
        <Projects />
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
