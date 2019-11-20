import { ADD_ORDER } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        order: [action.payload, state]
      };
    default:
      return state;
  }
};