import { Metadata } from "next";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Competitive from "@/components/Competitive";
import AfriDev from "@/components/AfriDev";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Tolosa Mitiku | Software Engineer & Architect Portfolio",
  description: "Welcome to Tolosa Mitiku's professional portfolio. Software Engineer & Architect with 5+ years of experience specializing in Full Stack Development, Mobile Development, and System Architecture. Currently serving as Business Manager @ AfriDev Organization.",
  openGraph: {
    title: "Tolosa Mitiku | Software Engineer & Architect Portfolio",
    description: "Professional portfolio showcasing projects, experience, and expertise in Full Stack Development, Mobile Development, and System Architecture.",
  },
};

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
