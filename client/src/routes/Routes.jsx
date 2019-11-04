import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShoppingCart from '../components/cart/ShoppingCart';
import ProductPage from '../components/product/ProductPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/productPage" component={ProductPage} exact></Route>
      <Route path="/cart" component={ShoppingCart} exact></Route>
    </Switch>
  )
};

export default Routes;