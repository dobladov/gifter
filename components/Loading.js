import React from 'react';
import '../styles/Loading.css';
const Loading = ({ className }) => (React.createElement("div", { className: `Loading${className ? ` ${className}` : ''}` },
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null)));
export default Loading;
