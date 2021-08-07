import Image from 'next/image';

import styles from './styles.module.css';
import Clickable from '../clickable';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className={styles.footer} id="sticky-footer">
    <div className={styles.footerWrapper}>
      <div className={styles.leftPanel}>
        <Image width="203" height="61" src="/logo.png" alt="logo" />
        <ul className={styles.contactDetails}>
          <li><strong>AERODYNAMIC PTY LTD</strong></li>
          <li>+61 3 8331 2900</li>
          <li>31 McGregors Drive</li>
          <li>Keilor Park VIC 3042 </li>
          <li>AUSTRALIA</li>
        </ul>
      </div>
      <div className={styles.rightPanel}>
        <h3>Site links</h3>
        <ul className={styles.siteLinks}>
          <li><Clickable to="/">Home</Clickable></li>
          <li><Clickable to="/contact">Contact us</Clickable></li>
        </ul>
        {/* <div className={styles.subscriptionForm}>
          <label>Subscribe to Our Newsletter</label>
          <input type="text" placeholder="Email"/>
          <Clickable type="largeBordered" to="www.google.com">Subscribe</Clickable>
        </div> */}
      </div>
      <div className={styles.bottomPanel}>
        <p>&copy; Copyright AERODYNAMIC PTY LTD</p>
      </div>
    </div>
  </footer>
);

export default Footer;
