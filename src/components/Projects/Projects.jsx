import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="berserk-section">
      <div className="berserk-overlay" />
      <motion.div
        className="berserk-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="berserk-title">Projects</h2>
        <p className="berserk-text">
          “You’re waiting for the Berserk manga... you can wait for this too.”
        </p>
        <p className="berserk-soon">Aditya will update it... eventually.</p>
      </motion.div>
    </section>
  );
};

export default Projects;
