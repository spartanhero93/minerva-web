import React from 'react';
import fp from 'lodash/fp';
import NavLink from '../NavLink';

const links = [
  {
    to: '/foo',
    name: 'foo',
    exact: true,
  },
  {
    to: '/bar',
    name: 'bar',
    exact: true,
  },
  {
    to: '/baz',
    name: 'baz',
    exact: true,
  },
  {
    to: '/ban',
    name: 'ban',
    exact: true,
  },
  {
    to: '/bal',
    name: 'bal',
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
