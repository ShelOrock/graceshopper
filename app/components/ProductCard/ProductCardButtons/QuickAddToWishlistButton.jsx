import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeartIcon from '/public/img/heart.png';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const {
  StyledButton: { Button },
  StyledImage: { Icon },
} = StyledComponents;

import * as reduxThunks from '../../../redux/thunks.jsx';
const { wishlistThunks: { addToWishlist } } = reduxThunks;

export default (product) => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  const handleOnClick = () => {
    dispatch(addProductToWishlist(product, activeUser))
  };

  return activeUser.userType == 'Standard' &&
    <Button onClick={ handleOnClick }>
      <Icon src={ HeartIcon } alt='Heart' />
    </Button>
}