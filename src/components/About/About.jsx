import { motion } from "framer-motion";
import "./About.css";

const skillGroups = [
  { label: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets"] },
  { label: "AI", skills: ["RAG", "LangChain", "LangGraph", "Agentic AI", "LLM evaluation"] },
  { label: "Data & infra", skills: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "RabbitMQ", "Docker", "GCP"] },
];

const About = () => (
  <section id="about" className="about-section">
    <div className="about-atmosphere" />
    <motion.div className="about-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <span className="about-label">01 · The person behind the commits</span>
      <h2><span>SO,</span><span>ABOUT ME.</span></h2>
      <p className="about-subtitle">Backend engineer. Applied AI builder. Professional tab collector.</p>
      <p className="about-intro">I’m Aditya, a software engineer with 1 year 10 months of experience, including my internship. I build multi-tenant backends, asynchronous pipelines, and applied AI systems that do useful work beyond the demo.</p>
    </motion.div>
    <motion.aside className="about-note about-skills" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <span>Core toolkit</span>
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.label}>
          <strong>{group.label}</strong>
          <div className="skill-list">
            {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      ))}
    </motion.aside>
    <div className="about-stats"><div><strong>1 yr 10 mo</strong><span>total experience</span></div><div><strong>Backend</strong><span>systems that scale</span></div><div><strong>Applied AI</strong><span>made useful</span></div></div>
  </section>
);

export default About;
