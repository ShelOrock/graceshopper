import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { Elements } from '@stripe/react-stripe-js';
import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const stripe = loadStripe('pk_test_51JCDlcJxm4J61jnKA83le7sgVjl87qtFuaICUMNr6Far0GiH0IupD3D7AC4Qh1hg1nIXrXRZF2TQpbptwn1aEs5200o5Q1A4Ve');

const CheckoutTemplate = ({
  title,
  breadcrumbs,
  userInformation,
  shipping,
  payment
}) => (
  <Elements stripe={ stripe }>
    <PageContainers.Main>
      <PageContainers.Header>
        <TypeAtoms.Title>{ title }</TypeAtoms.Title>
        { breadcrumbs }
      </PageContainers.Header>
      <PageContainers.Section>{ userInformation }</PageContainers.Section>
      <PageContainers.Section>{ shipping }</PageContainers.Section>
      <PageContainers.Section>{ payment }</PageContainers.Section>
    </PageContainers.Main>
  </Elements>
);

export default CheckoutTemplate;
