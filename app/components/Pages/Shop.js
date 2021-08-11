import * as React from 'react';
const { useState, useEffect } = React;
import { useDispatch, useSelector } from 'react-redux';

import ShopTemplate from '../Templates/Shop';
import Pagination from '../Molecules/Pagination';
import ProductList from '../Organisms/ProductList';

import * as reduxThunks from '../../redux/thunks';
const { allProductsThunks: { getAllProducts } } = reduxThunks;

export default () => {

  const dispatch = useDispatch();

  const {
    allProducts,
    wishlist,
    activeUser
  } = useSelector(state => state);

  const [ page, setPage ] = useState(0);

  useEffect(() => {
    dispatch(getAllProducts(4, page));
  }, [page]);

  return (
    <ShopTemplate
      title={ 'Shop' }
      pagination={
        <Pagination
          page={ page }
          setPage={ setPage }
          allProducts={ allProducts }
        />
      }
      productsHeading={ 'Products' }
      products={
        <ProductList
          products={ allProducts.rows }
          wishlist={ wishlist.products }
          user={ activeUser }
        />
      }
    />
  );
};
