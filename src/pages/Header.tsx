import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/main">Main</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
    </ul>
  );
};
