import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ShoppingCart from '../components/cart/ShoppingCart';
import ProductPage from '../components/product/ProductPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ProductPage} exact></Route>
        <Route path="/cart" component={ShoppingCart} exact></Route>
      </Switch>
    </Router>
  )
};

export default Routes;