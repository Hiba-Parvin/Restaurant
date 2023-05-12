import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.png"
          width="100"
          height="45"
          className="d-inline-block align-top"
        />{' '}
        <strong className="pt-5">Spice Route</strong>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header