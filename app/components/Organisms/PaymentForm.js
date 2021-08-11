import * as React from 'react';
import { useSelector } from 'react-redux';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import EditIcon from '/public/img/edit.png'

import FormContainer from '../Containers/Form/Form';
import ButtonsContainer from '../Containers/Form/Buttons';
import HeaderContainer from '../Containers/Form/Header';
import BodyContainer from '../Containers/Form/Body';
import Modules from '../Containers/Form/Modules';
import InputGroup from '../Containers/Form/InputGroup';
import CardNumberModule from '../Molecules/CardNumberModule';
import ExpirationModule from '../Molecules/ExpirationModule';
import SecurityCodeModule from '../Molecules/SecurityCodeModule';
import Title from '../Atoms/Title';
import DispatchButton from '../Atoms/DispatchButton';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

import * as reduxThunks from '../../redux/thunks';
const { stripeThunks: { attemptCardPayment } } = reduxThunks;

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
    <FormContainer>
      <HeaderContainer>
        <Title>Payment</Title>
        <Button
          onClick={ () => setActiveForm('payment') }
          variant='secondary'
        >
          <Icon src={ EditIcon } />
        </Button>
      </HeaderContainer>
      { activeForm == 'payment' && (
        <BodyContainer>
          <Modules>
            <CardNumberModule />
              <InputGroup>
                <ExpirationModule />
                <SecurityCodeModule />
              </InputGroup>
          </Modules>
          <ButtonsContainer>
            <DispatchButton
              onClick={ () => attemptCardPayment(
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
            >Pay ${ cartTotal }</DispatchButton>
          </ButtonsContainer>
        </BodyContainer>
      ) }
    </FormContainer>
  );
};
