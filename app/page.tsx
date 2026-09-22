import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import TechStack from "@/app/sections/TechStack";
import Projects from "@/app/sections/Projects";
import Experience from "@/app/sections/Experience";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
