import React from 'react';

import './style.css';

const Button = (props) => {
  return (
    <button className={props.className}
      onClick={props.onClick}
      disabled={props.disableButton}
    >
      {props.children}
    </button>
  );
};

export default Button;