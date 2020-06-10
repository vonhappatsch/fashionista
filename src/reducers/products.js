import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  OUTLET,
  NEW_COLLECTION,
  SEARCH
} from '../actions/types';

const initialState = {
  products: [],
  filteredProducts: [],
  error: ''
}

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload
      }
    }
    case FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case OUTLET: {
      return {
        ...state,
        filteredProducts: action.payload.productsOnSale
      }
    }
    case NEW_COLLECTION: {
      return {
        ...state,
        filteredProducts: action.payload.fullPrice
      }
    }
    case SEARCH: {
      return {
        ...state,
        filteredProducts: action.payload.searchResult
      }
    }
    default:
      return state;
  }
};

export default catalog;