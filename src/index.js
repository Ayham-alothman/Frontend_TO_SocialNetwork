import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Store from './GlobalState/Store.js';
import { Provider } from 'react-redux';
import {persistor} from './GlobalState/Store.js';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
//<React.StrictMode>
//</React.StrictMode>