import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: #8be9fd;
  padding: 20px;
  font-family: "Consolas", monospace;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    margin: 0 10px;
    color: #8be9fd;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff79c6;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://www.linkedin.com/in/larissa-pinto"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/LPinto98"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.youtube.com/@larissapinto3791"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </SocialLinks>
      <p>&copy; 2024 Larissa Pinto. Website made by me.</p>
    </FooterContainer>
  );
};

export default Footer;
