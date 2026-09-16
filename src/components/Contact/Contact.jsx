import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-atmosphere" />
    <motion.div className="contact-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="contact-label">04 · You found the contact form</span>
      <h2><span>SAY</span><span>HELLO.</span></h2>
      <p className="contact-subtitle">Best case: we build something cool.</p>
      <p className="contact-intro">Worst case: we exchange two polite messages and disappear into each other’s LinkedIn connections. Still counts as networking.</p>
    </motion.div>
    <motion.form action="https://formspree.io/f/xpwronqd" method="POST" className="contact-panel" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <span className="panel-label">The paperwork episode</span>
      <label>Name<input type="text" name="name" placeholder="Your non-suspicious name" required /></label>
      <label>Email<input type="email" name="email" placeholder="Where replies are supposed to go" required /></label>
      <label>Message<textarea name="message" rows="4" placeholder="Idea, opportunity, or excellent anime take" required /></label>
      <button type="submit">Send it before you overthink it ↗</button>
    </motion.form>
    <div className="contact-stats"><div><strong>GitHub</strong><span>commits and regret</span></div><div><strong>LinkedIn</strong><span>dressed professionally</span></div><div><strong>Replies</strong><span>probably after debugging</span></div></div>
  </section>
);

export default Contact;
