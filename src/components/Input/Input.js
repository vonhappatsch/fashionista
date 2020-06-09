import React from 'react';

const Input = (props) => {
  return (
    <input type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      className={props.className}
    />
  );
};

export default Input;