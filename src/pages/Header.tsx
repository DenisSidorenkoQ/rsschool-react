import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/main">Main</a>
        </li>
        <li>
          <a href="/about-us">AboutUs</a>
        </li>
      </ul>
    </nav>
  );
};
