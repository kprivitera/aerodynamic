import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Clickable from '../clickable';
import constants from '../../constants';
import styles from './styles.module.css';

const { ROUTES } = constants;

const Header = () => {
  const [show, setShow] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const menuClickedHandler = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

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

  const menuIcon = hamburgerClicked ? faTimes : faBars; 

  return (
    <nav className={classNames({[styles.hidden]: show }, styles.navbarItems)}>
      <h1 className={styles.navbarLogo}><Image width="203" height="61" src="/logo.png" alt="logo" /></h1>
      <div className={styles.menuIcon} onClick={menuClickedHandler}>
        <FontAwesomeIcon icon={menuIcon} />
      </div>
      <ul className={classNames(styles.navMenu, {[styles.menuActive]: hamburgerClicked },)}>
        <li><a className={styles.navLinks} href="/contact"/>Contact</li>
      </ul>
      <Clickable className={styles.contactButton} to="/contact" type="largeBordered">Contact</Clickable>
    </nav>
  );
};
export default Header;
