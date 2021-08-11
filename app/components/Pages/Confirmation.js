import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmptyTemplate from '../Templates/Empty';
import Confirmation from '../Molecules/Confirmation';

import * as reduxActions from '../../redux/actions';
const {
  checkoutSuccessActions: { setCheckoutSuccess },
  userInformationActions: { resetUserInformation },
  shippingActions: { resetShipping },
} = reduxActions;

export default () => {

  const dispatch = useDispatch();

  const {
    activeOrder,
    activeUser,
  } = useSelector(state => state);
    
  useEffect(() => {
    dispatch(setCheckoutSuccess(false));
    dispatch(resetUserInformation());
    dispatch(resetShipping());
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