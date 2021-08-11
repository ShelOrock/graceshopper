import React from 'react';

import PreviewContainer from '../Containers/Preview/Preview';
import ListContainer from '../Containers/Preview/List';
import Heading from '../Atoms/Heading';
import Link from '../Atoms/Link';
import LineList from '../Atoms/LineList';
import PreviewItem from '../Molecules/PreviewItem';
import ButtonsContainer from '../Containers/Preview/Buttons';
import DummyButton from '../Atoms/DummyButton';

export default ({
  cartItems = [],
  user = {},
}) => (
  <PreviewContainer>
    <Heading>Cart Preview</Heading>
    <ListContainer>
      <LineList>
        { !!cartItems.length && cartItems.map(cartItem => (
          <PreviewItem
            key={ cartItem.id }
            cartItem={ cartItem }
            product={ cartItem.product }
            user={ user }
          />
        )) }
      </LineList>
    </ListContainer>
    <ButtonsContainer>
      <Link to={ '/cart' }>
        <DummyButton variant='secondary'>Cart</DummyButton>
      </Link>
      <Link to={ '/checkout' }>
        <DummyButton variant='secondary'>Checkout</DummyButton>
      </Link>
    </ButtonsContainer>
  </PreviewContainer>
);
