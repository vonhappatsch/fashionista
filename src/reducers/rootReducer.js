import { combineReducers } from 'redux';

import fetchProductsReducer from './fetchProductsReducer';

export default combineReducers({
  fetchProductsReducer: fetchProductsReducer
})