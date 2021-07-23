import Image from 'next/image';

import styles from './styles.module.css';

const Footer = () => (
  <footer id="sticky-footer">
    <div className={styles.leftPanel}>
      <ul>
        <li>AERODYNAMIC PTY LTD</li>
        <li>+61 3 8331 2900</li>
        <li>31 McGregors Drive</li>
        <li>Keilor Park VIC 3042 </li>
        <li>AUSTRALIA</li>
      </ul>
      <Image width="203" height="61" src="/logo.png" alt="logo" />
    </div>
    <div className={styles.rightPanel}></div>
  </footer>
);

export default Footer;
