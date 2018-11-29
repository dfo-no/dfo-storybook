import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const appContainer = document.getElementById("app");
appContainer ? ReactDOM.render(<App />, appContainer) : false;