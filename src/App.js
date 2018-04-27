import React from 'react';
import Sidebar from './components/Sidebar';
import ContentContainer from './components/ContentContainer';

const App = () => (
  <div className="display-flex bg-white-blue height-100vh">
    <div className="flex-one">
      <Sidebar />
    </div>
    <div className="flex-four">
      <ContentContainer />
    </div>
  </div>
);

export default App;
