import React from 'react';
import Button from '../../components/Form/Button';
import TextInput from '../../components/Form/TextInput';

const LoginForm = props => (
  <div>
    <form onSubmit={props.onFormSubmit} className="pad-box-extra-large">
      <h4 className="text-color-heading">Log in to your account</h4>
      <div className="margin-top-20">
        <TextInput className="pt-input pt-intent-primary pt-fill" placeholder="Email" />
      </div>
      <div className="margin-top-10">
        <TextInput
          className="pt-input pt-intent-primary pt-fill"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="margin-top-20">
        <Button
          disabled
          intent="SUCCESS"
          onClick={props.onFormSubmit}
          name="Submit"
          loading={props.loading}
          className="pt-button pt-fill"
        />
      </div>
    </form>
    <div className="pad-box bg-white-blue border-top-1px-blend text-center margin-top-20">
      <span className="font-size-small">Forgot your password?</span>
    </div>
  </div>
);

export default LoginForm;
