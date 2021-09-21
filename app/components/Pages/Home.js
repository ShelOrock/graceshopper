import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeTemplate from '../Templates/Home';
import Grid from '../Organisms/Grid';
import ProductCard from '../Molecules/ProductCard';

import { cartThunks } from '../../redux/thunks';

export default () => {

  const dispatch = useDispatch();

  const {
    featuredProducts,
    popularProducts,
    wishlist,
    activeUser
  } = useSelector(state => state);

  return (
    <HomeTemplate 
      featuredHeading={ !!featuredProducts.length && 'Featured Products' }
      featured={
        <Grid
          listData={ featuredProducts }
          renderData={product => (
            <ProductCard 
              key={ product.id }
              product={ product }
              wishlist={ wishlist }
              addProductToCart={ () => cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              ) }
              user={ activeUser }
              dispatch={ dispatch }
            />
          )}
        />
      }
      popularHeading={ !!popularProducts.length && 'Popular Products' }
      popular={
        <Grid
          listData={ popularProducts }
          renderData={ product => (
            <ProductCard
              key={ product.id }
              product={ product }
              wishlist={ wishlist }
              addProductToCart={ () => cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              ) }
              user={ activeUser }
              dispatch={ dispatch }
            />
          ) }
        />
      }
    />
  );
};
