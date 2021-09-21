import React from 'react';

import EditIcon from '/public/img/edit.png'
import { FormContainers, InputModuleContainers } from '../Containers';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms
} from '../Atoms';
import CardNumberModule from '../Molecules/CardNumber';
import ExpirationModule from '../Molecules/Expiration';
import SecurityCodeModule from '../Molecules/SecurityCode';

const PaymentForm = ({
  activeForm,
  containsErrors,
  dispatch,
  attemptCardPayment,
  activateForm,
  stripe,
  cartTotal,
}) => (
  <FormContainers.Main>
    <FormContainers.Header>
      <TypeAtoms.Title>Payment</TypeAtoms.Title>
      <ButtonAtoms.Button
        onClick={ activateForm }
        variant='secondary'
      >
        <MediaAtoms.Icon src={ EditIcon } />
      </ButtonAtoms.Button>
    </FormContainers.Header>
    { activeForm == 'payment' && (
      <FormContainers.Body>
        <CardNumberModule />
        <InputModuleContainers.Group>
          <ExpirationModule />
          <SecurityCodeModule />
        </InputModuleContainers.Group>
        <FormContainers.Actions>
          <ButtonAtoms.Button
            dispatch={ dispatch }
            onClick={ attemptCardPayment }
            disabled={ !stripe || !cartTotal || containsErrors }
            variant='secondary'
          >Pay ${ cartTotal }</ButtonAtoms.Button>
        </FormContainers.Actions>
      </FormContainers.Body>
    ) }
  </FormContainers.Main>
);

export default PaymentForm;
