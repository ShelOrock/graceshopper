import * as React from 'react';
const { useState } = React;
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '/public/img/edit.png'

import FormContainer from '../Containers/Form/Form';
import ButtonsContainer from '../Containers/Form/Buttons';
import HeaderContainer from '../Containers/Form/Header';
import BodyContainer from '../Containers/Form/Body';
import Title from '../Atoms/Title';
import InputModule from '../Molecules/InputModule';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

import * as reduxActions from '../../redux/actions';
const { shippingActions: { setShipping } } = reduxActions;

export default ({
  activeForm,
  setActiveForm
}) => {

  const dispatch = useDispatch();

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
    dispatch(setShipping({
      ...shipping,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainer>
      <HeaderContainer>
        <Title>Shipping Information</Title>
        <Button
          onClick={ () => setActiveForm('shipping') }
          variant='secondary'
        >
          <Icon src={ EditIcon } />
        </Button>
      </HeaderContainer>
      { activeForm == 'shipping' && (
        <BodyContainer>
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
          <ButtonsContainer>
            <Button
              onClick={ () => setActiveForm('payment') }
              disabled={ checkErrors() }
              variant='secondary'
            >Next</Button>
          </ButtonsContainer>
        </BodyContainer>
      ) }
    </FormContainer>
  );
};
