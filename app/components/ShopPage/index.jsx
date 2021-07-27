import React from 'react';
const { useState, useEffect } = React;
import { useDispatch } from 'react-redux';

import ShopPageList from './ShopPageList.jsx';
import ShopPageSelect from './ShopPageSelect/index.jsx';
import * as StyledComponents from '../StyledComponents/index.jsx';
const {
  StyledType: { Title },
  StyledShopPage: { ShopPageContainer },
} = StyledComponents;

import * as reduxThunks from '../../redux/thunks.jsx';
const { allProductsThunks: { getAllProducts } } = reduxThunks;

export default () => {
  const dispatch = useDispatch();

  const [ page, setPage ] = useState(0);

  useEffect(() => {
    dispatch(getAllProducts(4, page))
  }, [page]);

  return (
    <ShopPageContainer>
      <Title>Shop</Title>
      <ShopPageSelect page={ page } setPage={ setPage }/>
      <ShopPageList />
      <ShopPageSelect page={ page } setPage={ setPage }/>
    </ShopPageContainer>
  )
}