import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeartIcon from '/public/img/heart.png';
import * as StyledComponents from '../../../../../../StyledComponents';
const {
  StyledButton: { Button },
  StyledImage: { Icon }
} = StyledComponents;

import * as reduxThunks from '../../../../../../../redux/thunks';
const { wishlistThunks: { addToWishlist } } = reduxThunks;

export default (cartItem) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addToWishlist(activeUser.id, cartItem.productId))
  };

  return activeUser.userType == 'Standard' &&
    <Button onClick={ handleOnClick }>
      <Icon src={ HeartIcon } alt='Heart' />
    </Button>
};