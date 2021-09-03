import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './Store';
import persistor from './Store';

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={false} persistor={persistor}>


      <App />
    </PersistGate>
  </Provider>

  ,
  document.getElementById('root')
);
