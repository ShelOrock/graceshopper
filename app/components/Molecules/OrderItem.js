import * as React from 'react';

import ListItemContainer from '../Containers/OrderCard/ListItem';
import ContentContainer from '../Containers/OrderCard/Content';
import HeaderContainer from '../Containers/OrderCard/Header';
import InformationContainer from '../Containers/OrderCard/Information';
import BodyContainer from '../Containers/OrderCard/Body';
import QuantityContainer from '../Containers/OrderCard/Quantity';
import Thumbnail from '../Atoms/Thumbnail';
import Heading from '../Atoms/Heading';
import SubHeading from '../Atoms/SubHeading';
import Body from '../Atoms/Body';
import Link from '../Atoms/Link';

export default ({
  cartItem = {},
  product = {}
}) => (
  <Link to={ `/products/${ product.id }` }>
    <ListItemContainer>
      <Thumbnail src={ product.productImage } />
        <ContentContainer>
          <HeaderContainer>
            <InformationContainer>
              <Heading>{ product.productName }</Heading>
              <SubHeading>${ product.unitPrice }</SubHeading>
            </InformationContainer>
          </HeaderContainer>
        <BodyContainer>
          <QuantityContainer>
            <Body>Quantity: { cartItem.quantity }</Body>
          </QuantityContainer>
          <Body>Subtotal: ${ (cartItem.quantity * product.unitPrice).toFixed(2) }</Body>
        </BodyContainer>
      </ContentContainer>
    </ListItemContainer>
  </Link>
);
