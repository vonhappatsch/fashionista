import React from 'react';

import './style.css';
import Button from '../Button';

const Quantity = (props) => {
  const handleButton = () => {
    return (props.quantity === 0) ? true : false
  }

  return (
    <div className="quantity">
      <Button className="quantity__button"
        onClick={() => props.subtractQuantity()}
        disableButton={handleButton()}
      >-</Button>
      <p className="quantity__amount">
        {props.quantity}
      </p>
      <Button className="quantity__button--plus"
        onClick={() => props.addQuantity()}
      >+</Button>
    </div>
  );
};

export default Quantity;