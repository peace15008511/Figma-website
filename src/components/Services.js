import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

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
    height: 4px; /* Adjust the line height */
    background-color: #d200c8;
  }
`;

const SectionParagraph = styled.p`
  font-family: InterBold;
  font-size: 38px;
  color: #000;
  font-weight: bold;
`;

function Services() {
  return (
    <Container id="services">
      <Row>
        <Col>
          {" "}
          {/* Service Section: What We Do */}
          <SectionTitle>What We Do</SectionTitle>
          <SectionParagraph>
            We offer a complete range of bespoke design and development services
            to help you turn your ideas into digital masterpieces
          </SectionParagraph>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
