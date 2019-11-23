import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL, CLEAR_CART } from '../actions/types';

const initialState = [];

const ShoppingCart_NoItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id !== CartItem._id);
const ShoppingCart_WithItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id === CartItem._id)[0];

// Remove this
// const test = (ShoppingCart) => { return ShoppingCart.filter(CartProduct => CartProduct._id === "5dc458065246abff1f00bc2f")[0]; }

const AddCart = (ShoppingCart, CartItem) => {
  const cartProduct = ShoppingCart_WithItem(ShoppingCart, CartItem);
  return cartProduct === undefined
    ? [...ShoppingCart_NoItem(ShoppingCart, CartItem), { ...CartItem, amount: 1 }]
    : [...ShoppingCart_NoItem(ShoppingCart, CartItem), { ...cartProduct, amount: cartProduct.amount + 1 }]
};

const RemoveCart = (ShoppingCart, CartItem) => {
  return CartItem.amount === 1 ? [...ShoppingCart_NoItem(ShoppingCart, CartItem)]
    : [...ShoppingCart_NoItem(ShoppingCart, CartItem), { ...CartItem, amount: CartItem.amount - 1 }]
};

const RemoveCartTotal = (ShoppingCart, CartItem) => {
  return [...ShoppingCart_NoItem(ShoppingCart, CartItem)]
}

const ClearCart = (ShoppingCart) => {
  return ShoppingCart = initialState;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return AddCart(state, action.payload);
    case REMOVE_CART:
      return RemoveCart(state, action.payload);
    case REMOVE_CART_TOTAL:
      return RemoveCartTotal(state, action.payload);
    case CLEAR_CART:
      return ClearCart(state)
    default:
      return state;
  }
};