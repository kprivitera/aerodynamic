import Head from 'next/head';

import Article from '../interfaces/article';
import ImageCarousel from '../components/carousel';

interface HomeProps {
    articles: Article[];
}

const HomePage: React.FC<HomeProps> = ({ articles }: HomeProps) => {
  console.log('articles', articles)
  return (
    <>
      <Head>
        <title>Homepage title</title>
        <meta name="description" content="This is the page description" />
      </Head>
      <ImageCarousel />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return {
    props: { 
      articles
     }
  };
};


// data fetching: we get data and pass it into component as props
// -------------------------------------------------- 
// getStaticProps: allows us to fetch at buils time
// getServerSideProps: fetch data on every request which is slower
// getStaticPaths: dynamically get paths depending on the data were fetching