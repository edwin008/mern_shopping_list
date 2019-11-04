import { GRAB_ITEMS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GRAB_ITEMS:
      return action.payload;
    default:
      return state;
  }
};