import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactTyped as Typed } from "react-typed";
import "./Skills.css"; // Import the CSS for styling

const Command = styled(Typed)`
  font-size: 16px;
`;

const Skills = () => {
  const [command, setCommand] = useState("");
  const [showSkills, setShowSkills] = useState(false);
  const terminalCommand = "$ ls skills";
  const typingSpeed = 100; // Adjust typing speed here

  useEffect(() => {
    let i = 0;
    const typeCommand = () => {
      if (i < terminalCommand.length) {
        setCommand((prev) => prev + terminalCommand.charAt(i + 1));
        i++;
        setTimeout(typeCommand, typingSpeed);
      } else {
        setTimeout(() => setShowSkills(true), 500); // Show skills after typing finishes
      }
    };
    typeCommand();
  }, []);

  return (
    <div className="terminal-window">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="window-controls">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="window-title">Terminal</div>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <div className="terminal-content">
          {/* <span>{command}</span> */}
          <Command strings={["$ ls skills"]} typeSpeed={50} />
          {!showSkills && <span className="blinking-cursor"></span>}
          {showSkills && (
            <div className="skills-output">
              <p>
                <span style={{ color: "#00ff00" }}>Frontend:</span>
              </p>
              <ul>
                <li style={{ color: "#ffff00" }}>HTML</li>
                <li style={{ color: "#ffff00" }}>CSS</li>
                <li style={{ color: "#00ffff" }}>JavaScript (ES6+)</li>
                <li style={{ color: "#00ffff" }}>React.js</li>
              </ul>
              <p>
                <span style={{ color: "#00ff00" }}>Backend:</span>
              </p>
              <ul>
                <li style={{ color: "#ffff00" }}>Node.js</li>
                <li style={{ color: "#ffff00" }}>Python</li>
                <li style={{ color: "#00ffff" }}>Django REST Framework</li>
              </ul>
              <p>
                <span style={{ color: "#00ff00" }}>Cloud & DevOps:</span>
              </p>
              <ul>
                <li style={{ color: "#ffff00" }}>AWS (S3, EC2)</li>
                <li style={{ color: "#ffff00" }}>Docker</li>
                <li style={{ color: "#ffff00" }}>CI/CD (Jenkins, GitLab)</li>
              </ul>
              <p>
                <span style={{ color: "#00ff00" }}>Other:</span>
              </p>
              <ul>
                <li style={{ color: "#ffff00" }}>Microsoft Office (Excel)</li>
                <li style={{ color: "#ffff00" }}>Data Analysis Using Python</li>
                <li style={{ color: "#ffff00" }}>Project Management</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
