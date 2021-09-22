import React from 'react';

import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import { ConfirmationContainers } from '../Containers';

const Confirmation = ({
  order = {},
  user = {}
}) => (
  <ConfirmationContainers.Main>
    <TypeAtoms.Heading>Order confirmed!</TypeAtoms.Heading>
    <TypeAtoms.Body>Your Order No. is { order.confirmationNumber }</TypeAtoms.Body>
    <ConfirmationContainers.Actions>
      <NavigationAtoms.TextLink to={ '/' }>
        <ButtonAtoms.Button variant='secondary'>Take me home</ButtonAtoms.Button>
      </NavigationAtoms.TextLink>
      { user.isLoggedIn && (
        <NavigationAtoms.TextLink to={ `/order-history/${ order.id }` }>
          <ButtonAtoms.Button variant='secondary'>Review my order</ButtonAtoms.Button>
        </NavigationAtoms.TextLink>
      ) }
    </ConfirmationContainers.Actions>
  </ConfirmationContainers.Main>
);

export default Confirmation;
