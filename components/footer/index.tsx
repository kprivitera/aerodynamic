import Image from 'next/image';

import styles from './styles.module.css';
import Clickable from '../clickable';

const Footer = () => (
  <footer className={styles.footerWrapper} id="sticky-footer">
    <div className={styles.leftPanel}>
      <ul className={styles.contactDetails}>
        <li>AERODYNAMIC PTY LTD</li>
        <li>+61 3 8331 2900</li>
        <li>31 McGregors Drive</li>
        <li>Keilor Park VIC 3042 </li>
        <li>AUSTRALIA</li>
      </ul>
      <Image width="203" height="61" src="/logo.png" alt="logo" />
    </div>
    <div className={styles.rightPanel}>
      <p>Subscribe to our newsletter</p>
      <Clickable type="largeBordered" to="www.google.com">click me</Clickable>
    </div>
  </footer>
);

export default Footer;
