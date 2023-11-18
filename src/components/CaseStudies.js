import { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

// Styled component for the section title
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
    height: 5px;
    background-color: #d200c8;
  }
`;

const CaseStudies = () => {
  // State to hold slider data
  const [sliderData, setSliderData] = useState([]);

  // Fetch slider data on component mount
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

  // Map slider data to Carousel items
  const SliderItems = sliderData.map((item, index) => (
    <Carousel.Item key={index}>
      {/* Image with object-fit and custom height */}
      <img
        className="d-block w-100"
        src={item.imageUrl}
        alt={item.title}
        style={{ objectFit: "cover", height: "500px" }}
      />
      {/* Carousel caption with title and description */}
      <Carousel.Caption className="d-flex flex-column justify-content-end">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Container id="cases">
      {/* Section title */}
      <SectionTitle>Case Studies</SectionTitle>
      {/* Carousel component with fade effect, no automatic sliding, and no indicators */}
      <Carousel fade interval={null} indicators={false}>
        {SliderItems}
      </Carousel>
    </Container>
  );
};

export default CaseStudies;
