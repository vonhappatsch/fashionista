import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from '../actions/types';

const initialState = {
  wishlist: {}
}

export const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: {...state.wishlist, [action.payload.product.id]: action.payload}
      }
    }
    case REMOVE_FROM_WISHLIST: {
      const {[action.payload.product.id]: deleted, ...wishlist} = state.wishlist;
      return {
        ...state,
        wishlist: wishlist
      }
    }
    default:
      return state;
  }
};

export default wishlist;