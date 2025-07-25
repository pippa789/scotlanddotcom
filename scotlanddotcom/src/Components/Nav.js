import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import logoPng from '../Assets/logo.png'


const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Adjusted for logo on left, nav on right */
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: black;
  border-bottom: solid 1px;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0 40px; /* More padding on desktop */
  z-index: 5;

  @media (max-width: 480px) {
    padding: 0 20px; /* Less padding on mobile */
    justify-content: space-between; /* Keep space-between for icon and potential mobile logo */
  }
`;

const LogoContainer = styled.div`
  display: flex; /* Use flex to align SVG and text if both are present */
  align-items: center;
  cursor: pointer; /* If you want the logo to be clickable (e.g., go to home) */

  /* Hide logo on mobile if you want only hamburger on left */
  @media (max-width: 480px) {
    /* You can hide it completely, or make it smaller/centered */
    /* display: none; */
    /* Or adjust size/position for mobile */
    font-size: 1.2em; /* Example: smaller text logo on mobile */
  }
`;

const NavLinks = styled.ul`
  display: flex; /* Default: visible on desktop */
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 20px;

  @media (max-width: 480px) {
    display: none; /* Hide on small screens */
  }
`;

const MobileNavIconContainer = styled.div`
  /* This container holds the hamburger icon */
  display: none; /* Default: hide on desktop */

  @media (max-width: 480px) {
    display: block; /* Show on small screens */
    cursor: pointer; /* Indicate it's clickable */
  }
`;

const MobileNavLinks =  styled.ul.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})` 
//  above code removes isOpen from the dom
  display: none; /* Default: hide on desktop */
  flex-direction: column;
  align-items: center; /* Center items in the mobile menu */
  position: fixed;
  top: 70px; /* Adjust based on NavBar height */
  right: ${({ isOpen }) => (isOpen ? '0' : '-200px')}; /* Slide in/out effect */
  background-color: black;
  width: 200px;
  height: calc(100vh - 70px); /* Fill remaining viewport height */
  padding: 20px;
  z-index: 100;
  list-style: none; /* Remove list bullets */
  transition: right 0.3s ease-in-out; /* Smooth slide transition */
  box-shadow: -5px 0 15px rgba(0,0,0,0.3); /* Subtle shadow when open */

  @media (max-width: 480px) {
    display: flex; /* Show only on small screens when 'isOpen' is true */
  }

  /* Style for individual mobile nav links */
  li {
    margin: 15px 0; /* Space out mobile menu items */
  }
`;

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const LinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'grey' : 'white',
      listStyle: 'none',
      textDecoration: 'none',
      padding: '0 20px',
    };
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <NavBar>
      {/* Logo Section (always visible, but can be responsive) */}
      <LogoContainer>
        {/* CORRECTED: Pass viewBox as a prop and put path as children */}
        <img
                src={logoPng} // Use the imported PNG directly as the source
                alt="Your Company Logo" // Always add descriptive alt text for accessibility
                className="site-logo" // Add a class for styling (e.g., width, height)
            />
      </LogoContainer>

      {/* Hamburger Icon Container (for mobile only, positioned on the right) */}
      <MobileNavIconContainer onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaTimes style={{ color: 'white', fontSize: '24px' }} />
        ) : (
          <FaBars style={{ color: 'white', fontSize: '24px' }} />
        )}
      </MobileNavIconContainer>

      {/* Desktop Navigation Links (hidden on mobile) */}
      <NavLinks>
        <li>
          <NavLink style={LinkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={LinkStyle} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={LinkStyle} to="/Gallery">
            Gallery
          </NavLink>
        </li>
      </NavLinks>

      {/* Mobile Navigation Menu (slides in from right on mobile) */}
      <MobileNavLinks isOpen={isMobileMenuOpen}>
        <li>
          <NavLink style={LinkStyle} to="/Home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={LinkStyle} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={LinkStyle} to="/Gallery">
            Gallery
          </NavLink>
        </li>
      </MobileNavLinks>
    </NavBar>
  );
}

export default Nav;
