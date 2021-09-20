import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import SignupTemplate from '../Templates/Signup';
import SignupForm from '../Organisms/SignupForm';
import { authenticationThunks } from '../../redux/thunks';

export default () => {

  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const initialErrorState = {
    email: 'Required',
    password: 'Required',
    confirmPassword: 'Required'
  };

  const [ form, setForm ] = useState(initialState);
  const [ errors, setErrors ] = useState(initialErrorState);

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

//   useEffect(() => {
//     Object.keys(initialState).forEach(key => validateField(key, initialState[key]));
//   }, [initialState]);

  const validateField = (name, value) => {
    switch(name) {
      case 'email':
        if (!value) {
          setErrors({
            ...errors,
            email: 'Required'
          });
        } else if(!value.match(/\S+@\S+\.\S+/)) {
          setErrors({
            ...errors,
            email: 'Email not valid'
          });
        } else {
          setErrors({
            ...errors,
            email: ''
          });
        };
      break;

      case 'password':
        if(!value) {
          setErrors({
            ...errors,
            password: 'Required'
          });
        } else {
          setErrors({
            ...errors,
            password: ''
          });
        };
      break;

      case 'confirmPassword':
        if(!value) {
          setErrors({
            ...errors,
            confirmPassword: 'Required'
        });

        } else if(form.confirmPassword !== form.password) {
          setErrors({
            ...errors,
            confirmPassword: 'Passwords much match'
          });
        } else {
          setErrors({
            ...errors,
            confirmPassword: ''
          });
        };
      break;

      default:
        return;
    };
  };

  const checkErrors = () => {
    let containsErrors = false;
    Object.values(errors).forEach(value => {
      if(!value) {
        containsErrors = false;
      } else {
        containsErrors = true;
      };
    });
    return containsErrors;
  }

  return (
    <SignupTemplate
      signup={ <SignupForm
        dispatch={ dispatch }
        form={ form }
        // validateField={ validateField }
        errors={ errors }
        checkErrors={ checkErrors() }
        handleOnChange={ handleOnChange }
        attemptUserSignup={ () => authenticationThunks.attemptUserSignup(form) }
      /> }
    />
  )
};
