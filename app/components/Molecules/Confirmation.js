import React from 'react';

import { ConfirmationContainers } from '../Containers';
import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';

const Confirmation = ({
  order = {},
  user = {}
}) => (
  <ConfirmationContainers.Main>
    <TypeAtoms.Heading>Order confirmed!</TypeAtoms.Heading>
    <TypeAtoms.Body>Your Order No. is { order.confirmationNumber }</TypeAtoms.Body>
    <ConfirmationContainers.Actions>
      <NavigationAtoms.NavLink to={ '/' }>
        <ButtonAtoms.DummyButton variant='secondary'>Take me home</ButtonAtoms.DummyButton>
      </NavigationAtoms.NavLink>
      { user.isLoggedIn && (
        <NavigationAtoms.NavLink to={ `/order-history/${ order.id }` }>
          <ButtonAtoms.DummyButton variant='secondary'>Review my order</ButtonAtoms.DummyButton>
        </NavigationAtoms.NavLink>
      ) }
    </ConfirmationContainers.Actions>
  </ConfirmationContainers.Main>
);

export default Confirmation;
