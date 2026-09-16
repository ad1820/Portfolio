import { motion } from "framer-motion";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-atmosphere" />
    <motion.div className="about-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <span className="about-label">01 · The person behind the commits</span>
      <h2><span>SO,</span><span>ABOUT ME.</span></h2>
      <p className="about-subtitle">Backend engineer. Applied AI builder. Professional tab collector.</p>
      <p className="about-intro">I’m Aditya. I like backend systems, competitive programming, and making AI do actual work instead of just writing enthusiastic paragraphs. Most days I’m either building something useful or discovering a very creative new way to break it.</p>
    </motion.div>
    <motion.aside className="about-note" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <span>Working philosophy</span><p>Hard problems, clean APIs, and projects that keep working after the demo stops clapping.</p>
    </motion.aside>
    <div className="about-stats"><div><strong>Backend</strong><span>where I live</span></div><div><strong>Applied AI</strong><span>made useful</span></div><div><strong>CP</strong><span>humbling me daily</span></div></div>
  </section>
);

export default About;
