import * as React from 'react';
const { useState } = React;
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

import CheckoutPageContainer from './CheckoutPageContainer.jsx';
import FormContainer from './FormComponents/FormContainer.jsx';
import FormHeader from './FormComponents/FormHeaderContainer.jsx';
import ActivateFormButton from './FormComponents/ActivateFormButton.jsx';
import UserInfoFormBody from './UserInfoForm/index.jsx';
import ShippingFormBody from './ShippingForm/index.jsx';
import PaymentFormBody from './PaymentForm/index.jsx';

const stripe = loadStripe('pk_test_51JCDlcJxm4J61jnKA83le7sgVjl87qtFuaICUMNr6Far0GiH0IupD3D7AC4Qh1hg1nIXrXRZF2TQpbptwn1aEs5200o5Q1A4Ve');

export default () => {

  const [ activeForm, setActiveForm ] = useState('user info');

  const formProps = {
    activeForm,
    setActiveForm
  };

  return (
    <Elements stripe={ stripe }>
      <CheckoutPageContainer>
        <FormContainer>
          <FormHeader { ...formProps } title='User Information'>
            <ActivateFormButton { ...formProps } form='user info'/>
          </FormHeader>
          { formProps.activeForm == 'user info' && <UserInfoFormBody /> }
        </FormContainer>
        <FormContainer>
          <FormHeader { ...formProps } title='Shipping'>
            <ActivateFormButton { ...formProps } form='shipping'/>
          </FormHeader>
          { formProps.activeForm == 'shipping' && <ShippingFormBody /> }
        </FormContainer>
        <FormContainer>
          <FormHeader { ...formProps } title='Payment'>
            <ActivateFormButton { ...formProps } form='payment' />
          </FormHeader>
          { formProps.activeForm == 'payment' && <PaymentFormBody /> }
        </FormContainer>
      </CheckoutPageContainer>
    </Elements>
  );
};
