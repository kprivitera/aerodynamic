import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next'

import Article from '../../../interfaces/article';

interface SubpageProps {
  article: Article;
}

const Subpage: React.FC<SubpageProps> = ({ article }: SubpageProps) => {
  console.log('article', article);
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>This is a param: {id}</div>
      <div>This from server side props: {article.title}</div>
    </>
  );
};

export default Subpage;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`,
  );
  const article = await res.json();
  return { props: { article } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article: Article) => article?.id);
  const paths = ids.map((id: string) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
