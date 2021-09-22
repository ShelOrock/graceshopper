import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyTemplate } from '../Templates';
import { Confirmation } from '../Molecules';

import { checkoutSuccessActions } from '../../redux/actions';

const ConfirmationPage = () => {

  const dispatch = useDispatch();

  const {
    activeOrder,
    activeUser,
  } = useSelector(state => state);
    
  useEffect(() => {
    dispatch(checkoutSuccessActions.setCheckoutSuccess(false));
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
};

export default ConfirmationPage;
