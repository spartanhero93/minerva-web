import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
  state = {
    isLoggingIn: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ isLoggingIn: true });
  }

  render() {
    const { isLoggingIn } = this.state;

    return (
      <div className="bg-dark-gray height-100vh display-flex align-items-center justify-content-center">
        <LoginForm 
          loading={isLoggingIn}
          onFormSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
