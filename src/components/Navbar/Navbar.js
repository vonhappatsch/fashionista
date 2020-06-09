import React from 'react';

import './style.css';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <SearchBar
          onChange={props.onChange}
        />
        <Button
          className="navbar__wrapper__button"
          onClick={props.onSale}
        >
          Outlet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;