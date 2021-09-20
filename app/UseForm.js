import { useState, useEffect } from 'react';

const useForm = inputFields => {

  const [ values, setValues ] = useState({ ...inputFields });
  const [ errors, setErrors ] = useState({});

  const handleOnChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
  };

  return {
    values,
    errors,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useForm;