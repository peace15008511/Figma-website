import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import VisaBrandImage from "../assets/visa-black.svg";
import TimeBankBrandImage from "../assets/tyme-bank-black.svg";
import DistellBrandImage from "../assets/distell-black.svg";
import SpotifyBrandImage from "../assets/spotify-black.svg";
import MicrosoftBrandImage from "../assets/microsoft-black.svg";
import EngenBrandImage from "../assets/engen-black.svg";
import NikeBrandImage from "../assets/nike-black.svg";
import WesgrowBrandImage from "../assets/wesgrow-black.svg";
import MultiChoiceBrandImage from "../assets/multichoice-black.svg";
import PicknPayBrandImage from "../assets/pnp-black.svg";
import LiquidBrandImage from "../assets/liquid-black.svg";
import TFGBrandImage from "../assets/tfg-black.svg";
import SanlamBrandImage from "../assets/sanlam-black.svg";
import SantamBrandImage from "../assets/santam-black.svg";
import BBCBrandImage from "../assets/bbc-black.svg";

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
  font-size: 48px;
  color: #000;
  font-weight: bold;
`;

const GoodCompanyContainer = styled.div`
  background-color: #fff;
  padding: 40px 60px;
`;

const BrandLogo = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
`;

const brandsList = [
  { brandName: "Visa", image: VisaBrandImage, alt: "Visa" },
  { brandName: "TimeBank", image: TimeBankBrandImage, alt: "Time Bank" },
  { brandName: "Distell", image: DistellBrandImage, alt: "Distell" },
  { brandName: "Spotify", image: SpotifyBrandImage, alt: "Spotify" },
  { brandName: "Microsoft", image: MicrosoftBrandImage, alt: "Microsoft" },
  { brandName: "Engen", image: EngenBrandImage, alt: "Engen" },
  { brandName: "Nike", image: NikeBrandImage, alt: "Nike" },
  { brandName: "Wesgrow", image: WesgrowBrandImage, alt: "Wesgrow" },
  {
    brandName: "MultiChoice",
    image: MultiChoiceBrandImage,
    alt: "MultiChoice",
  },
  { brandName: "PicknPay", image: PicknPayBrandImage, alt: "PicknPay" },
  { brandName: "Liquid", image: LiquidBrandImage, alt: "Liquid" },
  { brandName: "TFG", image: TFGBrandImage, alt: "TFG" },
  { brandName: "Sanlam", image: SanlamBrandImage, alt: "Sanlam" },
  { brandName: "Santam", image: SantamBrandImage, alt: "Santam" },
  { brandName: "BBC", image: BBCBrandImage, alt: "BBC" },
  // Add more brands as needed
];

function Brands() {
  return (
    <Container className="py-5">
      {/* Good company Section */}
      <GoodCompanyContainer>
        <SectionTitle>You'll be in good company</SectionTitle>
        <SectionParagraph>Trusted by leading brands</SectionParagraph>

        <Row xs={1} lg={5} className="justify-content-center">
          {brandsList.map((brand, index) => (
            <Col key={index} className="text-center mb-4">
              <div className="p-3">
                <BrandLogo src={brand.image} alt={brand.alt} />
              </div>
            </Col>
          ))}
        </Row>
      </GoodCompanyContainer>
    </Container>
  );
}

export default Brands;
