import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Competitive from "@/components/Competitive";
import AfriDev from "@/components/AfriDev";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AfriDev />
      <Experience />
      <Projects />
      <Competitive />
      <Contact />
    </>
  );
}
