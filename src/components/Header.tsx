import React from 'react';

import '../styles/Header.css';

import Logo from '../assets/logo.svg';

interface Props {
  BASE_URL: string
}

const Header = ({ BASE_URL }: Props) => (
  <header className="Header">
    <div className="centerWrapper">
      <a href={BASE_URL}>
        <h1>
          <Logo />
        </h1>
      </a>

      <h2>Where gifs meet!</h2>
    </div>
  </header>
);

export default Header;
