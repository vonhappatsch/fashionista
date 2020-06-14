import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import './style.css';

const Header = () => {
  const cart = useSelector(store => store.cart.cart);
  const wishlist = useSelector(store => store.wishlist.wishlist);

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <h1 className="header__content__logo__item">Fashionista</h1>
        </Link>

        <div className="header__content__icons">
          <span className="header__content__icons__items">
            <Link to="/wishlist" className="header__content__icons__items__link">
              <FavoriteBorderOutlinedIcon />
            </Link>
            <p className="header__content__icons__items__value">
              {
                wishlist.length > 0
                  ? wishlist.length
                  : 0
              }
            </p>
          </span>
          <span className="header__content__icons__items">
            <Link to="/cart" className="header__content__icons__items__link">
              <ShoppingCartOutlinedIcon />
            </Link>
            <p className="header__content__icons__items__value">
              {
                cart.length > 0
                  ? cart.length
                  : 0
              }
            </p>
          </span>
        </div>
      </div>

      <hr className="header__line" />

    </header>
  );
};

export default Header;