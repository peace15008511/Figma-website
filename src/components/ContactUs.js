import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #430864;  
  padding: 40px;
  margin: 0 auto;
  margin-top: 80px;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  color: #fff;

`;

const LeftColumn = styled.div`
  width: 75%;
`;

const RightColumn = styled.div`
  width: 25%;
`;

const ContactTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #fff;
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

const ContactParagraph = styled.p`
  font-family: InterNormal;
  font-size: 19px;
  color: #fff;

`;

const ContactParagraph4 = styled.p`
  font-family: InterNormal;
  font-size: 19px;
  color: #fff;
  margin-top: 60px;
`;

const ContactParagraphH2 = styled.p`
  font-family: InterBold;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10%;
  max-width: 90%; /* Set a maximum width for the grid */
  margin: 0 auto;
  margin-top: 60px;
  text-align: left;
`;

const FooterItem = styled.p`
  max-width: 100%;
  height: 25px;
  display: block;
  margin: 0 auto;
  margin-top: 0px;
  font-size: 19px;
  
`;

const footerItems = [
  { Name: 'Terms of service'},
  { Name: 'Facebook' },
  { Name: 'Github'},
  { Name: 'Youtube'},

  { Name: 'Privacy policy' },
  { Name: 'Instagram' },
  { Name: 'Linkedin'},
  { Name: 'Behance'},

  { Name: 'Impressum' },
  { Name: 'Twitter' },
  { Name: 'Teams'},
  { Name: 'Dribbble'},

  // Add more brands as needed
];

// Footer: Contact Us
function ContactUs() {
    return (
      <div>  
        {/* Contact Section: Footer */}
        <ContactContainer id="contact">
          <ContactTitle>Contact Us</ContactTitle>
  
          {/* Contact Content */}
          <ContactContent>
            {/* Left Column */}
            <LeftColumn>
              <ContactParagraphH2>
                Have a project in mind?<br /> Let's make it happen
              </ContactParagraphH2>
            </LeftColumn>
  
            {/* Right Column */}
            <RightColumn>
  
              <ContactParagraph>
                22 Street Name, Suburb, 8000,<br /> Cape Town, South Africa <br /> +27 21 431 0001<br /> enquirie@website.co.za
              </ContactParagraph>
            </RightColumn>
          </ContactContent>
  
            {/* Contact Content */}
            <ContactContent>
            {/* Left Column */}
            <LeftColumn>
            <FooterGrid>
              {footerItems.map((item, index) => (
                <FooterItem key={index}>{item.Name}</FooterItem>
              ))}
            </FooterGrid>
            </LeftColumn>
  
            {/* Right Column */}
            <RightColumn>
  
              <ContactParagraph4>
                Explore open jobs <br /><br />@2000-2023 Company Name
              </ContactParagraph4>
            </RightColumn>
          </ContactContent>
  
        </ContactContainer>
  
      </div>
    );
  }
  
  export default ContactUs;