import React from "react";
import { Navbar, Link, Nav, Container } from "react-bootstrap";
import logo from "./images/logo.png";
const Navbartop = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbarcolor"
      >
        <Container className="ml-5 mr-5">
          <Navbar.Brand href="#home">
            <img src={logo} style={{ width: "120px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            {/* <i
              aria-hidden="true"
              role="presentation"
              class="eicon-menu-bar"
            ></i> */}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="whitenav">Home</Nav.Link>
              <Nav.Link className="whitenav" href="#About">
                About
              </Nav.Link>{" "}
              <Nav.Link className="whitenav" href="#Play">
                P.L.A.Y
              </Nav.Link>{" "}
              <Nav.Link className="whitenav" href="#Tokenomics">
                Tokenomics
              </Nav.Link>
              <Nav.Link className="whitenav" href="#Findus">
                Find Us On
              </Nav.Link>
              <Nav.Link className="whitenav" href="#">
                Roadmap
              </Nav.Link>
              <Nav.Link className="" href="#">
                <button className="openbutton float-on-hover">Open App</button>
              </Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
