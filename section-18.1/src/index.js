import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider }from 'react-redux';

import './index.css';
import App from './App';
// import our store
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Wrap root component with Provider component from react-redux.
root.render(<Provider store={store}><App /></Provider>);
