import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ShopTemplate } from '../Templates';
import { Grid } from '../Organisms';
import { Pagination, ProductCard } from '../Molecules';

import {
  allProductsThunks,
  cartThunks,
  wishlistThunks
} from '../../redux/thunks';

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
          decrementPage={ () => setPage(page - 1) }
          incrementPage={ () => setPage(page + 1) }
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
              user={ activeUser }
              dispatch={ dispatch }
              addProductToCart={ () => cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              ) }
              addToWishlist={ () => wishlistThunks.addToWishlist(
                activeUser.id,
                { productId: product.id }
              ) }
              productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(product.id) }
            />
          )}
        />
      }
    />
  );
};

export default ShopPage;
