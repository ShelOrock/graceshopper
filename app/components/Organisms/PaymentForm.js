import React from 'react';
import { useSelector } from 'react-redux';
import { useStripe, useElements } from '@stripe/react-stripe-js';

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

import { stripeThunks } from '../../redux/thunks';

export default ({
  user = {},
  cartItems = [],
  activeForm,
  setActiveForm
}) => {

  const stripe = useStripe();
  const elements = useElements();

  const { userInformation, shipping } = useSelector(state => state);

  const checkUserInformation = () => {
    let containsEmptyFields = false;
    Object.values(userInformation).forEach(value => {
      if(!value) {
        containsEmptyFields = false;
      } else {
        containsEmptyFields = true;
      };
    });
    return containsEmptyFields;
  };

  const checkShipping = () => {
    let containsEmptyFields = false;
    Object.values(shipping).forEach(value => {
      if(!value) {
        containsEmptyFields = false;
      } else {
        containsEmptyFields = true;
      };
    });
    return containsEmptyFields;
  };

  const cartTotal = Number(cartItems.reduce((accum, curr) => {
    return accum += Number((curr.quantity * curr.product.unitPrice).toFixed(2));
  }, 0)).toFixed(2) || 0;

  return (
    <FormContainers.Main>
      <FormContainers.Header>
        <TypeAtoms.Title>Payment</TypeAtoms.Title>
        <ButtonAtoms.Button
          onClick={ () => setActiveForm('payment') }
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
            <ButtonAtoms.DispatchButton
              onClick={ () => stripeThunks.attemptCardPayment(
                stripe,
                { card: elements.getElement('cardNumber') },
                user.id,
                {
                  payment_method_types: ['card'],
                  amount: cartTotal,
                  userInformation,
                  shipping,
                  cartItems
                },
                ) }
              disabled={
                !stripe ||
                !checkUserInformation() ||
                !checkShipping() ||
                !cartTotal
              }
              variant='secondary'
            >Pay ${ cartTotal }</ButtonAtoms.DispatchButton>
          </FormContainers.Actions>
        </FormContainers.Body>
      ) }
    </FormContainers.Main>
  );
};
