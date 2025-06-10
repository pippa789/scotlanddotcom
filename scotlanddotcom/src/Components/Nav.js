import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: black;
  border-bottom:  solid 1px;
  color:white;
  font-family: 'Poppins', sans-serif;
  padding: 0 20px;
  z-index: 5;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 20px;
  @media (max-width: 480px) {
    display: none;        // Hide on small screens
  }
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items:space-around;
  position: fixed;
  top: 70px; // Adjust based on NavBar height
  right: 0;
  background-color: black;
  width: 200px;
  height: 100vh;
  padding: 20px;
  z-index: 100;
  text-decoration:none;
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
      padding: '0 20px', // Adjusted padding
    };
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(( )=> {
    setIsMobileMenuOpen(false)
    },[location])

  return (
    <NavBar>
      <div className="h-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaTimes style={{ color: 'white', fontSize: '24px' }} />
        ) : (
          <FaBars style={{ color: 'white', fontSize: '24px' }} />
        )}
      </div>

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

      {isMobileMenuOpen && (
        <MobileNavLinks>
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
        </MobileNavLinks>
      )}
    </NavBar>
  );
}

export default Nav;