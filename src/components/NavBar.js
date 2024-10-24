import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #1c1e22;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Consolas", monospace;
  border-bottom: 2px solid #282c34;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 1000; /* Ensure it stays above other content */
`;

const NavTab = styled.button`
  flex: 1;
  text-align: center;
  padding: 15px 20px;
  background-color: #282c34;
  color: #8be9fd;
  border: none;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0 2px;
  text-decoration: none;

  &:hover {
    background-color: #1c1e22;
    color: #ff79c6;
  }

  &.active {
    background-color: #1c1e22;
    color: #ff79c6;
  }
`;

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <NavContainer>
        <NavTab
          as={Link}
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          ABOUTME.md
        </NavTab>
        <NavTab
          as={Link}
          to="/experience"
          className={location.pathname === "/experience" ? "active" : ""}
        >
          Experience
        </NavTab>
        <NavTab
          as={Link}
          to="/skills"
          className={location.pathname === "/skills" ? "active" : ""}
        >
          Skills
        </NavTab>
        <NavTab
          as={Link}
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Projects
        </NavTab>
        <NavTab
          as={Link}
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </NavTab>
      </NavContainer>
    </>
  );
};

export default NavBar;
