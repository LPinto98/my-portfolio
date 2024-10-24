import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="projects animated-section">
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="project-grid">
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Project One</h3>
          <p>A full-stack web application built with React and Node.js.</p>
        </motion.div>
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Project Two</h3>
          <p>A machine learning model to predict stock prices.</p>
        </motion.div>
        {/* Add more project cards */}
      </div>
    </section>
  );
}

export default Projects;
