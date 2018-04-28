import _ from 'lodash';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = props => (
  <div>
    <NavLink
      exact={props.exact}
      activeClassName="bg-darkest-gray color-active-link"
      className="color-link-gray height-full display-block pad-box-large text-decoration-none font-weight-thin"
      to={props.to}
    >
      {
        _.toUpper(props.name)
      }
    </NavLink>
  </div>
);

export default Link;
