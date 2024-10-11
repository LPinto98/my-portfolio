import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  background-color: #1c1e22;
  color: #61dafb;
  padding: 50px 20px;
  font-family: "Consolas", monospace;
  text-align: left;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact</h2>
      <p>Email: larissapinto98@gmail.com</p>
      <p>Phone: (+44) 7867236269</p>
      <p>GitHub: @LPinto98</p>
    </ContactContainer>
  );
};

export default Contact;
