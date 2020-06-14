import {
  ADD_TO_CART,
  ADD_ITEMS,
  SUBTRACT_ITEMS,
  REMOVE_FROM_CART
} from '../actions/types';

const initialState = {
  cart: [],
  quantity: 0,
  total: 0
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case ADD_ITEMS: {
      return {
        ...state
      }
    }
    case SUBTRACT_ITEMS: {
      return {
        ...state,

      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    }
    default:
      return state;
  }
};

export default cart;