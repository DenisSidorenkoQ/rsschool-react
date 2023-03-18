import React from 'react';
import { Link } from 'react-router-dom';
import './Header';

export const Header = () => {
  return (
    <div className="header-box">
      <ul>
        <div>
          <Link className="header-link" to="/main">
            Main
          </Link>
        </div>
        <div>
          <Link className="header-link" to="/about-us">
            About Us
          </Link>
        </div>
      </ul>
    </div>
  );
};
