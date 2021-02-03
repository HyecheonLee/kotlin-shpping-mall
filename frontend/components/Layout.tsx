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
      <div className="bg-white d-flex min-vh-100">
        <section className="container" style={{padding: "100px 30px"}}>
          {children}
        </section>
      </div>
      <Footer/>
      <Popup/>
    </>
  );
};

export default Layout;