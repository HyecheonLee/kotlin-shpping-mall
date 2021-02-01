import React, { ReactNode } from 'react';
import Header from "./Header";
import Popup from "./Popup";

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <p>Footer</p>
      <Popup/>
    </>
  );
};

export default Layout;