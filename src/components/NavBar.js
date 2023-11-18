import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import logoImage from "../assets/logo.svg";
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
const navItems = listItems.map((navItem) => (
  <Nav.Link href={navItem.section} style={{ color: "white" }}>
    {navItem.name}
  </Nav.Link>
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

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-12 my-lg-2"
            //className="ml-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {navItems}
          </Nav>
          <Form className="d-flex">
            <Button
              style={{
                backgroundColor: "white",
                color: "#75259b",
                borderRadius: "50px",
                borderColor: "white",
              }}
            >
              Let's talk
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
