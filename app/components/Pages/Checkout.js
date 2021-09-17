import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import {
  useStripe,
  useElements,
  Elements
} from '@stripe/react-stripe-js';

import CheckoutTemplate from '../Templates/Checkout';
import UserInformationForm from '../Organisms/UserInformationForm';
import ShippingForm from '../Organisms/ShippingForm';
import PaymentForm from '../Organisms/PaymentForm';
import BreadCrumbNavigation from '../Molecules/BreadCrumbs';

const connectedStripe = loadStripe('pk_test_51JCDlcJxm4J61jnKA83le7sgVjl87qtFuaICUMNr6Far0GiH0IupD3D7AC4Qh1hg1nIXrXRZF2TQpbptwn1aEs5200o5Q1A4Ve');

export default () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const stripeElements = useElements();

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
    <Elements stripe={ connectedStripe }>
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
          elements={ stripeElements }
        />
      }
    />
    </Elements>
  );
};
