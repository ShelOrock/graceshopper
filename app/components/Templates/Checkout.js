import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import PageContainer from '../Containers/Page/Page';
import Header from '../Containers/Page/Header';
import Section from '../Containers/Page/Section';
import Title from '../Atoms/Title';

const stripe = loadStripe('pk_test_51JCDlcJxm4J61jnKA83le7sgVjl87qtFuaICUMNr6Far0GiH0IupD3D7AC4Qh1hg1nIXrXRZF2TQpbptwn1aEs5200o5Q1A4Ve');

export default ({
  title,
  breadcrumbs,
  userInformation,
  shipping,
  payment
}) => (
  <Elements stripe={ stripe }>
    <PageContainer>
      <Header>
        <Title>{ title }</Title>
        { breadcrumbs }
      </Header>
      <Section>{ userInformation }</Section>
      <Section>{ shipping }</Section>
      <Section>{ payment }</Section>
    </PageContainer>
  </Elements>
);
