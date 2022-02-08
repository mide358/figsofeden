import React from 'react';

import Footer from '../footer/Footer';
import Nav from '../Navbar/Nav';
import '../../layout.css';

const Layout = (props) => {
  return (
    <>
      <Nav />
      <div className="main">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
