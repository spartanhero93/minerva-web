import React from 'react';

const CustomButton = props => (
  <button
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.name}
  </button>
);

export default CustomButton;
