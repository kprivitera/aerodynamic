import Header from '../header';
import Footer from '../footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <main>{children}</main>
      <Footer>footer</Footer>
    </>
  );
};

export default Layout;

