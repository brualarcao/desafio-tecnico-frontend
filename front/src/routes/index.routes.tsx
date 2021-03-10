import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/home" component={Home} />
  </BrowserRouter>
);

export default Routes;
