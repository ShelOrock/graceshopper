import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import EditIcon from '/public/img/edit.png'
import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
} from '../Atoms';
import InputModule from '../Molecules/InputModule';

import { shippingActions } from '../../redux/actions';

const ShippingForm = ({
  activeForm,
  setActiveForm,
  dispatch
}) => {

  const { shipping } = useSelector(state => state);

  const initialErrorState = {
    name: 'Required',
    address: 'Required',
    city: 'Required',
    state: 'Required',
    zip: 'Required'
  };

  const [ errors, setErrors ] = useState(initialErrorState);

  const validateField = (name, value) => {
    switch(name) {
      case `${ name }`:
        if(!value) {
          setErrors({
            ...errors,
            [name]: 'Required'
          });

        } else {
          setErrors({
            ...errors,
            [name]: ''
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

  const handleOnChange = e => {
    dispatch(shippingActions.setShipping({
      ...shipping,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainers.Main>
      <FormContainers.Header>
        <TypeAtoms.Title>Shipping Information</TypeAtoms.Title>
        <ButtonAtoms.Button
          onClick={ () => setActiveForm('shipping') }
          variant='secondary'
        >
          <MediaAtoms.Icon src={ EditIcon } />
        </ButtonAtoms.Button>
      </FormContainers.Header>
      { activeForm == 'shipping' && (
        <FromContainers.Body>
          {
            Object.keys(shipping).map(field => (
              <InputModule
                key={ field }
                type={ 'text' }
                name={ field }
                value={ shipping[field] }
                onChange={ handleOnChange }
                validateField={ validateField }
                error={ errors[field ] }
              />
            ))
          }
          <FromContainers.Actions>
            <ButtonAtoms.Button
              onClick={ () => setActiveForm('payment') }
              disabled={ checkErrors() }
              variant='secondary'
            >Next</ButtonAtoms.Button>
          </FromContainers.Actions>
        </FromContainers.Body>
      ) }
    </FormContainers.Main>
  );
};

export default ShippingForm;
