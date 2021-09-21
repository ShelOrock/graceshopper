const signupValidation = values => {
  let errors = {};

  if(!values.email) {
    errors.email = 'Email Required';
  } else if(!values.email.match(/\S+@\S+\.\S+/)) {
    errors.email = 'Email address not valid';
  };

  if(!values.password) {
    errors.password = 'Password Required';
  }

  if(!values.confirmPassword) {
    errors.confirmPassword = 'Confirmation Required';
  } else if(values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Must match password';
  };

  return errors;
};

export default signupValidation;
