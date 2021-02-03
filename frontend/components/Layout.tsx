import React, { ReactNode } from 'react';
import Header from "./Header";
import Popup from "./Popup";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <section className="container">
        {children}
      </section>
      <Footer/>
      <Popup/>
    </>
  );
};

export default Layout;