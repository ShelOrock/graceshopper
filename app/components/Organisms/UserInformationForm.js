import * as React from 'react';
const { useState, useEffect } = React;
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
const { userInformationActions: { setUserInformation } } = reduxActions;

export default ({
  activeForm,
  setActiveForm
}) => {

  const dispatch = useDispatch();

  const { userInformation } = useSelector(state => state);

  const initialErrorState = {
    name: 'Required',
    email: 'Required'
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
    dispatch(setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainer>
      <HeaderContainer>
        <Title>User Information</Title>
        <Button
          onClick={ () => setActiveForm('user information') }
          variant='secondary'
        >
          <Icon src={ EditIcon } />
        </Button>
      </HeaderContainer>
      { activeForm == 'user information' && (
        <BodyContainer>
          {
            Object.keys(userInformation).map(field => (
              <InputModule
                key={ field }
                type={ 'text' }
                name={ field }
                value={ userInformation[field] }
                onChange={ handleOnChange }
                validateField={ validateField }
                error={ errors[field ] }
              />
            ))
          }
          <ButtonsContainer>
            <Button
              onClick={ () => setActiveForm('shipping') }
              disabled={ checkErrors() }
              variant='secondary'
            >Next</Button>

          </ButtonsContainer>
        </BodyContainer>
      ) }
    </FormContainer>
  );
};
