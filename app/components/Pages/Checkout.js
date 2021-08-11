import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import CheckoutTemplate from '../Templates/Checkout';
import UserInformationForm from '../Organisms/UserInformationForm';
import ShippingForm from '../Organisms/ShippingForm';
import PaymentForm from '../Organisms/PaymentForm';
import BreadCrumbNavigation from '../Molecules/BreadCrumbNavigation';

export default () => {

  const history = useHistory();

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
        />
      }
      shipping={
        <ShippingForm
          activeForm={ activeForm }
          setActiveForm={ setActiveForm }
        />
      }
      payment={
        <PaymentForm
          user={ activeUser }
          cartItems={ cartItems}
          activeForm={ activeForm }
          setActiveForm={ setActiveForm }
        />
      }
    />
  );
};
