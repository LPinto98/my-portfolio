import React from "react";
import styled from "styled-components";
import larissa from "../assets/larissa.jpg"; // Placeholder image path

const AboutContainer = styled.section`
  background-color: #1c1e22;
  color: #f8f8f2;
  padding: 50px 20px;
  font-family: "Consolas", monospace;
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 1.8;
  flex-direction: row; /* Align items in a row */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack image above content for smaller screens */
    text-align: center; /* Center align for mobile */
  }

  background: linear-gradient(
    to bottom,
    #1c1e22,
    #232529
  ); /* Optional gradient */
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  font-family: "Courier New", Courier, monospace;
  background-color: #1d1f21;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #00ff00;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const PhotoContainer = styled.div`
  flex: 0.4;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 4px solid #ff79c6;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #ff79c6;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold; /* Increase font weight */
`;

const Divider = styled.hr`
  border: 1px solid #ff79c6;
  margin: 20px 0;
`;

const Highlight = styled.span`
  color: #ff79c6;
`;

const AboutMe = () => {
  return (
    <AboutContainer id="about">
      <PhotoContainer>
        <Photo src={larissa} alt="Larissa Pinto" />
      </PhotoContainer>
      <TextContainer className="code-look">
        <Title>Hi, I'm Larissa 👋</Title>
        <p>
          🔧 <Highlight>Job Title</Highlight>: Junior Backend Developer
        </p>
        <p>
          🎯 <Highlight>Mission</Highlight>: Crafting tools at ESProfiler that
          ensure your security investments are well-spent (CISOs we've got you).
        </p>

        <Divider />

        <p>
          👩‍💻 With over 2 years of experience, I’ve tackled microservices,
          wrangled UIs, and now I’m deep into backend wizardry.
        </p>
        <p>
          🎓 I also hold a{" "}
          <Highlight>Master’s in Data Science (Merit)</Highlight> from
          Manchester Metropolitan University — wasn't easy, but totally worth
          it!
        </p>
        <p>Always curious to learn 📚 and deliver excellence 🌟!</p>

        <Divider />

        <p>
          🧠 <Highlight>Superpower</Highlight>: Turning bugs into features.
        </p>
        <p>
          ☕ <Highlight>Fuel</Highlight>: Coffee, obviously.
        </p>
      </TextContainer>
    </AboutContainer>
  );
};

export default AboutMe;
