import React from 'react';
import Button from '../../components/Form/Button';

const LoginForm = props => (
  <div className="bg-white-blue border-radius-3px pop-over-shadow pad-box-extra-large">
    <form onSubmit={props.onFormSubmit}>
      <h4 className="text-color-heading">Log in to your account</h4>
      <div className="margin-top-10">
        <input className="pt-input pt-intent-primary" placeholder="Email" />
      </div>
      <div className="margin-top-10">
        <input
          className="pt-input pt-intent-primary"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="margin-top-10">
        <Button
          // type="submit"
          onClick={props.onFormSubmit}
          name="Submit"
          loading={props.loading}
          className="pt-button"
        />
      </div>
    </form>
  </div>
);

export default LoginForm;
