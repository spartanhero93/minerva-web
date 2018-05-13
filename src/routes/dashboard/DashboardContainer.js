// @flow

import React from 'react';
import TitleBar from '../../components/Titlebar';

type Props = {};

const buttons = [
  {
    name: 'Edit dashboard',
    id: 1,
    onClick: () => alert('hello'),
  },
];

const Dashboard = (props: Props) => {
  console.log(props);

  return (
    <div>
      <TitleBar title="Dashboard" buttons={buttons} />
    </div>
  );
};

export default Dashboard;
