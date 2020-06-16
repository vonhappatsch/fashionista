import {
  ADD_TO_CART,
  ADD_ITEMS,
  SUBTRACT_ITEMS,
  REMOVE_FROM_CART
} from '../actions/types';

const initialState = {
  cart: {}
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: {...state.cart, [action.payload.product.id]: action.payload}
      }
    }
    case ADD_ITEMS: {
      return {
        ...state,
        cart: {...state.cart, [action.payload]: {...state.cart[action.payload], quantity: state.cart[action.payload].quantity +1}}
      }
    }
    case SUBTRACT_ITEMS: {
      return {
        ...state,
        cart: {...state.cart, [action.payload]: {...state.cart[action.payload], quantity: state.cart[action.payload].quantity -1}}
      }
    }
    case REMOVE_FROM_CART: {
      const {[action.payload.product.id]: deleted, ...cart} = state.cart;
      return {
        ...state,
        cart: cart
      }
    }
    default:
      return state;
  }
};

export default cart;