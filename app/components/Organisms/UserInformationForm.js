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

import { userInformationActions } from '../../redux/actions';

export default ({
  activeForm,
  setActiveForm,
  dispatch
}) => {

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
    dispatch(userInformationActions.setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainers.Main>
      <FormContainers.Header>
        <TypeAtoms.Title>User Information</TypeAtoms.Title>
        <ButtonAtoms.Button
          onClick={ () => setActiveForm('user information') }
          variant='secondary'
        >
          <MediaAtoms.Icon src={ EditIcon } />
        </ButtonAtoms.Button>
      </FormContainers.Header>
      { activeForm == 'user information' && (
        <FormContainers.Body>
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
          <FormContainers.Actions>
            <ButtonAtoms.Button
              onClick={ () => setActiveForm('shipping') }
              disabled={ checkErrors() }
              variant='secondary'
            >Next</ButtonAtoms.Button>
          </FormContainers.Actions>
        </FormContainers.Body>
      ) }
    </FormContainers.Main>
  );
};
