import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "../assets/logo.svg";
import styled from "styled-components";

// Styled components for Nav.Link and Button
const StyledNavLink = styled(Nav.Link)`
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #ffc0cb;
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  color: #75259b;
  border-radius: 50px;
  border-color: white;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #75259b;
    color: white;
    border-color: white;
  }
`;

const WhiteFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
`;

/**
 * List of Nav Items
 */
const listItems = [
  { section: "#services", name: "Services" },
  { section: "#industries", name: "Industries" },
  { section: "#cases", name: "Cases" },
  { section: "#contact", name: "Contacts" },
];

/**
 * Nav Items jsx
 */
const navItems = listItems.map((navItem, index) => (
  <StyledNavLink key={index} href={navItem.section}>
    {navItem.name}
  </StyledNavLink>
));

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#75259b" }}>
      <Container>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll">
          <WhiteFontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-12 my-lg-2">{navItems}</Nav>
          <Form className="d-flex justify-content-lg-end justify-content-center">
            <StyledButton>Let's talk</StyledButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
