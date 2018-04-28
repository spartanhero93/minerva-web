import React from 'react';
import { Button } from '@blueprintjs/core';

const ButtonComponent = props => (
  <Button
    className={`pt-button ${props.className}`}
    loading={props.loading}
    onClick={props.onClick}
  >
    {props.name}
  </Button>
);

export default ButtonComponent;
