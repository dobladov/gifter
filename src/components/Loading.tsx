import React from 'react';

import '../styles/Loading.css';

interface Props {
  className: string
}

const Loading = ({ className }: Props) => (
  <div
    className={`Loading${className ? ` ${className}` : ''}`}
  >
    <div />
    <div />
    <div />
  </div>
);

export default Loading;
