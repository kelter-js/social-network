import Header from "../header/HeaderContainer";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
