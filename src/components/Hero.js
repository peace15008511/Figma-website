import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import ConfidenceImage from "../assets/confidence.jpeg";
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -0%);
  width: 100%;
  text-align: left;
  color: white;
  max-width: 800px;

  @media (max-width: 768px) {
    transform: translate(-50%, -50%);
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const HeroButton = styled(Button)`
  background-color: #75259b;
  color: white;
  border-radius: 40px;
  border-color: #75259b;
  padding: 8px 16px;
  font-size: 0.8em;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const Hero = () => (
  <HeroContainer>
    <Card.Img src={ConfidenceImage} alt="Confidence" />

    <ImageOverlay>
      <Container>
        <HeroTitle>Live with Confidence</HeroTitle>
        <HeroSubtitle>
          Jose Mourinho brings confidence to pan-African Sanlam campaign
        </HeroSubtitle>
        <HeroButton>View Project</HeroButton>
      </Container>
    </ImageOverlay>
  </HeroContainer>
);

export default Hero;
