import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Router from './routes';
import LoginSignup from './routes/loginSignup';
import Sidebar from './components/Sidebar';

/**
 * This will be made into a class component,
 * which will pull the user from the api based off of token data.
 * and show a loading spinner while doing it.
 * Will return redirect if user isn't authenticated.
 */
const Authenticated = () => {
  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="display-flex bg-white-blue height-100vh">
      <div className="flex-one">
        <Sidebar />
      </div>
      <div className="flex-four">
        <Router />
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={() => <LoginSignup />} />
      <Authenticated />
    </Switch>
  </BrowserRouter>
);

export default App;
