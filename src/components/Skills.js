import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="skills animated-section">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.pre
        className="skills-terminal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <code>$ show skills</code>
        <br />
        <code>{">"} JavaScript, Node.js, MongoDB, React.js, Express</code>
        <br />
        <code>{">"} Python, Data Science, REST APIs</code>
        <br />
        <code>{">"} Microservices, Backend Development</code>
      </motion.pre>
    </section>
  );
}

export default Skills;
