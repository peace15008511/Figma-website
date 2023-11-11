import React from 'react';
import styled from 'styled-components';
import { Nav, Button } from 'react-bootstrap';
import ContactUs from './components/ContactUs';
import CaseStudies from './components/CaseStudies';
import Brands from './components/Brands';
import Industries from './components/Industries';

// Styled components
const CustomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #70259b;
  color: #fff;

@media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 80px;
}
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const StyledNav = styled(Nav)`
  flex: 1;
  text-align: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  .nav-link {
    color: #fff;
    padding: 10px 15px;
    text-decoration: none;
    transition: background-color 0.3s ease; /* Smooth transition on hover */
    &:hover {
      background-color: #8b38c9; /* Slightly lighter shade for hover */
    }
  }

  .nav-link {
    color: #fff;
    padding: 10px 15px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease;
    border-radius: 20px;
    &:hover {
      background-color: #8b38c9;
      border-radius: 20px;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  color: #70259b;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
`;


const ImageContainer = styled.div`
  width: 100%;
  height: 68vh;
  background: url('/confidence.jpeg') center/cover no-repeat;
  position: relative;
`;

const ImageOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  color: #fff;
`;

const ContentContainer = styled.div`
  text-align: left;
  width: 30%;
  padding: 25px;
  padding-top: 120px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: left;
  bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #e8e8e8;
  text-align: left;
  bottom: 0;
`;

const ImageButton = styled(Button)`
  margin-top: 25px;
  background-color: #70259b;
  color: #fff;
  border: none;
  border-radius: 20px;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  width: 80; 
 
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px; 
`;

// Services
const ServiceContainer = styled.div`
  background-color: #fff;
  padding: 60px; /* Add padding as needed */
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-left: 35px;

  &::before {
    content: '';
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
  font-size: 48px;
  color: #000;
  font-weight: bold;
`;

// Main component
function App() {
  return (
    <div>
      <CustomHeader>
        <Logo><StyledImage src="logo.svg" alt="Brands" /></Logo>
        <StyledNav>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#industries">Industries</Nav.Link>
          <Nav.Link href="#cases">Cases</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </StyledNav>
        <StyledButton>Let's Talk</StyledButton>
      </CustomHeader>

      {/* Top image section content */}
      <ImageContainer>
        <ImageOverlay>
          <ContentContainer>
              <Title>Live with Confidence</Title>
              <Paragraph>
                Jose Mourinho brings confidence to pan-African Sanlam campaign
              </Paragraph>
              <ImageButton>View Project</ImageButton>
            </ContentContainer>
        </ImageOverlay>
      </ImageContainer>

      {/* Service Section: What We Do */}
      <ServiceContainer id="services">
          <SectionTitle>What We Do</SectionTitle>
          <SectionParagraph>
            We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
          </SectionParagraph>
      </ServiceContainer>

      {/* Industries Section */}
      <Industries />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Brands Section */}
      <Brands />

      {/* ContactUs Section */}
      <ContactUs />

    </div>
  );
}

export default App;
