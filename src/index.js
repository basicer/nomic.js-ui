import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

