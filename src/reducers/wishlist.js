import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from '../actions/types';

const initialState = {
  like: false,
  wishlist: [],
  total: 0
}

export const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      }
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,

      }
    }
    default:
      return state;
  }
};

export default wishlist;