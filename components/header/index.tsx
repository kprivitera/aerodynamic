import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import constants from '../../constants';
import styles from './styles.module.css';

const { ROUTES } = constants;

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
    <Navbar className={classNames({[styles.hidden]: show }, styles.navbar)} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className={styles.logoWrapper} href={ROUTES.HOME}>
          <Image width="203" height="61" src="/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className={styles.navLinks}>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
