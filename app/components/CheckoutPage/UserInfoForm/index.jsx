import * as React from 'react';
const { useState } = React;
import { useSelector } from 'react-redux';

import FormBodyContainer from '../FormComponents/FormBodyContainer.jsx';
import FormInputModules from '../../FormInputModules/index.jsx';
import SaveButton from '../FormComponents/SaveButton.jsx';

export default () => {

  const { activeUser } = useSelector(state => state);

  const formInitialState = {
    name: activeUser.name || '',
    email: activeUser.email || '',
    errors: {
      name: 'Required',
      email: 'Required',
    },
  };

  const [ formState, setFormState ] = useState(formInitialState);

  const validateField = (name, value) => {
    switch(name) {
      case `${ name }`:
        if(!value) {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [`${ name }`]: 'Required'
            }
          });
        } else {
          setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              [`${ name }`]: ''
            }
          });
        };
        break;

      default:
        return;
    };
  };

  const handleOnChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  };

  const moduleProps = {
    formState,
    onChange: handleOnChange,
    validateField,
  }

  return (
    <FormBodyContainer>
      <FormInputModules { ...moduleProps } />
      <SaveButton { ...formState } />
    </FormBodyContainer>
  );
};