import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import './style.css';
import Input from '../Input';

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <Input 
        placeholder="O que deseja procurar?"
        className="searchbar__input"
        onChange={props.onChange}
      />
      <SearchOutlinedIcon />
    </div>
  );
};

export default SearchBar;