import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContentContainer from './components/ContentContainer';

const App = () => (
  <BrowserRouter>
    <div className="display-flex bg-white-blue height-100vh">
      <div className="flex-one">
        <Sidebar />
      </div>
      <div className="flex-four">
        <ContentContainer />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
