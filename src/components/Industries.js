import React from 'react';
import styled from 'styled-components';

const IndustriesContainer = styled.div`
  background-color: #fff;
  padding: 0 40px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 0px;
`;

const Card = styled.div`
  padding: 0 20px;
  margin: 5px;
  border-radius: 10px;
`;

const CardImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-family: InterBold;
  font-size: 23px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

const CardParagraph = styled.p`
  font-family: InterNormal; 
  font-size: 19px;
  color: #000;
  margin-top: 60px;
`;

// Main component
function Industries() {
  return (
    <div>

      <IndustriesContainer id="industries">

        {/* Cards */}
        <CardContainer>
          {/* Card 1 */}
          <Card>
            <CardImage src="/web-dev-icon.svg" alt="Web" />
            <CardTitle>Web development</CardTitle>
            <CardParagraph>
            We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
            </CardParagraph>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardImage src="ux-icon.svg" alt="UX" />
            <CardTitle>User experience & design</CardTitle>
            <CardParagraph>
            Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
            </CardParagraph>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardImage src="app-dev-icon.svg" alt="Mobile" />
            <CardTitle>Mobile app development</CardTitle>
            <CardParagraph>
            Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
            </CardParagraph>
          </Card>

          {/* Card 4 */}
          <Card>
            <CardImage src="blockchain-icon.svg" alt="Blockchain" />
            <CardTitle>Blockchain solutions</CardTitle>
            <CardParagraph>
            We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.
            </CardParagraph>
          </Card>
        </CardContainer>
      </IndustriesContainer>

    </div>
  );
}

export default Industries;
