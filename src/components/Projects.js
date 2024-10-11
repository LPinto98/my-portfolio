import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  background-color: #1c1e22;
  color: #61dafb;
  padding: 50px 20px;
  font-family: "Consolas", monospace;
  text-align: left;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Offensive content detection in social media using Deep Learning</li>
        <li>Personality Assessment for Hiring using Social Media</li>
      </ul>
    </ProjectsContainer>
  );
};

export default Projects;
