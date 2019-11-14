import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL } from '../actions/types';

const initialState = [];

const ShoppingCart_NoItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id !== CartItem._id);
const ShoppingCart_WithItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id === CartItem._id)[0];

// Remove this
// const test = (ShoppingCart) => { return ShoppingCart.filter(CartProduct => CartProduct._id === "5dc458065246abff1f00bc2f")[0]; }

const AddCart = (ShoppingCart, CartItem) => {
  const cartProduct = ShoppingCart_WithItem(ShoppingCart, CartItem);
  // console.log(cartProduct);
  // // const product = ShoppingCart
  // // console.log(product)
  // // let newCart = ShoppingCart.push(product);
  // // return newCart;
  // // return ([{
  // //   "name": "Florida Gators Baseball Jersey - Louis Accent",
  // //   "value": "60",
  // //   "image": "https://i.ibb.co/tQ3h1ZF/thumbnail-IMG-8576.jpg"s
  // // }]);
  // return [...ShoppingCart, CartItem]
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