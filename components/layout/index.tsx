import Header from '../header';
import Footer from '../footer';
import styles from './styles.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <main className={styles.main}>{children}</main>
      <Footer>footer</Footer>
    </>
  );
};

export default Layout;

