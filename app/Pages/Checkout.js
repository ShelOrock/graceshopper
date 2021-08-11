import * as React from 'react';
const { useState, useEffect } = React;
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import CheckoutTemplate from '../Components/Templates/Checkout';
import UserInformationForm from '../Components/Organisms/UserInformationForm';
import ShippingForm from '../Components/Organisms/ShippingForm';
import PaymentForm from '../Components/Organisms/PaymentForm';
import BreadCrumbNavigation from '../Components/Molecules/BreadCrumbNavigation';

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
