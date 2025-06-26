import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interets";
import Contact from "./components/Contact/Contact";
import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import Footer from "./components/Footer/Footer";

import { Analytics } from "@vercel/analytics/react"

function App() {
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
