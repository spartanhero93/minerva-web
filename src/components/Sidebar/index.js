import React from 'react';
import Profile from '../Profile';
import Navigation from '../Navigation';

const Sidebar = () => (
  <div className="bg-dark-gray full-height">
    <Profile />
    <Navigation />
  </div>
);

export default Sidebar;
