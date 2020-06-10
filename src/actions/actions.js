import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  OUTLET,
  NEW_COLLECTION,
  SEARCH
} from './types';

export const fetchProducts = () => dispatch => {
  fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    }))
    .catch(err => dispatch({
      type: FETCH_PRODUCTS_ERROR,
      payload: err
    })
  );
};

// const getProducts = () => async (dispatch, getState) => {
//   const { products } = getState().catalog;
// }


export const productsOnSale = (catalog) => (dispatch, getState) => {
  const { products } = getState().catalog;
  const onSale = products.filter(products => products.on_sale === true)

  return dispatch({
    type: OUTLET,
    payload: {
      productsOnSale: onSale
    }
  })
};

export const newCollection = () => (dispatch, getState) => {
  const { filteredProducts } = getState().catalog;
  const fullPrice = filteredProducts.filter(filteredProducts => filteredProducts.on_sale === false)

  return dispatch({
    type: NEW_COLLECTION,
    payload: {
      fullPrice: fullPrice
    }
  })
};

export const search = (e) => (dispatch, getState) => {
  const { filteredProducts } = getState().catalog;

  return dispatch({
    type: SEARCH,
    payload: {
      searchResult: filteredProducts.filter(filteredProducts => filteredProducts.name.toLowerCase().includes(e.target.value.toLowerCase()))
    }
  })
}