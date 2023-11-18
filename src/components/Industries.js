import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

import WebDevImg from "../assets/web-dev-icon.svg";
import UxImg from "../assets/ux-icon.svg";
import BlockChainImg from "../assets/blockchain-icon.svg";
import AppDevImg from "../assets/app-dev-icon.svg";

const ServicesData = [
  {
    name: "Web development",
    imageUrlPath: WebDevImg,
    imageName: "web-dev",
    description:
      "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
  },
  {
    name: "User experience & design",
    imageUrlPath: UxImg,
    imageName: "ux-design",
    description:
      "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
  },
  {
    name: "Blockchain solutions",
    imageUrlPath: BlockChainImg,
    imageName: "block-chain",
    description:
      "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
  },
  {
    name: "Mobile app development",
    imageUrlPath: AppDevImg,
    imageName: "app-dev",
    description:
      "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
  },
];

const Services = ServicesData.map((Service, index) => (
  <Col md={3} key={index}>
    <Card
      style={{
        width: "100%",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Img
        variant="top"
        src={Service.imageUrlPath}
        alt={Service.imageName}
        style={{ height: "120px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          {Service.name}
        </Card.Title>
        <Card.Text style={{ fontSize: "0.9em", color: "#555" }}>
          {Service.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
));

function Industries() {
  return (
    <Container>
      <Row>{Services}</Row>
    </Container>
  );
}

export default Industries;
