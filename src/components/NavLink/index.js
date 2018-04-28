import _ from 'lodash';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = props => (
  <div>
    <NavLink
      exact={props.exact}
      activeClassName="bg-darkest-gray color-active-link"
      className="color-link-gray height-full pad-box-large text-decoration-none display-flex align-items-center"
      to={props.to}
    >
      <props.Icon />
      <span className="margin-left-10 pad-top-6">
        {props.name}
      </span>
    </NavLink>
  </div>
);

export default Link;
