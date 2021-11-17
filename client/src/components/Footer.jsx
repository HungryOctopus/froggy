import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="bg-green">
      <Link to="/about" className="nav-link">
        About us
      </Link>
      <Link to="/contact" className="nav-link">
        Contact us
      </Link>
    </div>
  );
};

export default Footer;
