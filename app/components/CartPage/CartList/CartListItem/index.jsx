import * as React from 'react';

import CartListItemContainer from './CartListItemContainer.jsx';
import ProductImage from './ProductImage.jsx';
import InformationContainer from './Information/index.jsx';
import Header from './Information/Header/index.jsx';
import HeaderInformation from './Information/Header/HeaderInformation/index.jsx';
import ProductName from './Information/Header/HeaderInformation/ProductName.jsx';
import UnitPrice from './Information/Header/HeaderInformation/UnitPrice.jsx';
import ButtonsContainer from './Information/Header/ButtonsContainer/index.jsx';
import AddToWishlistButton from './Information/Header/ButtonsContainer/AddToWishlistButton.jsx';
import RemoveButton from './Information/Header/ButtonsContainer/RemoveButton.jsx';
import Body from './Information/Body/index.jsx';
import QuantityContainer from './Information/Body/QuantityContainer';
import DecrementButton from './Information/Body/QuantityContainer/DecrementButton.jsx';
import Quantity from './Information/Body/QuantityContainer/Quantity.jsx';
import IncrementButton from './Information/Body/QuantityContainer/IncrementButton.jsx';
import ProductTotal from './Information/Body/ProductTotal.jsx';

export default (cartItem) => (
  <CartListItemContainer>
    <ProductImage { ...cartItem } />
    <InformationContainer>
      <Header>
        <HeaderInformation>
          <ProductName { ...cartItem } />
          <UnitPrice { ...cartItem } />
        </HeaderInformation>
        <ButtonsContainer>
          <AddToWishlistButton { ...cartItem } />
          <RemoveButton { ...cartItem } />
        </ButtonsContainer>
      </Header>
      <Body>
        <QuantityContainer>
          <DecrementButton { ...cartItem } />
          <Quantity { ...cartItem } />
          <IncrementButton { ...cartItem } />
        </QuantityContainer>
        <ProductTotal { ...cartItem } />
      </Body>
    </InformationContainer>
  </CartListItemContainer>
);
