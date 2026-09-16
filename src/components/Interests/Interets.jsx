import { motion } from "framer-motion";
import "./Interests.css";

const interests = ["Football", "Anime", "Classic literature"];

const Interests = () => (
  <section id="interests" className="interests-section">
    <div className="interests-atmosphere" />
    <motion.div className="interests-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="interests-label">03 · When the laptop is pretending to rest</span>
      <h2><span>THAT’S WHAT</span><span>I DO.</span></h2>
      <p className="interests-subtitle">Football, anime, and books old enough to judge me.</p>
      <p className="interests-intro">I watch football like the manager is waiting for my tactical advice, consume anime as serious cultural research, and read classic literature to confirm that people have always been complicated.</p>
      <div className="interest-pills">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
    </motion.div>
    <motion.aside className="interests-note" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <span>Status window</span><p>Employed: technically no.<br />Building things: aggressively yes.</p>
    </motion.aside>
    <div className="interests-stats"><div><strong>Football</strong><span>weekend tactics department</span></div><div><strong>Anime</strong><span>serious research</span></div><div><strong>Books</strong><span>old people had points</span></div></div>
  </section>
);

export default Interests;
