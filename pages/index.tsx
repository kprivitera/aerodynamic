import Head from 'next/head';
import { useEffect } from 'react';

import Service from '../components/service';
import styles from '../styles/home.module.css';

const HomePage = () => {
  useEffect(() => {
    fetch('/api/contact', {
      method: 'post',
    });
  }, [])
  return (
    <>
      <Head>
        <title>Homepage title</title>
        <meta name="description" content="This is the page description" />
      </Head>
      <div className={styles.hero}>
        <h1>Aerodynamic systems</h1>
        <h3>Slogan</h3>
      </div>
      <div className={styles.homeContainer}>
        <div className={styles.leftPanel}>
          <h2>ABOUT AERODYNAMIC</h2>
          <p>Aerodynamic is an avionics equipment service provider focused on providing solutions for commercial and business jet operators, MRO’s and military customers. With over 30 year’s experience in the aviation industry Aerodynamic is the leading avionics service provider for major airlines and repair facilities globally.</p>
        </div>
        <div className={styles.servicesContainer}>
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
 
    </>
  );
};

export default HomePage;
