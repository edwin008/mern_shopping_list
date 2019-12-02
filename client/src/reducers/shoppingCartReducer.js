import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL, CLEAR_CART } from '../actions/types';

const initialState = [];

// const ShoppingCart_NoItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id !== CartItem._id);
// const ShoppingCart_NoItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id !== CartItem._id);       //cartWithoutItem
// const ShoppingCart_WithItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id === CartItem._id);  //itemInCart
const ShoppingCart_NoItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id !== CartItem._id);       //cartWithoutItem
const ShoppingCart_IDMatchSizeNoMatch = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id === CartItem._id && CartProduct.size !== CartItem.size);
const ShoppingCart_WithItem = (ShoppingCart, CartItem) => ShoppingCart.filter(CartProduct => CartProduct._id === CartItem._id && CartProduct.size === CartItem.size)[0];  //itemInCart

// const itemInCartBySize = (itemsInShoppingCart, itemInQuestion) => {
//   for (let i = 0; i < itemsInShoppingCart.length; i++) {
//     let inShoppingCartSize = itemsInShoppingCart.size;
//     let inQuestionSize = itemInQuestion.size;
//     for (let j = 0; inShoppingCartSize.length; j++) {
//       if (inShoppingCartSize[j] < inQuestionSize[j]) { 
//         itemsInShoppingCart[i].amount = inQuestionSize[j];
//         break;
//       }
//     }
//   }
// };
// const nonMatchingSize_itemInCart = (itemsInShoppingCart, itemInQuestion) => itemsInShoppingCart.filter(itemsInCart => itemsInCart.size !== itemInQuestion.size);
// const itemInCartBySize = (itemsInShoppingCart, itemInQuestion) => itemsInShoppingCart.filter(itemsInCart => itemsInCart.size === itemInQuestion.size)[0];

const AddCart = (ShoppingCart, CartItem) => {
  const cartProduct = ShoppingCart_WithItem(ShoppingCart, CartItem);
  console.log("PRINTING THE CART PRODUCT:" + JSON.stringify(cartProduct));
  console.log("PRINTING THE CARTITEM: " + JSON.stringify(CartItem));
  // console.log("SHOPPING CART CONSOLE LOG:" + JSON.stringify(ShoppingCart_NoItem(ShoppingCart, CartItem)));
  // const cartProduct = itemInCartBySize(ShoppingCart_WithItem(ShoppingCart, CartItem), CartItem);
  return cartProduct === undefined
    ? [...ShoppingCart_NoItem(ShoppingCart, CartItem), ...ShoppingCart_IDMatchSizeNoMatch(ShoppingCart, CartItem), { ...CartItem, amount: 1 }]
    // ? [...ShoppingCart_NoItem(ShoppingCart, CartItem), nonMatchingSize_itemInCart(ShoppingCart_WithItem(ShoppingCart, CartItem)), { ...CartItem, amount: 1 }]
    : [...ShoppingCart_NoItem(ShoppingCart, CartItem), ...ShoppingCart_IDMatchSizeNoMatch(ShoppingCart, CartItem), { ...cartProduct, amount: cartProduct.amount + 1 }]
  // : [...ShoppingCart_NoItem(ShoppingCart, CartItem), nonMatchingSize_itemInCart(ShoppingCart_WithItem(ShoppingCart, CartItem)), { ...cartProduct, amount: cartProduct.amount + 1 }]
};

const RemoveCart = (ShoppingCart, CartItem) => {
  return CartItem.amount === 1
    ? [...ShoppingCart_NoItem(ShoppingCart, CartItem), ...ShoppingCart_IDMatchSizeNoMatch(ShoppingCart, CartItem)]
    // ? [...ShoppingCart_NoItem(ShoppingCart, CartItem), nonMatchingSize_itemInCart(ShoppingCart_NoItem(ShoppingCart, CartItem))]
    : [...ShoppingCart_NoItem(ShoppingCart, CartItem), ...ShoppingCart_IDMatchSizeNoMatch(ShoppingCart, CartItem), { ...CartItem, amount: CartItem.amount - 1 }]
  // : [...ShoppingCart_NoItem(ShoppingCart, CartItem), nonMatchingSize_itemInCart(ShoppingCart_NoItem(ShoppingCart, CartItem)), { ...CartItem, amount: CartItem.amount - 1 }]
};

const RemoveCartTotal = (ShoppingCart, CartItem) => {
  return [...ShoppingCart_NoItem(ShoppingCart, CartItem), ...ShoppingCart_IDMatchSizeNoMatch(ShoppingCart, CartItem)]
  // return [...ShoppingCart_NoItem(ShoppingCart, CartItem), nonMatchingSize_itemInCart(ShoppingCart_NoItem(ShoppingCart, CartItem))]
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