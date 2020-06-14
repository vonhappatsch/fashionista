import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Product from '../containers/Product';
import Cart from '../containers/Cart';
import Wishlist from '../containers/Wishlist'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/product/:code_color" component={Product} />
    <Route path="/cart" component={Cart} />
    <Route path="/wishlist" component={Wishlist} />
  </Switch>
);

export default Routes;