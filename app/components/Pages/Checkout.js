import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useForm } from '../../hooks';
import { userInformationValidation, shippingValidation } from '../../formValidations';

import { CheckoutTemplate } from '../Templates';
import {
  UserInformationForm,
  ShippingForm,
  PaymentForm
} from '../Organisms';
import { BreadCrumbs } from '../Molecules';

import { stripeThunks } from '../../redux/thunks';

const CheckoutPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const {
    activeUser,
    cart: { cartItems },
    checkoutSuccess
  } = useSelector(state => state);

  const [ activeForm, setActiveForm ] = useState('user information');

  const userInformationInputs = {
    name: '',
    email: '',
  };

  const shippingInputs = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  };

  const userInformationForm = useForm(userInformationInputs, userInformationValidation);
  const shippingForm = useForm(shippingInputs, shippingValidation);

  useEffect(() => {
    if(checkoutSuccess) 
      history.push('/confirmation');
  }, [checkoutSuccess]);

  const cartTotal = Number(cartItems.reduce((accum, curr) => {
    return accum += Number((curr.quantity * curr.product.unitPrice).toFixed(2));
  }, 0)).toFixed(2) || 0;

  return (
    <CheckoutTemplate
      title={ 'Checkout' }
      breadcrumbs={
        <BreadCrumbs
          crumbs={ [
            { to: '/', name: 'Home' },
            { to: '/cart', name: 'Cart' },
            { to: '/checkout', name: 'Checkout' }
          ] }
        />
      }
      userInformation={
        <UserInformationForm
          activeForm={ activeForm }
          formValues={ userInformationForm.formValues }
          formErrors={ userInformationForm.formErrors }
          containsErrors={ userInformationForm.containsErrors }
          handleOnChange={ userInformationForm.handleOnChange }
          activateForm={ () => setActiveForm('user information') }
          activateNextForm={ () => setActiveForm('shipping') }
        />
      }
      shipping={
        <ShippingForm
          activeForm={ activeForm }
          formValues={ shippingForm.formValues }
          formErrors={ shippingForm.formErrors }
          containsErrors={ shippingForm.containsErrors }
          handleOnChange={ shippingForm.handleOnChange }
          activateForm={ () => setActiveForm('shipping') }
          activateNextForm={ () => setActiveForm('payment') }
        />
      }
      payment={
        <PaymentForm
          activeForm={ activeForm }
          containsErrors={ userInformationForm.containsErrors || shippingForm.containsErrors }
          dispatch={ dispatch }
          attemptCardPayment={ () => stripeThunks.attemptCardPayment(
            stripe,
            { card: elements.getElement('cardNumber') },
            activeUser.id,
            {
              payment_method_types: ['card'],
              amount: cartTotal,
              userInformation: userInformationForm.formValues,
              shipping: shippingForm.formValues,
              cartItems
            },
          ) }
          activateForm={ () => setActiveForm('payment') }
          stripe={ stripe }
          cartTotal={ cartTotal }
        />
      }
    />
  );
};

export default CheckoutPage;
