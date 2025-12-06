import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Interests.css";

const Interests = () => {
  const interests = [
    { category: "Football", description: "Strategic gameplay and team coordination" },
    { category: "Anime", description: "Narrative depth and character development" },
    { category: "Formula 1", description: "Precision engineering and tactical racing" },
    { category: "Classic Literature", description: "Timeless wisdom and perspective" },
    { category: "Metal/Grunge", description: "Raw expression and emotional intensity" },
    { category: "Instruments", description: "Creative discipline and technical mastery" },
  ];

  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  const nextInterest = () => {
    setCurrentInterestIndex((prev) => (prev + 1) % interests.length);
  };

  const prevInterest = () => {
    setCurrentInterestIndex((prev) => (prev - 1 + interests.length) % interests.length);
  };

  const goToInterest = (index) => {
    setCurrentInterestIndex(index);
  };

  return (
    <section id="interests" className="stats-section">
      <div className="stats-overlay" />
      <motion.div
        className="stats-box"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="stats-header">
          <h2 className="stats-title">[ Status Window ]</h2>
          <div className="shadow-indicator">Shadow Monarch</div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-label">Name</div>
            <div className="stat-value">Aditya Patidar</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Class</div>
            <div className="stat-value">Shadow Developer</div>
          </div>
        </div>

        <div className="divider" />

        <div className="interests-section">
          <h3 className="interests-title">Interests & Pursuits</h3>
          
          <div className="carousel-wrapper">
            <button className="carousel-btn carousel-btn-left" onClick={prevInterest}>
              <span>‹</span>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentInterestIndex}
                className="interest-item"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="interest-category">{interests[currentInterestIndex].category}</div>
                <div className="interest-description">{interests[currentInterestIndex].description}</div>
              </motion.div>
            </AnimatePresence>

            <button className="carousel-btn carousel-btn-right" onClick={nextInterest}>
              <span>›</span>
            </button>
          </div>

          <div className="carousel-indicators">
            {interests.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentInterestIndex ? "active" : ""}`}
                onClick={() => goToInterest(index)}
                aria-label={`Go to interest ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="stats-footer">
          "The only way to grow stronger is to keep moving forward."
        </p>
      </motion.div>
    </section>
  );
};

export default Interests;
