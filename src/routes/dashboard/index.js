import React from 'react';
import { NavLink } from 'react-router-dom';

export default {
  path: '/',
  exact: true,
  render: () => <div>Dashboard<NavLink to="/login">login</NavLink></div>,
};
