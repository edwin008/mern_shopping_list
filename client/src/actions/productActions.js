import axios from 'axios';
import { GRAB_ITEMS } from './types';

export const grabItems = () => async dispatch => {
  try {
    const response = await axios("api/products/");
    dispatch({
      type: GRAB_ITEMS,
      payload: response.data.products
    });
  } catch (error) {
    console.log(error);
  }
};