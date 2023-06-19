import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {


  return (
    <main className="container mx-auto mt-2 flex flex-col gap-3 h-auto bg-accent/40 backdrop-blur-lg rounded-xl">
      <Navbar />
      <Banner/>
      <Intro/>
      <Projects/>
      <Footer/>
    </main>
  );
}
