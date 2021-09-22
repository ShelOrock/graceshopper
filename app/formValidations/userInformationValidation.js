const userInformationValidation = values => {
  let errors = {};

  if(!values.name) {
    errors.name = 'Name Required';
  };

  if(!values.email) {
    errors.email = 'Email Required';
  } else if(!values.email.match(/\S+@\S+\.\S+/)) {
    errors.email = 'Email Address not valid';
  };

  return errors;
};

export default userInformationValidation;
