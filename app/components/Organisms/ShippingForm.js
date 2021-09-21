import React from 'react';

import EditIcon from '/public/img/edit.png'
import { FormContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
} from '../Atoms';
import InputModule from '../Molecules/InputModule';

const ShippingForm = ({
  activeForm,
  formValues,
  formErrors,
  containsErrors = false,
  handleOnChange,
  activateForm,
  activateNextForm,
}) => (
  <FormContainers.Main>
    <FormContainers.Header>
      <TypeAtoms.Title>Shipping Information</TypeAtoms.Title>
      <ButtonAtoms.Button
        onClick={ activateForm }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ EditIcon } />
      </ButtonAtoms.Button>
    </FormContainers.Header>
    { activeForm == 'shipping' && (
      <FormContainers.Body>
        {
          Object.keys(formValues).map(field => (
            <InputModule
              key={ field }
              type={ 'text' }
              name={ field }
              value={ formValues[field] }
              onChange={ handleOnChange }
              error={ formErrors[field] }
            />
          ))
        }
        <FormContainers.Actions>
          <ButtonAtoms.Button
            onClick={ activateNextForm }
            disabled={ containsErrors }
            variant='secondary'
          >Next</ButtonAtoms.Button>
        </FormContainers.Actions>
      </FormContainers.Body>
    ) }
  </FormContainers.Main>
);

export default ShippingForm;
