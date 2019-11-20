import axios from 'axios';
import { ADD_ORDER } from './types';

export const addOrder = order => async dispatch => {
  try {
    const response = await axios.post("api/orders/checkout", order);
    console.log(response.data);
    dispatch({
      type: ADD_ORDER,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
