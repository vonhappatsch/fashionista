import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  OUTLET,
  SEARCH
} from '../actions/types';

const initialState = {
  products: [],
  error: ''
}

export const catalog = (state = initialState, action) => {
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
    case OUTLET: {
      return {
        ...state,
        // funciona mas como clicar de novo KKKKKKKKKK socorr
        products: action.payload.productsOnSale,
        regProducts: action.payload.regProducts
      }
    }
    case SEARCH: {
      return {
        ...state,
        // dá cannot read property target of undefined ai meu pai
        products: action.payload.filteredItems
      }
    }
    default:
      return state;
  }
};

export default catalog;