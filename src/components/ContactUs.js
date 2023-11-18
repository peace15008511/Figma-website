import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ContactContainer = styled.div`
  background-color: #430864;
  padding: 40px 20px;
  margin-top: 80px;
`;

const ContactTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #fff;
  position: relative;
  padding-left: 15px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 4px;
    background-color: #d200c8;
  }
`;

const ContactParagraphH2 = styled.p`
  font-family: InterBold;
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ContactParagraph = styled.p`
  font-family: InterNormal;
  font-size: 16px;
  color: #fff;
  margin-bottom: 15px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10%;
  margin: 0 auto;
  margin-top: 30px;
  text-align: left;
`;

const ContactParagraph4 = styled.p`
  font-family: InterNormal;
  font-size: 16px;
  color: #fff;
  margin-top: 85px;
`;

const footerItems = [
  { Name: "Terms of service" },
  { Name: "Facebook" },
  { Name: "Github" },
  { Name: "Youtube" },
  { Name: "Privacy policy" },
  { Name: "Instagram" },
  { Name: "Linkedin" },
  { Name: "Behance" },
  { Name: "Impressum" },
  { Name: "Twitter" },
  { Name: "Teams" },
  { Name: "Dribbble" },
];

// Footer: Contact Us
function ContactUs() {
  return (
    <ContactContainer id="contact">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactParagraphH2>
              Have a project in mind?
              <br /> Let's make it happen
            </ContactParagraphH2>
          </Col>
          <Col xs={12} md={4}>
            <ContactParagraph>
              22 Street Name, Suburb, 8000,
              <br /> Cape Town, South Africa <br /> +27 21 431 0001
              <br /> <u>enquirie@website.co.za</u>
            </ContactParagraph>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <FooterGrid>
              {footerItems.map((item, index) => (
                <ContactParagraph key={index}>{item.Name}</ContactParagraph>
              ))}
            </FooterGrid>
          </Col>
          <Col xs={12} md={4}>
            <ContactParagraph4>
              Explore open jobs <br />
              <br />
              @2000-2023 Company Name
            </ContactParagraph4>
          </Col>
        </Row>
      </Container>
    </ContactContainer>
  );
}

export default ContactUs;
