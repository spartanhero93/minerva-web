import React from 'react';
import fp from 'lodash/fp';
import { Icon } from '@blueprintjs/core';
import NavLink from '../NavLink';

const links = [
  {
    Icon: props => <Icon color="gray" icon="dashboard" {...props} />,
    to: '/',
    name: 'Dashboard',
    exact: true,
  },
  {
    Icon: props => <Icon color="gray" icon="user" {...props} />,
    to: '/profile',
    name: 'Profile',
    exact: true,
  },
  {
    Icon: props => <Icon color="gray" icon="lightbulb" {...props} />,
    to: '/learning',
    name: 'Learning',
    exact: true,
  },
  {
    Icon: props => <Icon color="gray" icon="people" {...props} />,
    to: '/people',
    name: 'People',
    exact: true,
  },
  {
    Icon: props => <Icon color="gray" icon="cog" {...props} />,
    to: '/settings',
    name: 'Settings',
    exact: true,
  },
];

const mappedLinksToNavigation = fp.map(path => <NavLink {...path} />);

const Navigation = () => (
  <div>
    {
      mappedLinksToNavigation(links)
    }
  </div>
);

export default Navigation;
