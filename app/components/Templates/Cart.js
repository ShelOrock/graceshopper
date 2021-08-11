import * as React from 'react';
import Title from '../Atoms/Title';

import PageContainer from '../Containers/Page/Page';
import Header from '../Containers/Page/Header';
import Section from '../Containers/Page/Section';

export default ({
  title,
  cart
}) => (
  <PageContainer>
    <Header>
      <Title>{ title }</Title>
   </Header>
    <Section>{ cart }</Section>
  </PageContainer>
);
