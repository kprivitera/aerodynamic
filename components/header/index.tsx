import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image'

import styles from './styles.module.css';

const Header = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    const isHidden = window.scrollY > 100 ? true : false;
    setShow(isHidden);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    // <Navbar className={classNames({[styles.hidden]: show }, styles.navbar)} expand="lg" fixed="top">
    <Navbar expand="lg" fixed="top">
      <Container>
        {/* <Navbar.Brand href="#home"><Image width="203" height="61" src="/logo.png" alt="logo" /></Navbar.Brand> */}
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
