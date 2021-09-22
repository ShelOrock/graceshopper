import React from 'react';

import EditIcon from '/public/img/edit.png';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  StripeAtoms
} from '../Atoms';
import { StripeInputModule } from '../Molecules';
import { FormContainers, InputModuleContainers } from '../Containers';

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
        <StripeInputModule
          label={ 'Card Number' }
          input={ <StripeAtoms.CardNumber /> }
        />
        <InputModuleContainers.Group>
          <StripeInputModule
            label={ 'Expiration' }
            input={ <StripeAtoms.Expiration /> }
          />
          <StripeInputModule
            label={ 'Security Code' }
            input={ <StripeAtoms.SecurityCode /> }
          />
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
