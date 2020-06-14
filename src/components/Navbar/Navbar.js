import React from 'react';

import './style.css';
import Button from '../Button';
import SearchBar from '../SearchBar';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <SearchBar
          onChange={props.onChange}
        />
        <div className="navbar__wrapper__buttons">
          <Button
            className="navbar__wrapper__buttons_item"
            onClick={props.getProducts}
          >
            Home
          </Button>
          <Button
            className="navbar__wrapper__buttons_item"
            onClick={props.newCollection}
          >
            Nova Coleção
          </Button>
          <Button
            className="navbar__wrapper__buttons_item--sale"
            onClick={props.onSale}
          >
            Outlet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;