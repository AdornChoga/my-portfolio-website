import React from 'react';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarMobile.css';
import NavigationBar from '../navigation-bar/NavigationBar';

const NavbarMobile = () => (
  <>
    <Navbar key="lg" bg="light" expand="lg" className="mb-3 fixed-top navbar">
      <Container fluid>
        <Link to="/about-me" className="my-name">Adorn Choga</Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="bg-light" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton className="bg-dark close-button-cont" />
          <Offcanvas.Body className="bg-dark">
            <NavigationBar />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
);

export default NavbarMobile;
