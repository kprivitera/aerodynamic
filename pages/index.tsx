import Head from 'next/head';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

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
      <div className={styles.pageWrapper}>
        <div className={styles.hero}>
          <h1>AeroDynamic Systems</h1>
          <h3>Slogan text goes here</h3>
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.leftPanel}>
            <Fade duration={2000}>
              <h2>ABOUT AERODYNAMIC</h2>
              <p>Aerodynamic is an avionics equipment service provider focused on providing solutions for commercial and business jet operators, MRO’s and military customers. With over 30 year’s experience in the aviation industry Aerodynamic is the leading avionics service provider for major airlines and repair facilities globally.</p>
            </Fade>
          </div>
          <div className={styles.servicesContainer}>
            <Service title="Maintenance, AOG and incident readout service" description={['Aircraft operators require aircrafts Flight Data and Cockpit Voice Recorders to be analysed annually.  Aerodynamics readout service provides customers with a secure, efficient and personalized service. We work closely with each customer to tailor a program that meets their requirements such as downloading of the Flight data or cockpit voice recorder, maintenance readouts (FDR, CVR and DLR), 24/7 AOG coverage and incident analysis solutions.  Aerodynamic readout service is compliant in accordance with the regulatory authorities mandates for Flight Data and Cockpit Voice recorders.']}/>
            <Service title="Flight data monitoring" description={[
              'Flight Data Monitoring (FDM) programmes assist an operator to identify, quantify, assess and address operational risks. Safety Regulation Groups have helped develop and support such systems and used FDM information to support a range of airworthiness and operational safety tasks.', 
              'Aerodynamics provides a hosted FDM service which allows 24hr access to the software when required from anywhere. Remote access allows the user to perform the same tasks as an in-house system without the hassle of maintaining the appropriate licences and updates.',
              'We have an experienced team of Flight Data analysts on hand that maintain your system and perform the day to day FDM administration processes. This allows users to focus on their roles and increase productivity. Our team are available to provide support\training when required.']}/>
            <Service title="Avionics equipment repair and recertification" description={['Aerodynamic is a CASA &amp; EASA approved repair facility with the capability to repair and recertify airborne and ground support avionics equipment such as Flight Data and Cockpit voice recorders.']}/>
            <Service title="Quality assurance" description={['Aerodynamic quality system is the core value of our company. With the importance of safety in the aviation industry our company works closely with the Airworthiness authorities to meet and exceed the regulations. Our staff are extensively trained and regularly audited by our quality assurance department to ensure the service we are providing our customers are second to none.']}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
