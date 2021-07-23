import Header from '../header';
import Footer from '../footer';
import styles from './styles.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

