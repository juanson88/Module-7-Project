import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <button className="footer-links">About</button>
        <button className="footer-links">Contact</button>
        <button className="footer-links">Socials</button>
        <button className="footer-links">Blog</button>
      </div>
      <div className="copyright">
        <p>&copy; "Movie Search Database" All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
