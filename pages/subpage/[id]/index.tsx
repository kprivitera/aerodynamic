
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'


import Article from '../../../interfaces/article';

interface SubpageProps {
  article: Article
};

const Subpage: React.FC<SubpageProps> = ({ article }: SubpageProps) => {
  console.log('article', article)
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`);
  const article = await res.json();
  return { props: { article } };
};