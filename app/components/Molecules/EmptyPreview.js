import React from 'react';


import PreviewContainer from '../Containers/Preview/Main';
import EmptyPreviewContainer from '../Containers/Preview/Empty';
import Heading from '../Atoms/Heading';
import Body from '../Atoms/Body';
import Link from '../Atoms/Link';
import DummyButton from '../Atoms/DummyButton';

export default () => (
  <PreviewContainer>
    <Heading>Cart Preview</Heading>
    <EmptyPreviewContainer>
      <Body>Your shopping cart is empty. Better fix that!</Body>
      <Link to={ '/shop' }>
        <DummyButton variant='secondary'>Go shopping</DummyButton>
      </Link>
    </EmptyPreviewContainer>
  </PreviewContainer>
);
