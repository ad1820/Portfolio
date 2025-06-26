import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="gojo-section">
      <div className="gojo-glow" />

      <motion.div
        className="gojo-box"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="gojo-heading">About Me</h2>
        <p className="gojo-dialogue">
          *"The world is overflowing with developers... but me? I'm built
          different."*
        </p>

        <p className="gojo-content">
          I'm <span className="gojo-highlight">Aditya Patidar</span>, an engineer with a <span className="gojo-highlight">keen interest in Competitive Programming</span> and a growing mastery in <span className="gojo-highlight">Backend Development</span>.
          These days, I’m diving deep into the <span className="gojo-highlight">realms of GenAI & LangChain</span> — because writing code is cool, but building the future? That's <em>limitless</em>.
        </p>

        <p className="gojo-signature">– Like Gojo, I see it all.</p>
      </motion.div>
    </section>
  );
};

export default About;
