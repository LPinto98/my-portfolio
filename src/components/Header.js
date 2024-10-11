import React from "react";
import styled from "styled-components";
import { ReactTyped as Typed } from "react-typed";

const HeaderContainer = styled.header`
  background-color: #1c1e22;
  padding: 50px 20px;
  color: #f0a500;
  font-family: "Consolas", monospace;
  text-align: center;
`;

const Title = styled.h1`
  color: #ff79c6;
  font-size: 2.5rem;
`;

const SubTitle = styled(Typed)`
  font-size: 1.5rem;
  color: #8be9fd;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Larissa Pinto</Title>
      <SubTitle
        strings={[
          "Data Scientist",
          "Full-stack Developer",
          "Deep Learning Enthusiast",
        ]}
        typeSpeed={50}
        backSpeed={50}
        loop
      />
    </HeaderContainer>
  );
};

export default Header;
