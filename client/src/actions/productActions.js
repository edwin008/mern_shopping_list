import axios from 'axios';
import { GRAB_ITEMS } from './types';

export const grabItems = () => async dispatch => {
  try {
    const response = await axios("api/products/");
    console.log(response.data);
    // console.log('Edwin');
    dispatch({
      type: GRAB_ITEMS,
      payload: response.data.product
    });
  } catch (error) {
    console.log(error);
  }
};