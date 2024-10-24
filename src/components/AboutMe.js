import React from "react";

function AboutMe() {
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
}

export default AboutMe;
