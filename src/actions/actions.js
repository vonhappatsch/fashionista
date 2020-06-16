import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  OUTLET,
  NEW_COLLECTION,
  SEARCH,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEMS,
  SUBTRACT_ITEMS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
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


export const productsOnSale = () => (dispatch, getState) => {
  const { products, keyword, onSale } = getState().catalog;
  const filtered = !keyword ? products : products.filter(product => product.name.toLowerCase().includes(keyword));
  const productsOnSale = onSale ? filtered : filtered.filter(product => product.on_sale === true);

  return dispatch({
    type: OUTLET,
    payload: {
      onSale: onSale ? null : true,
      productsOnSale: productsOnSale
    }
  })
};

export const newCollection = () => (dispatch, getState) => {
  const { products, keyword, onSale } = getState().catalog;
  const filtered = !keyword ? products : products.filter(product => product.name.toLowerCase().includes(keyword));
  const fullPrice = onSale === false ? filtered : filtered.filter(product => product.on_sale === false);

  return dispatch({
    type: NEW_COLLECTION,
    payload: {
      onSale: onSale === false ? null : false,
      fullPrice: fullPrice
    }
  })
};

export const search = (keyword) => (dispatch, getState) => {
  const { products, onSale } = getState().catalog;
  const filtered = !keyword ? products : products.filter(product => product.name.toLowerCase().includes(keyword));
  const searchResult = onSale === null ? filtered : filtered.filter(product => product.on_sale === onSale);

  return dispatch({
    type: SEARCH,
    payload: {
      keyword: keyword,
      searchResult: searchResult
    }
  })
};

export const addToCart = (product, size) => (dispatch) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: {
      product: product,
      size: size,
      quantity: 1
    }
  })
};

export const removeFromCart = (product) => (dispatch) => {
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      product: product
    }
  })
};

export const addQuantity = (id) => (dispatch) => {
  return dispatch({
    type: ADD_ITEMS,
    payload: id
  })
};

export const subtractQuantity = (id) => (dispatch) => {
  return dispatch({
    type: SUBTRACT_ITEMS,
    payload: id
  })
};

export const addToWishlist = (product) => (dispatch) => {
  return dispatch({
    type: ADD_TO_WISHLIST,
    payload: {
      product: product
    }
  })
};

export const removeFromWishlist = (product) => (dispatch) => {
  return dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: {
      product: product
    }
  })
};