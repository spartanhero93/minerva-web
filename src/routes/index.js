import React from 'react';
import fp from 'lodash/fp';
import { Route, Switch } from 'react-router-dom';
import dashboard from './dashboard';
import profile from './profile';
import learning from './learning';
import people from './people';
import settings from './settings';

const routes = [
  dashboard,
  profile,
  learning,
  people,
  settings,
];

const mapRouteObjectsToRouteComponents = fp.map(route => <Route {...route} />);

const Router = () => (
  <Switch>
    {
      mapRouteObjectsToRouteComponents(routes)
    }
  </Switch>
);

export default Router;

