import React from 'react';

import '../styles/Header.css';

import Logo from '../assets/logo.svg';

const Header = () => (
  <header className="Header">
    <div className="centerWrapper">
      <a href="/">
        <h1>
          <Logo alt="Gifter" />
        </h1>
      </a>

      <h2>Where gifs meet!</h2>
    </div>
  </header>
);

export default Header;
