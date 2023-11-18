import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

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
    width: 25px; /* Adjust the line width */
    height: 5px; /* Adjust the line height */
    background-color: #d200c8;
  }
`;

const CaseStudies = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws"
        );
        setSliderData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const SliderCards = sliderData.map((item, index) => (
    <Col key={index} xs={12} sm={12} md={4} lg={4}>
      <Card
        className="text-white bg-dark"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingBottom: "100%",
        }}
      >
        <Card.Img
          src={item.imageUrl}
          alt={item.title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <SectionTitle>Case Studies</SectionTitle>
      <Carousel
        data-bs-theme="dark"
        interval={null} // Set to null to stop automatic sliding
        nextLabel=""
        prevLabel=""
      >
        <Carousel.Item style={{ paddingBottom: "5%" }}>
          <Container>
            <Row className="justify-content-around">{SliderCards}</Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CaseStudies;
