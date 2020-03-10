import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/logo.svg';
const Header = ({ BASE_URL }) => (React.createElement("header", { className: "Header" },
    React.createElement("div", { className: "centerWrapper" },
        React.createElement("a", { href: BASE_URL },
            React.createElement("h1", null,
                React.createElement(Logo, null))),
        React.createElement("h2", null, "Where gifs meet!"))));
export default Header;
