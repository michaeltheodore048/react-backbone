import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Wrapper from '../index';

const isLogin = false;

export default (
  <Router>
    <div>
      <Route path="/" component={Wrapper} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (isLogin ? <h1>Welcome</h1> : <Redirect to="/login" />)}
        />
        <Route exact path="/login" render={() => <h1>login</h1>} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </Router>
);
