import React from 'react';

import EditIcon from '/public/img/edit.png';
import { InputModule } from '../Molecules';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
} from '../Atoms';
import { FormContainers } from '../Containers';

const UserInformationForm = ({
  activeForm,
  formValues,
  formErrors,
  containsErrors = false,
  handleOnChange,
  activateForm,
  activateNextForm
}) => (
  <FormContainers.Main>
    <FormContainers.Header>
      <TypeAtoms.Title>User Information</TypeAtoms.Title>
      <ButtonAtoms.Button
        onClick={ activateForm }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ EditIcon } />
      </ButtonAtoms.Button>
    </FormContainers.Header>
    { activeForm == 'user information' && (
      <FormContainers.Body>
        {
          Object.keys(formValues).map(field => (
            <InputModule
              key={ field }
              type={ 'text' }
              name={ field }
              value={ formValues[field] }
              onChange={ handleOnChange }
              error={ formErrors[field ] }
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

export default UserInformationForm;
