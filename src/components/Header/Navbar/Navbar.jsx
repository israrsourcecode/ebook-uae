import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the breakpoint for the offcanvas (lg means it shows on screens < 992px)
  const expandBreakpoint = 'lg';

  return (
    <BootstrapNavbar 
      expand={expandBreakpoint} 
      className={`navbar-dark custom-nav-wrapper fixed-top ${scrolled ? 'pill-scrolled' : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-white">
          <div className="Nav-Logo">
            <img className='img-fluid' src={Logo} alt="Logo" />
          </div>
        </BootstrapNavbar.Brand>

        {/* Toggle Button for Mobile */}
        <BootstrapNavbar.Toggle aria-controls={`offcanvasNavbar-expand-${expandBreakpoint}`} />

        <BootstrapNavbar.Offcanvas
          id={`offcanvasNavbar-expand-${expandBreakpoint}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expandBreakpoint}`}
          placement="end" // Menu slides from the right
          className="bg-dark text-white" // Custom styling for the slide-out
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expandBreakpoint}`}>
              
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="mx-auto glass-nav-container">
              <Nav.Link as={NavLink} to="/" end>HOME</Nav.Link>

              <NavDropdown
                title="SERVICES"
                id="services-dropdown"
                show={showServices}
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                onClick={() => setShowServices(!showServices)} // Toggle on click for mobile
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
                id="genre-dropdown"
                show={showGenre}
                onMouseEnter={() => setShowGenre(true)}
                onMouseLeave={() => setShowGenre(false)}
                onClick={() => setShowGenre(!showGenre)} // Toggle on click for mobile
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

            {/* Social Icons moved inside Offcanvas for mobile view */}
            <div className="d-flex social-icons ms-lg-auto mt-3 mt-lg-0">
              <Nav.Link href="#"><i className="ri-linkedin-fill"></i></Nav.Link>
              <Nav.Link href="#"><i className="ri-twitter-x-line"></i></Nav.Link>
              <Nav.Link href="#"><i className="ri-instagram-line"></i></Nav.Link>
              <Nav.Link href="#"><i className="ri-facebook-fill"></i></Nav.Link>
            </div>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;