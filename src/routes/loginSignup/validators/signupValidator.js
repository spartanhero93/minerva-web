import _ from 'lodash';
import fp from 'lodash/fp';

const formValidatorMapping = {
  fullName: (errors, value) => {
    const newErrorObject = errors;

    if (value.length <= 3) {
      _.set(newErrorObject, 'fullName', 'Full Name must be more than 3 characters');
    }

    return newErrorObject;
  },
  email: (errors, value) => {
    const newErrorObject = errors;
    
    if (value.length <= 3) {
      _.set(newErrorObject, 'email', 'Email must be valid');
    }

    return newErrorObject;
  },
  password: (errors, value) => {
    const newErrorObject = errors;
    
    if (value.length <= 6) {
      _.set(newErrorObject, 'password', 'Password must be more than 6 characters');
    }

    return newErrorObject;
  },
  repeatPassword: (errors, value, formObject) => {
    const newErrorObject = errors;

    if (value.length <= 6 || formObject.password !== value) {
      _.set(newErrorObject, 'repeatPassword', 'Both passwords must match');
    }

    return newErrorObject;
  },
};

const validation = values => fp.compose(
  fp.reduce((acc, curr) => ({
    ...acc,
    ...curr,
  }), {}),
  fp.map(formKey => formValidatorMapping[formKey]({}, values[formKey], values)),
  fp.keys,
)(values);

export default validation;
