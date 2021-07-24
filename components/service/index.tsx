import Image from 'next/image'
import Fade from 'react-reveal/Fade';

import styles from './styles.module.css';

interface ServiceProps {
  title: string,
  description: string  
}

const Service = ({title, description}:ServiceProps) => {
  return (
    <Fade>
      <section className={styles.service}>
  
        <div className={styles.typeWrapper}>
          <div className={styles.iconWrapper}><Image className={styles.icon} width="38" height="46" src="/circular-arrows.svg" alt="logo" /></div>
          <h1>{title}</h1>
        </div>
        <Fade cascade left>
        <div className={styles.body}>
          <p>{description}</p>
        </div>
        </Fade>
      </section>
    </Fade>
  )
};

export default Service;