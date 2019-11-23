import axios from 'axios';
import { GRAB_ITEMS, ADD_SIZE } from './types';

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

export const addSize = (item, prodSize) => ({
  type: ADD_SIZE,
  payload: item,
  size: prodSize
});