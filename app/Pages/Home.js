import * as React from 'react';
import { useSelector } from 'react-redux';

import HomeTemplate from '../Components/Templates/Home';
import ProductList from '../Components/Organisms/ProductList';

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
        !!featuredProducts.length && (
          <ProductList
            products={ featuredProducts }
            wishlist={ wishlist.products }
            user={ activeUser }
          />
        )
      }
      popularHeading={ !!popularProducts.length && 'Popular Products' }
      popular={
        !!popularProducts.length && (
          <ProductList
            products={ popularProducts }
            wishlist={ wishlist.products }
            user={ activeUser }
          />
        )
      }
    />
  );
};
