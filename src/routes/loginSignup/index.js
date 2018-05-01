// @flow

import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import CustomButton from '../../components/Form/CustomButton';

type Props = {
  fakeProp: number,
}

class LoginSignupContainer extends Component<Props> {
  state = {
    isLoggingIn: false,
    isShowingLoginForm: true,
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    this.setState({ isLoggingIn: true });
  }

  handleFormChangeClick = isShowingLoginForm => () => this.setState({
    isShowingLoginForm,
  });

  handleSignupSubmit = (values: number): number => values;

  render() {
    const { isLoggingIn, isShowingLoginForm } = this.state;

    console.log(this.handleSignupSubmit(10));

    return (
      <div className="bg-dark-gray height-100vh display-flex align-items-center justify-content-center">
        <div className="bg-white pop-over-shadow max-width-300px">
          <div className="display-flex">
            <div className="flex-one">
              <CustomButton
                onClick={this.handleFormChangeClick(true)}
                name="Login"
                className={`pad-box ${isShowingLoginForm ? 'bg-intent-success' : 'bg-dark-gray'} width-full color-white outline-none cursor-pointer font-size-medium font-weight-big`}
              />
            </div>
            <div className="flex-one">
              <CustomButton
                onClick={this.handleFormChangeClick(false)}
                name="Sign up"
                className={`pad-box ${!isShowingLoginForm ? 'bg-intent-success' : 'bg-dark-gray'} width-full color-white outline-none cursor-pointer font-size-medium font-weight-big`}
              />
            </div>
          </div>
          <div className="margin-top-20">
            {
              isShowingLoginForm
              ? <LoginForm
                loading={isLoggingIn}
                onFormSubmit={this.handleSubmit}
              />
              : <SignupForm onSubmit={this.handleSignupSubmit} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSignupContainer;
