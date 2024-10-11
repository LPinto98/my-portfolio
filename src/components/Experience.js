import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import esprofiler from "../assets/esprofiler.jpg";
import unite from "../assets/unite_students.png";
import debate from "../assets/debatemate.jpg";
import mmu from "../assets/mmu.jpg";
import godelcloud from "../assets/godelcloud.jpg";
import ibm from "../assets/ibm.png";

import styled, { keyframes } from "styled-components";

// Keyframe animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Bounce animation for the icons
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Pinkish line animation for the vertical timeline
const lineAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

// Custom styling for the vertical timeline elements
const CustomTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background-color: #282a36 !important; /* Dark background for each element */
    color: #f8f8f2; /* Light text color */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2) !important; /* Subtle shadow */
    border-left: 3px solid #61dafb !important; /* Border on the left for timeline look */
    padding: 20px 30px;
    font-family: "Fira Code", monospace; /* Monospace font */
    transition: all 0.3s ease;
    border-radius: 10px; /* Make the element have a rounded shape */
    animation: ${fadeIn} 0.6s ease; /* Add fade-in animation */
  }

  .vertical-timeline-element-title {
    color: #61dafb; /* Light blue for title */
  }

  .vertical-timeline-element-subtitle {
    color: #bd93f9; /* Light purple for subtitle */
  }

  .vertical-timeline-element-icon {
    background-color: #282a36 !important; /* Dark background for the icon circles */
    color: #61dafb; /* Light blue for icons */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #61dafb; /* Light blue border around icons */
    width: 50px;
    height: 50px; /* Force icons into a small circle */
    animation: ${bounce} 1s infinite; /* Add bounce animation to icons */
  }

  .vertical-timeline-element-date {
    color: #f8f8f2; /* White color for date */
  }

  img {
    width: 35px; /* Make sure the logo fits inside the circle */
    height: 35px;
    border-radius: 50%; /* Ensure images are circular */
  }
`;

// Styled vertical timeline with pink animated line
const AnimatedTimeline = styled(VerticalTimeline)`
  &::before {
    background-color: #ff79c6 !important; /* Pinkish color for the vertical line */
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    animation: ${lineAnimation} 8s ease forwards;
  }
`;

const Experience = () => {
  return (
    <section
      id="experience"
      style={{ padding: "50px 20px", background: "#1c1e22" }}
    >
      <h2
        className="section-title"
        style={{
          color: "#f8f8f2",
          fontFamily: "'Fira Code', monospace",
          textAlign: "center",
        }}
      >
        My Work Experience
      </h2>
      {/* Custom Vertical Timeline with pink animation */}
      <AnimatedTimeline>
        <CustomTimelineElement
          className="vertical-timeline-element--work"
          date="April 2024 - Present"
          icon={<img src={esprofiler} alt="ESProfiler logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Backend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ESProfiler, Manchester, UK
          </h4>
        </CustomTimelineElement>

        <CustomTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 - July 2024"
          icon={<img src={unite} alt="Unite Students logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Experience Team Member
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Unite Students, Manchester, UK
          </h4>
        </CustomTimelineElement>

        <CustomTimelineElement
          className="vertical-timeline-element--work"
          date="November 2023 - April 2024"
          icon={<img src={debate} alt="DebateMate logo" />}
        >
          <h3 className="vertical-timeline-element-title">Student Mentor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Debate Mate, Manchester, UK
          </h4>
        </CustomTimelineElement>

        <CustomTimelineElement
          className="vertical-timeline-element--work"
          date="October 2022 - August 2023"
          icon={<img src={mmu} alt="MMU logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Ambassador
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Manchester Metropolitan University, UK
          </h4>
        </CustomTimelineElement>

        <CustomTimelineElement
          className="vertical-timeline-element--work"
          date="December 2022 - January 2023"
          icon={<img src={godelcloud} alt="GodelCloud logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            GodelCloud, Manchester, UK
          </h4>
        </CustomTimelineElement>

        <CustomTimelineElement
          className="vertical-timeline-element--work"
          date="January 2021 - September 2022"
          icon={<img src={ibm} alt="IBM logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">IBM, India</h4>
        </CustomTimelineElement>
      </AnimatedTimeline>
    </section>
  );
};

export default Experience;
