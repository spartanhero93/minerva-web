import _ from 'lodash';
import React, { Fragment } from 'react';

const TextInput = props => (
  <Fragment>
    <div className="width-full">
      <input
        className="width-full pt-input"
        {...props.input}
        {...props}
      />
      <div>
        {
          _.get(props, 'meta.touched') &&
          (
            (props.meta.error && <span className="font-size-small margin-bottom-10 color-red">{props.meta.error}</span>) ||
            (props.meta.warning && <span className="font-size-small text-color-goldenrod">{props.meta.warning}</span>)
          )
        }
      </div>
    </div>
  </Fragment>
);

export default TextInput;

