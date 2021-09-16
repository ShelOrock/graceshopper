import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useStripe, useElements } from '@stripe/react-stripe-js';

import CheckoutTemplate from '../Templates/Checkout';
import UserInformationForm from '../Organisms/UserInformationForm';
import ShippingForm from '../Organisms/ShippingForm';
import PaymentForm from '../Organisms/PaymentForm';
import BreadCrumbNavigation from '../Molecules/BreadCrumbs';

export default () => {

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

  useEffect(() => {
    if(checkoutSuccess) 
      history.push('/confirmation');
  }, [checkoutSuccess]);

  return (
    <CheckoutTemplate
      title={ 'Checkout' }
      breadcrumbs={
        <BreadCrumbNavigation
          firstCrumb={ {
            to: '/',
            name: 'Home'
          } }
          secondCrumb={ {
            to: '/cart',
            name: 'Cart'
          } }
          thirdCrumb={ {
            to: '/checkout',
            name: 'Checkout'
          } }
        />
      }
      userInformation={
        <UserInformationForm
          user={ activeUser }
          activeForm={ activeForm }
          setActiveForm={ setActiveForm }
          dispatch={ dispatch }
        />
      }
      shipping={
        <ShippingForm
          activeForm={ activeForm }
          setActiveForm={ setActiveForm }
          dispatch={ dispatch }
        />
      }
      payment={
        <PaymentForm
          user={ activeUser }
          cartItems={ cartItems}
          activeForm={ activeForm }
          setActiveForm={ setActiveForm }
          dispatch={ dispatch }
          stripe={ stripe }
          elements={ elements }
        />
      }
    />
  );
};
