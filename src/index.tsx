import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPage from './RouterPage';
import { Provider } from 'react-redux';
import store from './store';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store} >
    <RouterPage />
  </Provider>
);

