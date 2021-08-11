import * as React from 'react';

import PageContainer from '../Containers/Page/Page';
import Title from '../Atoms/Title';
import Header from '../Containers/Page/Header';
import Section from '../Containers/Page/Section';

export default ({
  title,
  breadcrumbs,
  order
}) => (
  <PageContainer>
    <Header>
      <Title>{ title }</Title>
      { breadcrumbs }
    </Header>
    <Section>{ order }</Section>
  </PageContainer>
);
