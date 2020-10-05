import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import * as auth from './auth'

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <Navbar expand="lg" fixed="top" expanded={expanded}>
        <Navbar.Brand href="#/">Newsy</Navbar.Brand>
        <Navbar.Toggle
          area-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#/weather" onClick={() => setExpanded(false)}>
              Weather
            </Nav.Link>
            {!auth.isLoggedIn() ? (
              <Nav.Link href="#/signin">Sign In</Nav.Link>
            ) : null}
            {auth.isLoggedIn() ? (
              <Nav.Link href="/sign" onClick={auth.logout}>
                Logout
              </Nav.Link>
            ) : null}

            {auth.isLoggedIn() ? (
              <Nav.Link>{auth.getUserFirstName()}</Nav.Link>
            ) : null}
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://benjambo.github.io/portfolio/#/"
                onClick={() => setExpanded(false)}
              >
                Benjamin S.
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Jepu32"
                onClick={() => setExpanded(false)}
              >
                Jere S.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavigationBar
