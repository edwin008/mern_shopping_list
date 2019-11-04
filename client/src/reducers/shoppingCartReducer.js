import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL } from '../actions/types';

const initialState = [];

const ShoppingCart_NoItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id !== CartItem._id);
const ShoppingCart_WithItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id === CartItem._id)[0];

const AddCart = (ShoppingCart, CartItem) => {
  const product = ShoppingCart_WithItem(ShoppingCart, CartItem);
  return product === undefined ? [...ShoppingCart_NoItem(ShoppingCart, CartItem), { ...product, amount: 1 }]
    : [...ShoppingCart_WithItem(ShoppingCart, CartItem), { ...product, amount: product.amount + 1 }]
};

const RemoveCart = (ShoppingCart, CartItem) => {
  return CartItem.amount === 1 ? [...ShoppingCart_NoItem(ShoppingCart, CartItem)]
    : [...ShoppingCart_NoItem(ShoppingCart, CartItem), { ...CartItem, amount: CartItem.amount - 1 }]
};

const RemoveCartTotal = (ShoppingCart, CartItem) => {
  return [...ShoppingCart_NoItem(ShoppingCart, CartItem)]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return AddCart(state, action.payload);
    case REMOVE_CART:
      return RemoveCart(state, action.payload);
    case REMOVE_CART_TOTAL:
      return RemoveCartTotal(state, action.payload);
    default:
      return state;
  }
};