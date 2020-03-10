import React from 'react';
import { render } from 'react-dom';
import App from './components/App.tsx';

import 'normalize.css';

render(<App hello="world" />, document.getElementById('root'));
