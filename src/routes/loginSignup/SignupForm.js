import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../../components/Form/Button';
import validate from './validators/signupValidator';
import TextInput from '../../components/Form/TextInput';

const SignupForm = (props) => {
  const { handleSubmit } = props;

  console.log(props);

  return (
    <div>
      <form onSubmit={handleSubmit} className="pad-box-extra-large">
        <h4 className="text-color-heading">Sign up for an account</h4>
        <div className="margin-top-20">
          <Field
            name="fullName"
            component={TextInput}
            className="pt-input pt-intent-primary pt-fill"
            placeholder="Full Name"
          />
        </div>
        <div className="margin-top-10">
          <Field
            name="email"
            component={TextInput}
            className="pt-input pt-intent-primary pt-fill"
            placeholder="Email"
          />
        </div>
        <div className="margin-top-10">
          <Field
            name="password"
            component={TextInput}
            className="pt-input pt-intent-primary pt-fill"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="margin-top-10">
          <Field
            name="repeatPassword"
            component={TextInput}
            className="pt-input pt-intent-primary pt-fill"
            placeholder="Repeat Password"
            type="password"
          />
        </div>
        <div className="margin-top-20 margin-bottom-20">
          <Button
            type="submit"
            disabled={!props.valid || !props.anyTouched}
            intent="SUCCESS"
            onClick={handleSubmit}
            name="Submit"
            loading={props.loading}
            className="pt-button pt-fill"
          />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'SignupForm',
  validate,
})(SignupForm);
