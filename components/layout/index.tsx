import Header from '../header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;

