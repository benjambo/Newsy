import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import styled from 'styled-components'

const Styles = styled.div`
  form {
    width: auto;
  }
  button {
    margin: 1vh;
  }
  .navbar {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .navbar-default,
  .collapsed {
    border-color: white;
    background-color: white;
  }
  .navbar-default,
  .toggle {
    background-color: white;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    margin: 2vh 2vw 2vh 2vw;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-brand {
    color: white;
    &:hover {
      color: #690505;
    }
  }
  .dropdown {
    color: black;
    &:hover {
      color: #690505;
    }
  }
`

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="#/">News</Navbar.Brand>
        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/news">News</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://benjambo.github.io/portfolio/#/"
              >
                Benjamin S.
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Jepu32"
              >
                Jere S.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}
export default NavigationBar
