import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmptyTemplate from '../Templates/Empty';
import Confirmation from '../Molecules/Confirmation';

import {
  checkoutSuccessActions,
  userInformationActions,
  shippingActions
} from '../../redux/actions';

export default () => {

  const dispatch = useDispatch();

  const {
    activeOrder,
    activeUser,
  } = useSelector(state => state);
    
  useEffect(() => {
    dispatch(checkoutSuccessActions.setCheckoutSuccess(false));
    dispatch(userInformationActions.resetUserInformation());
    dispatch(shippingActions.resetShipping());
  }, []);

  return (
    <EmptyTemplate 
      title={ 'Confirmation' }
      component={
        <Confirmation
          order={ activeOrder }
          user={ activeUser }
        />
      }
    />
  );
}