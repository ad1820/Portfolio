import { motion } from "framer-motion";
import "./Home.css";

const Home = () => (
  <section id="home" className="home-section">
    <div className="home-atmosphere" />
    <motion.div className="home-copy" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <span className="home-label">Backend · Applied AI · Competitive Programming</span>
      <h1><span>ADITYA</span><span>PATIDAR</span></h1>
      <p className="home-subtitle">I build things. Sometimes they even work.</p>
      <p className="home-intro">Mostly backend systems, applied AI, and side projects that begin with “this should be easy” and end three databases later.</p>
      <div className="home-actions"><a href="#projects" className="home-primary">See what survived ↘</a><a href="#contact" className="home-secondary">Say hello</a></div>
    </motion.div>
    <motion.aside className="home-note" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3 }}>
      <span>Current situation</span><p>Teaching computers to do the boring parts so I can debug the interesting ones.</p>
    </motion.aside>
    <div className="home-stats"><div><strong>Code</strong><span>mostly intentional</span></div><div><strong>Applied AI</strong><span>useful, not sprinkled</span></div><div><strong>Sleep</strong><span>under negotiation</span></div></div>
  </section>
);

export default Home;
