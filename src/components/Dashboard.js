import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo-new.png';

const Dashboard = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="dashboard">
        <Navbar.Brand className="brand-name" href="/">
          <img src={logo} alt="brand logo" style={{ height: 80 }} />
        </Navbar.Brand>
        <Navbar.Toggle id="tog-btn" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className="links"
              eventKey={1}
              as={Link}
              to="/"
              exact="true"
            >
              Home
            </Nav.Link>

            <NavDropdown
              className="links"
              title="Shop"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                className="drop"
                eventKey={2}
                as={Link}
                to="/women"
              >
                Women
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="drop"
                eventKey={3}
                as={Link}
                to="/men"
              >
                Men
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="drop"
                eventKey={4}
                as={Link}
                to="/children"
              >
                Children
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="drop"
                eventKey={5}
                as={Link}
                to="/sales"
              >
                Sales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="links" eventKey={6} as={Link} to="/about">
              About us
            </Nav.Link>
            <Nav.Link className="links" eventKey={7} as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link className="links" eventKey={8} as={Link} to="/register">
              Registration
            </Nav.Link>

            <Nav.Link className="links" eventKey={9} as={Link} to="/login">
              Login
            </Nav.Link>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Dashboard;
