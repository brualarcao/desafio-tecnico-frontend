import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../hooks/AuthContext';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/home" component={Home} />
  </Switch>
);

export default Routes;
