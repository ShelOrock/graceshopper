import * as React from 'react';
import { useSelector } from 'react-redux';

import HomeTemplate from '../Templates/Home';
import Grid from '../Organisms/Grid';
import ProductCard from '../Molecules/ProductCard';

export default () => {

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
              wishlist={ wishlist }
              user={ activeUser }
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
              wishlist={ wishlist }
              user={ activeUser }
            />
          ) }
        />
      }
    />
  );
};
