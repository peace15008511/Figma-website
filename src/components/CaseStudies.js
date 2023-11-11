import {React, useEffect, useState} from 'react';
import styled from 'styled-components';

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

const CasesContainer = styled.div`
  background-color: #fff;
  padding: 40px;
`;

const ImageCardContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 60px;
`;

const ImageCard = styled.div`
  flex: 1;
  position: relative;
  height: 45vh; /* Adjust the height as needed */
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const ImageCardTitle = styled.h3`
  font-family: InterBold;
  font-size: 32px;
  font-weight: bold;
  color: #fff;

`;

const ImageCardParagraph = styled.p`
  font-family: InterNormal; 
  font-size: 16px;
  color: #fff;
  margin-top: -10px;
  margin-right: 10px;
`;

// Case Studies component
function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/')
      .then(response => response.json())
      .then(data => setCaseStudies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {/* Cases Section: Case Studies */}
      <CasesContainer id="cases">
        <SectionTitle>Case studies</SectionTitle>

        {/* Image Cards */}
        <ImageCardContainer>
          {caseStudies.map((study, index) => (
            <ImageCard key={index} style={{ backgroundImage: `url("${study.imageUrl}")` }}>
              <CardOverlay>
                <ImageCardTitle>{study.title}</ImageCardTitle>
                <ImageCardParagraph>{study.description}</ImageCardParagraph>
              </CardOverlay>
            </ImageCard>
          ))}
        </ImageCardContainer>
      </CasesContainer>
    </div>
  );
}

export default CaseStudies;