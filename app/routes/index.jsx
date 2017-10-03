import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Wrapper from '../components/Wrapper';
import Welcome from '../scenes/Welcome';

export default (
  <Router>
    <Wrapper>
      <Switch>
        <Route path="/" component={Welcome} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Wrapper>
  </Router>
);
