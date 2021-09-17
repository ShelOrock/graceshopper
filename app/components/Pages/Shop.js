import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ShopTemplate from '../Templates/Shop';
import Pagination from '../Molecules/Pagination';

import { allProductsThunks } from '../../redux/thunks';
import ProductCard from '../Molecules/ProductCard';
import Grid from '../Organisms/Grid';

const ShopPage = () => {

  const dispatch = useDispatch();

  const {
    allProducts,
    wishlist,
    activeUser
  } = useSelector(state => state);

  const [ page, setPage ] = useState(0);

  useEffect(() => {
    dispatch(allProductsThunks.getAllProducts(4, page));
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
        <Grid
          listData={ allProducts.rows }
          renderData={ product => (
            <ProductCard
              key={ product.id }
              product={ product }
              wishlist={ wishlist }
              user={ activeUser }
            />
          )}
        />
      }
    />
  );
};

export default ShopPage;
