import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

import WebDevImg from "../assets/web-dev-icon.svg";
import UxImg from "../assets/ux-icon.svg";
import BlockChainImg from "../assets/blockchain-icon.svg";
import AppDevImg from "../assets/app-dev-icon.svg";

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-left: 35px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 4px;
    background-color: #d200c8;
  }
`;

const SectionParagraph = styled.p`
  font-family: InterBold;
  font-size: 38px;
  color: #000;
  font-weight: bold;
`;

function Industries() {
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
          marginBottom: "30px",
          borderColor: "white",
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

  return (
    <Container>
      <Row>{Services}</Row>
    </Container>
  );
}
function Services() {
  return (
    <Container id="services">
      <Row>
        <Col>
          {/* Service Section: What We Do */}
          <SectionTitle>What We Do</SectionTitle>
          <SectionParagraph>
            We offer a complete range of bespoke design and development services
            to help you turn your ideas into digital masterpieces
          </SectionParagraph>
        </Col>
      </Row>
      <Industries />
    </Container>
  );
}

export default Services;
