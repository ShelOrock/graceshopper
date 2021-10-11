import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HomeTemplate } from '../Templates';
import { Grid } from '../Organisms';
import { ProductCard } from '../Molecules';

import { cartThunks, wishlistThunks } from '../../redux/thunks';

const HomePage = () => {

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
          renderData={ product => (
            <ProductCard 
              key={ product.id }
              product={ product }
              user={ activeUser }
              addProductToCart={ () => dispatch(cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              )) }
              addToWishlist={ () => dispatch(wishlistThunks.addToWishlist(
                activeUser.id,
                { productId: product.id }
              )) }
              productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(product.id) }
            />
          ) }
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
              user={ activeUser }
              addProductToCart={ () => dispatch(cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              )) }
              addToWishlist={ () => dispatch(wishlistThunks.addToWishlist(
                activeUser.id,
                { productId: product.id }
              )) }
              productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(product.id) }
            />
          ) }
        />
      }
    />
  );
};

export default HomePage;
