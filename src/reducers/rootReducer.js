import { combineReducers } from 'redux';

import catalog from './catalog';
import cart from './cart';
import wishlist from './wishlist';

export default combineReducers({
  catalog,
  cart,
  wishlist
})