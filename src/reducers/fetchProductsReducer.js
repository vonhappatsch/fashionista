import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR
} from '../actions/types';

const initialState = {
  products: [],
  error: ''
}

const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      }
    }
    case FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
};

export default fetchProductsReducer;