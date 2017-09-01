import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// import 'babel-polyfill';

import routes from './routes';
import store from './store';

const Root = () =>
  <Provider store={store}>
    {routes}
  </Provider>;

render(routes, document.getElementById('root'));
