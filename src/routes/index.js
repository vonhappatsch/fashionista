import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home/Home';
import Product from '../containers/Product/Product';
import Cart from '../containers/Cart/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/product/:name" component={Product} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;