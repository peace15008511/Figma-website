import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import ConfidenceImage from "../assets/confidence.jpeg";

const Hero = () => (
  <div style={{ position: "relative", width: "100%" }}>
    <Card.Img src={ConfidenceImage} alt="Confidence" />

    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        textAlign: "left",
        color: "white",
        padding: "20px",
      }}
    >
      <Container>
        <h1 style={{ fontSize: "2.5em", marginBottom: "10px" }}>
          Live with Confidence
        </h1>
        <p style={{ fontSize: "1em", marginBottom: "20px" }}>
          Jose Mourinho brings confidence to pan-African Sanlam campaign
        </p>
        <Button
          style={{
            backgroundColor: "#75259b",
            color: "white",
            borderRadius: "40px",
            borderColor: "#75259b",
            padding: "8px 16px",
            fontSize: "0.8em",
          }}
        >
          View Project
        </Button>
      </Container>
    </div>
  </div>
);

export default Hero;
