import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import './style.css';

// pensar a lógica dos numeros dos likes e produtos aparecendo do lado dos icons
// ver como esse aqui nao ficar muito grande (e mais reutilizavel) (talvez fazer um component pros icons)

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <h1 className="header__content__logo__item">Fashionista</h1>
        </Link>

        <div className="header__content__icons">
          <span className="header__content__icons__items">
            <FavoriteBorderOutlinedIcon />
            <p className="header__content__icons__items__value">0</p>
          </span>
          <span className="header__content__icons__items">
            <ShoppingCartOutlinedIcon />
            <p className="header__content__icons__items__value">0</p>
          </span>
        </div>
      </div>

      <hr className="header__line" />

    </header>
  );
};

export default Header;