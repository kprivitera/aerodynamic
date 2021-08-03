import { map, head, isEmpty } from 'lodash/fp';
import { getClient } from "../utils/sanity";
import BlockContent from '@sanity/block-content-to-react';
import Fade from 'react-reveal/Fade';
import Head from 'next/head';

import Service from '../components/service';
import styles from '../styles/home.module.css';
import ImageCarousel from '../components/carousel';

const query = `//groq
  *[_type == "home"]{
    title,
    description,
    hero -> {
      title,
      slides[] {
        title,
        description,
        imageObject {
          caption,
          "src": image.asset -> url
        }
      }
    },
    services[] -> {
      title,
      description
    }
  }
`;

const HomePage = ({ homeData }) => {
  if (isEmpty(homeData)){
    return null;
  }
  const { description, hero: { slides }, services, title } = homeData;
  return (
    <>
      <Head>
        <title>Homepage title</title>
        <meta name="description" content="This is the page description" />
      </Head>
      <div className={styles.pageWrapper}>
        <ImageCarousel slides={slides}/>
        {/* <div className={styles.hero}>
          <h1>AeroDynamic Systems</h1>
          <h3>Slogan text goes here</h3>
        </div> */}
        <div className={styles.homeContainer}>
          <div className={styles.leftPanel}>
            <Fade duration={2000}>
              <h2>{title}</h2>
              <BlockContent blocks={description} />
            </Fade>
          </div>
          <div className={styles.servicesContainer}>
            {
              map(({ title, description }) => {
                return <Service key={title} title={title} description={description} />
              })(services)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const result = await getClient(false).fetch(query);
  const homeData = head(result);
  return {
    props: {
      homeData    
    },
  }
}