import { useState, useEffect } from 'react';

const useForm = (inputs, validation) => {

  const [ formValues, setFormValues ] = useState(inputs);
  const [ formErrors, setFormErrors ] = useState({});
  const [ containsErrors, setContainsErrors ] = useState(false);

  useEffect(() => {
    setFormErrors(validation(formValues));
  }, [formValues]);
  useEffect(() => {
    checkErrors();
  }, [formErrors]);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const checkErrors = () => {
    setContainsErrors(false);
    Object.values(formErrors).forEach(value => {
      if(!value) {
        setContainsErrors(false);
      } else {
        setContainsErrors(true);
      };
    });
    return containsErrors;
  };

  return {
    formValues,
    formErrors,
    containsErrors,
    handleOnChange,
  };
};

export default useForm;