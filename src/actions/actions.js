import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  OUTLET,
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
//   const { products } = getState().products;
// }


export const productsOnSale = (catalog) => (dispatch, getState) => {
  const { products } = getState().catalog;
  const onSale = products.filter(products => products.on_sale === true)
  const regPrice = products.filter(products => products.on_sale === false)

  return dispatch({
    type: OUTLET,
    payload: {
      productsOnSale: onSale,
      regProducts: regPrice
    }
  })
};

export const search = (catalog, e) => (dispatch, getState) => {
  const { products } = getState().catalog;
  return dispatch({
    type: SEARCH,
    payload: {
      filteredProducts: products.filter(products => products.name.toLowerCase().includes(e.target.value.toLowerCase()))
    }
  })
}