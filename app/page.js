"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import Languages from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="container mx-auto mt-3">
      <Navbar />
      <Banner />
      <About />
      <Education />
      <Languages />
      <Services />
      <Projects />
      <HireMe/>
      <Contact/>
      <Footer />
    </main>
  );
}
