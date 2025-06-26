import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [stage, setStage] = useState("name");

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev === "name" ? "japanese" : "name"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-overlay" />

      <AnimatePresence mode="wait">
        {stage === "name" && (
          <motion.h1
            key="name"
            className="home-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            ADITYA PATIDAR
          </motion.h1>
        )}

        {stage === "japanese" && (
          <motion.h1
            key="jp"
            className="home-title-jp"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            アディティヤ・パティダー
          </motion.h1>
        )}

        
      </AnimatePresence>

      <motion.p
        className="home-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        “Pushing beyond the Walls — one repo at a time.”
      </motion.p>
    </section>
  );
};

export default Home;
