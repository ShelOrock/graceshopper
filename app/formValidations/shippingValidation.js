const shippingValidation = values => {
  let errors = {};

  if(!values.name) {
    errors.name = 'Name Required';
  };

  if(!values.address) {
    errors.address = 'Address Required';
  };

  if(!values.city) {
    errors.city = 'City Required';
  };

  if(!values.state) {
    errors.state = 'State Required';
  };

  if(!values.zip) {
    errors.zip = 'Zip Code Required';
  };

  return errors;
};

export default shippingValidation;
