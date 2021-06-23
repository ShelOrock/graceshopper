import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledButton: { Button } } = StyledComponents;

import * as reduxThunks from '../../redux/thunks/index.jsx';
const { wishlistThunks: { addProductToWishlist } } = reduxThunks;

export default (product) => {

  const dispatch = useDispatch();

  const { product, activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addProductToWishlist(product, activeUser))
  };

  return activeUser.userType == 'Existing customer' && <Button onClick={ handleOnClick }></Button>
}