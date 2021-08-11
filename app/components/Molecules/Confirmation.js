import React from 'react';

import ConfirmationContainer from '../Containers/Confirmation/Confirmation';
import ButtonsContainer from '../Containers/Confirmation/Buttons';
import Body from '../Atoms/Body';
import Link from '../Atoms/Link';
import DummyButton from '../Atoms/DummyButton';
import Heading from '../Atoms/Heading';

export default ({
  order = {},
  user = {}
}) => (
  <ConfirmationContainer>
    <Heading>Order confirmed!</Heading>
    <Body>Your Order No. is { order.confirmationNumber }</Body>
    <ButtonsContainer>
      <Link to={ '/' }>
        <DummyButton variant='secondary'>Take me home</DummyButton>
      </Link>
      { user.isLoggedIn && (
        <Link to={ `/order-history/${ order.id }` }>
          <DummyButton variant='secondary'>Review my order</DummyButton>
        </Link>
      ) }
    </ButtonsContainer>
  </ConfirmationContainer>
);
