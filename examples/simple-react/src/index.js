import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const appContainer = document.getElementById('app');

if (appContainer) {
  ReactDOM.render(<App />, appContainer);
}
