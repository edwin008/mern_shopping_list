import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import productReducers from './productReducers';
import shoppingCartReducers from './shoppingCartReducer';

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  products: productReducers,
  cart: shoppingCartReducers
});
