import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const TheNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand to="/">
        FIGS OF <span>EDEN</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="nav-link" eventKey="1" to="/" exact="true">
            Home
          </Nav.Link>

          <NavDropdown
            className="link"
            title="Our Products"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item to="/women">Women</NavDropdown.Item>
            <NavDropdown.Item to="/men">Men</NavDropdown.Item>
            <NavDropdown.Item to="/children">Children</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="/sales">Sales</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="nav-link" eventKey="3" to="/about">
            About us
          </Nav.Link>
          <Nav.Link className="nav-link" eventKey="5" to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNav;
