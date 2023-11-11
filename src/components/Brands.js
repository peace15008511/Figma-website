import React from 'react';
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

const SectionParagraph = styled.p`
  font-family: InterBold;
  font-size: 48px;
  color: #000;
  font-weight: bold;
`;

const GoodCompanyContainer = styled.div`
  background-color: #fff;
  padding: 40px 60px;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10%;
  max-width: 90%; /* Set a maximum width for the grid */
  margin: 0 auto;
  margin-top: 60px;

`;

const BrandLogo = styled.img`
  max-width: 100%;
  height: 85px;
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
`;


const brandsList = [
  { brandName: 'Visa', image: 'visa-black.svg', alt: 'Visa' },
  { brandName: 'TimeBank', image: 'tyme-bank-black.svg', alt: 'Time Bank' },
  { brandName: 'Distell', image: 'distell-black.svg', alt: 'Distell' },
  { brandName: 'Spotify', image: 'spotify-black.svg', alt: 'Spotify' },
  { brandName: 'Microsoft', image: 'microsoft-black.svg', alt: 'Microsoft' },

  { brandName: 'Engen', image: 'engen-black.svg', alt: 'Engen' },
  { brandName: 'Nike', image: 'nike-black.svg', alt: 'Nike' },
  { brandName: 'Wesgrow', image: 'wesgrow-black.svg', alt: 'Wesgrow' },
  { brandName: 'MultiChoice', image: 'multichoice-black.svg', alt: 'MultiChoice' },
  { brandName: 'PicknPay', image: 'pnp-black.svg', alt: 'PicknPay' },

  { brandName: 'Liquid', image: 'liquid-black.svg', alt: 'Liquid' },
  { brandName: 'TFG', image: 'tfg-black.svg', alt: 'TFG' },
  { brandName: 'Sanlam', image: 'sanlam-black.svg', alt: 'Sanlam' },
  { brandName: 'Santam', image: 'santam-black.svg', alt: 'Santam' },
  { brandName: 'BBC', image: 'bbc-black.svg', alt: 'BBC' },
  // Add more brands as needed
];

// Main component
function Brands() {
  return (
    <div>

      {/* Good company Section */}
      <GoodCompanyContainer >
          <SectionTitle>You'll be in good company</SectionTitle>
          <SectionParagraph>
            Trusted by leading brands
          </SectionParagraph>

          <LogoGrid>
            {brandsList.map((brand, index) => (
              <BrandLogo key={index} src={brand.image} alt={brand.alt} />
            ))}
          </LogoGrid>
      </GoodCompanyContainer>

    </div>
  );
}

export default Brands;
