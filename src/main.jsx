import React from 'react';
import { render } from 'react-dom';
import 'babel-loader';
import 'babel-polyfill';

import Login from './scenes/Login';

render(<Login title="Hello world!" />, document.getElementById('root'));
