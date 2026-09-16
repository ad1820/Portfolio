import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interets";
import Contact from "./components/Contact/Contact";
import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import Footer from "./components/Footer/Footer";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import { useEffect, useState } from "react";

import { Analytics } from "@vercel/analytics/react"

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  if (path === "/projects/fifa-wc-battle") {
    return <><Analytics /><CaseStudy type="fifa" /></>;
  }

  if (path === "/projects/applybot") {
    return <><Analytics /><CaseStudy type="applybot" /></>;
  }

  return (
    <div>
      <Analytics/>
      <Navbar />
      <SectionWrapper id="home">
        <Home />
      </SectionWrapper>
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="interests">
        <Interests />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
      <Footer/>
    </div>
  );
}

export default App;
