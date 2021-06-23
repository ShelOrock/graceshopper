import * as React from 'react';
import { useSelector } from 'react-redux'

import CartList from './CartList.jsx';
import EmptyShoppingCartMessage from './EmptyShoppingCartMessage.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledType: { Title } } = StyledComponents;

export default () => {

  const { cart } = useSelector(state => state);

  return (
    <>
      <Title>Cart</Title>
      { !!cart.length ? <CartList /> : <EmptyShoppingCartMessage /> }
    </>
  )
}
