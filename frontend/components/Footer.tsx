import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2020 Copyright:<a className="text-dark" href="https://mdbootstrap.com/">Hyecheon</a>
      </div>
    </footer>
  );
};

export default Footer;