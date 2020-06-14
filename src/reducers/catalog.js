import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  GET_PRODUCT,
  OUTLET,
  NEW_COLLECTION,
  SEARCH
} from '../actions/types';

const initialState = {
  products: [],
  filteredProducts: [],
  keyword: '',
  onSale: null,
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
    case GET_PRODUCT: {
      return {
        ...state,
        product: action.payload
      }
    }
    case OUTLET: {
      return {
        ...state,
        onSale: action.payload.onSale,
        filteredProducts: action.payload.productsOnSale
      }
    }
    case NEW_COLLECTION: {
      return {
        ...state,
        onSale: action.payload.onSale,
        filteredProducts: action.payload.fullPrice
      }
    }
    case SEARCH: {
      return {
        ...state,
        keyword: action.payload.keyword,
        filteredProducts: action.payload.searchResult
      }
    }
    default:
      return state;
  }
};

export default catalog;