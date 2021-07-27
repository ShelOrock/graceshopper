import * as React from 'react';
const { useState } = React;

import FormBodyContainer from '../FormComponents/FormBodyContainer.jsx';
import FormInputModules from '../../FormInputModules/index.jsx';
import SaveButton from '../FormComponents/SaveButton.jsx';

export default () => {

  const formInitialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    errors: {
      name: 'Required',
      address: 'Required',
      city: 'Required',
      state: 'Required',
      zip: 'Required',
    }
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
              [name]: 'Required'
            }
          });
          break;
        }

        setFormState({
          ...formState,
          errors: {
            ...formState.errors,
            [name]: ''
          }
        });
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