import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL } from './types';

export const addCart = (item, i) => ({
    type: ADD_CART,
    payload: item,
    index: i
});

export const removeCart = (item, i) => ({
    type: REMOVE_CART,
    payload: item,
    index: i
});

export const removeCartTotal = (item, i) => ({
    type: REMOVE_CART_TOTAL,
    payload: item,
    index: i
});