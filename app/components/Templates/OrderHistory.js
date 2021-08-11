import * as React from 'react';

import PageContainer from '../Containers/Page/Page';
import Header from '../Containers/Page/Header';
import Section from '../Containers/Page/Section';
import Title from '../Atoms/Title';

export default ({
  title,
  orderHistory
}) => (
  <PageContainer>
    <Header>
      <Title>{ title }</Title>
    </Header>
    <Section>{ orderHistory }</Section>
  </PageContainer>
);
