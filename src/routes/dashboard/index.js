import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from './DashboardContainer';

export default {
  path: '/',
  exact: true,
  render: () => <Dashboard />,
};
