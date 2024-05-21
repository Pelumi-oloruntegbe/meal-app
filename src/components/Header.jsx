import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => {
        setExpanded(!expanded);
    };

  return (
    <div className='position-sticky top-0'> 
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/" className='text-decoration-none text-success fw-bold'>The Meal Place</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
             {expanded ? <IoMdClose size={28}/> : <GiHamburgerMenu size={28}/> }
             </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='/' className='text-decorartion-none text-success fw-light nav-link'>HOME</Link>
              <Link to='/about' className='text-decorartion-none text-success fw-light nav-link'>ABOUT</Link>
              <Link to='/contact' className='text-decorartion-none text-success fw-light nav-link'>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header
