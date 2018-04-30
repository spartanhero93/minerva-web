import _ from 'lodash';
import React from 'react';
import { Button, Intent } from '@blueprintjs/core';

const ButtonComponent = props => (
  <Button
    type={props.type}
    intent={_.get(Intent, `${props.intent}`, Intent.NONE)}
    className={`pt-button ${props.className}`}
    loading={props.loading}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.name}
  </Button>
);

export default ButtonComponent;
