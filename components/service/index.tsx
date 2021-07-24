import Image from 'next/image'
import Fade from 'react-reveal/Fade';

import styles from './styles.module.css';

const Service = () => {
  return (
    <Fade>
      <section className={styles.service}>
      <Fade cascade left>
        <div className={styles.typeWrapper}>
          <div className={styles.iconWrapper}><Image className={styles.icon} width="38" height="46" src="/circular-arrows.svg" alt="logo" /></div>
          <h1>TITLE TEXT</h1>
        </div>
        <div className={styles.body}>
          <p>Aircraft operators require aircrafts Flight Data and Cockpit Voice Recorders to be analysed annually.  Aerodynamics readout service provides customers with a secure, efficient and personalized service. We work closely with each customer to tailor a program that meets their requirements such as downloading of the Flight data or cockpit voice recorder, maintenance readouts (FDR, CVR and DLR), 24/7 AOG coverage and incident analysis solutions.  Aerodynamic readout service is compliant in accordance with the regulatory authorities mandates for Flight Data and Cockpit Voice recorders.</p>
        </div>
        </Fade>
      </section>
    </Fade>
  )
};

export default Service;