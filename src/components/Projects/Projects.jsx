import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../../constants/projectData";
import "./Projects.css";

const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0; 
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + sortedProjects.length) % sortedProjects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = sortedProjects[currentIndex];

  return (
    <section id="projects" className="chainsaw-section">
      <div className="chainsaw-overlay" />
      <motion.div
        className="chainsaw-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="chainsaw-title">[ Projects ]</h2>
        <p className="chainsaw-subtitle">Devil Hunter's Arsenal</p>

        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-left" onClick={prevProject}>
            <span>‹</span>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="project-card"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="card-glow" />
              <div className="card-content">
                {currentProject.image && (
                  <div className="project-image-wrapper">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="project-header">
                  <h3 className="project-title">{currentProject.title}</h3>
                  {currentProject.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                <p className="project-description">{currentProject.description}</p>
                <div className="project-tags">
                  {currentProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn github-btn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {currentProject.demo && (
                    <a
                      href={currentProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn demo-btn"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="carousel-btn carousel-btn-right" onClick={nextProject}>
            <span>›</span>
          </button>
        </div>

        <div className="carousel-indicators">
          {sortedProjects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <p className="chainsaw-footer">
          Project {currentIndex + 1} of {sortedProjects.length}
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
