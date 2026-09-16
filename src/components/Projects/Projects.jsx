import { motion } from "framer-motion";
import { projects } from "../../constants/projectData";
import { navigateTo } from "../../utils/navigation";
import "./Projects.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

const Projects = () => {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-grain" />
      <motion.div className="projects-container" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7 }}>
        <header className="projects-heading">
          <div><span className="section-kicker">Selected work · 2024—26</span><h2>Projects built to do something real.</h2></div>
          <p>Two flagship builds, followed by a compact archive of experiments in AI, backend systems, and product engineering.</p>
        </header>
        <div className="featured-projects">
          {featured.map((project, index) => (
            <motion.article key={project.id} className={`featured-project ${project.theme}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
              <div className="featured-project-topline"><span>{project.eyebrow}</span><strong>{project.number}</strong></div>
              <div className="featured-project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="project-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
              <button className="case-study-link" onClick={() => navigateTo(project.caseStudy)}>View case study <Arrow /></button>
            </motion.article>
          ))}
        </div>
        <div className="archive-heading"><h3>More from the archive</h3><span>{archive.length} projects</span></div>
        <div className="project-grid">
          {archive.map((project, index) => (
            <motion.article className="project-tile" key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <span className="tile-index">0{index + 3}</span><h4>{project.title}</h4><p>{project.description}</p>
              <div className="tile-tags">{project.tags.slice(0, 3).join(" · ")}</div>
              <div className="tile-links"><a href={project.github} target="_blank" rel="noreferrer">Code <Arrow /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live <Arrow /></a>}</div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
