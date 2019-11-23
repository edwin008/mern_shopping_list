import { GRAB_ITEMS, ADD_SIZE } from '../actions/types';

const initialState = [];

const AddSize = (State, ProductItem, ProductSize) => {
  return ({ ...ProductItem, ...ProductItem.size = ProductSize });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GRAB_ITEMS:
      return action.payload;
    case ADD_SIZE:
      return AddSize(state, action.payload, action.size);
    default:
      return state;
  }
};
