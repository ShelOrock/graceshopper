import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as reduxThunks from '../../../../redux/thunks';
const { wishlistThunks: { addToWishlist } } = reduxThunks;

export default (cartItem) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addToWishlist(activeUser.id, cartItem.productId))
  };

  return <Button onClick={ handleOnClick }>{emoji.get('heart')}</Button>;
};