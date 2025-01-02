import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import "./Header.css";
import DropMenu from "./DropMenu";
import logo from "./images/logo.png";


const Header = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="title">
          <Image src={logo} fluid /> Untitled UI
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-bar" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <div id="contain">
                  <div>
                    <div className="items">
                      <h5>Blog</h5>
                      <p>The latest industry news, updates, and info.</p>
                    </div>
                    <div className="items">
                      <h5>Features</h5>
                      <p>Discover new features and updates.</p>
                    </div>
                    <div className="items">
                      <h5>Resources</h5>
                      <p>Access comprehensive guides and tutorials.</p>
                    </div>
                  </div>
                  <div>
                    <h5>We've just released an update!</h5>
                    <p>
                      Check out the all-new dashboard.
                      <br />
                      Pages now load faster.
                    </p>
                    <Button variant="link">Dismiss</Button>
                    <Button variant="link">Changelog</Button>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources">
              <NavDropdown.Item>Resource 1</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>

          <DropMenu/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
