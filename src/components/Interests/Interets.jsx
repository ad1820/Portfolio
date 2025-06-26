import { motion } from "framer-motion";
import "./Interests.css";

const Interests = () => {
  return (
    <section id="interests" className="stats-section">
      <motion.div
        className="stats-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="stats-title">[ Status Window ]</h2>

        <div className="stats-line">Name: <span>Aditya Patidar</span></div>
        <div className="stats-line">Class: <span>Shadow Developer</span></div>
        <div className="stats-line">Level: <span>22</span></div>
        <div className="stats-line">Guild: <span>Ahjin</span></div>

        <div className="divider" />

        <div className="stats-line">⚽ Football: <span>+7 Agility</span></div>
        <div className="stats-line">🎌 Anime: <span>+10 Weeb Energy</span></div>
        <div className="stats-line">🏎️ Formula 1: <span>+5 Reflex</span></div>
        <div className="stats-line">🏏 Cricket: <span>+6 Focus</span></div>
        <div className="stats-line">📚 Classic Literature: <span>+8 Wisdom</span></div>
        <div className="stats-line">🤘 Metal/Grunge: <span>+9 Aura</span></div>
        <div className="stats-line">🎸 Instruments: <span>+4 Charisma</span></div>

        <p className="stats-footer">“You have not reached your limit yet.”</p>
      </motion.div>
    </section>
  );
};

export default Interests;
