import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; // Use NavLink for active states
import Logo from './../../../assets/images/Logo.webp'
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const location = useLocation();
  const isServicesActive = location.pathname.startsWith('/services');
  const isGenreActive = location.pathname.startsWith('/genre');

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 50px, set scrolled to true
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <BootstrapNavbar expand="lg" className={`navbar-dark custom-nav-wrapper fixed-top ${scrolled ? 'pill-scrolled' : ''}`}>
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-white">
          <div className="Nav-Logo">
            <img className='img-fluid' src={Logo} alt="Logo" />
          </div>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          {/* 
              The 'scrolled' class is added dynamically here.
              When scrolled is true, it adds 'pill-scrolled' class.
          */}
          <Nav className={`mx-auto glass-nav-container `}>
            <Nav.Link as={NavLink} to="/" end>HOME</Nav.Link>

            <NavDropdown
              title="SERVICES"
              id="services-dropdown"
              show={showServices}
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              className={isServicesActive ? "active" : ""}
            >
              <NavDropdown.Item as={NavLink} to="/services/ebook-cover-design">eBook Cover Design</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/ebook-editing">eBook Editing</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/ebook-writng">eBook Writng</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/ebook-publishing">eBook Publishing</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/ebook-marketing">eBook Marketing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="GENRE"
              id="basic-nav-dropdown"
              show={showGenre}
              onMouseEnter={()=>setShowGenre(true)}
              onMouseLeave={()=>setShowGenre(false)}
              className={isGenreActive ? "active" : ""}
            >
              <NavDropdown.Item as={NavLink} to="/genre/autobiography">Autobiography</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/business-book">Business Book</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/childrens-book">Children’s Book</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/fiction">Fiction</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/mystery-book">Mystery Book</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/non-fiction">Non Fiction</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/novel">Novel</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/genre/self-help">Self Help</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about">ABOUT US</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us">CONTACT US</Nav.Link>
          </Nav>

          <div className="d-flex social-icons ms-auto">
            <a href="#"><i className="ri-linkedin-fill"></i></a>
            <a href="#"><i className="ri-twitter-x-line"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-facebook-fill"></i></a>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;