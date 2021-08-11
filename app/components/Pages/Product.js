import * as React from 'react';
const { useState, useEffect } = React;
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductTemplate from '../Templates/Product';
import BreadCrumbNavigation from '../Molecules/BreadCrumbNavigation';
import Product from '../Molecules/Product';
import ProductList from '../Organisms/ProductList';

import * as reduxThunks from '../../redux/thunks';
const {
  activeProductThunks: { getActiveProduct },
  similarProductsThunks: { getSimilarProducts }
} = reduxThunks;

export default () => {

  const dispatch = useDispatch();

  const { productId } = useParams();

  const {
    activeProduct,
    similarProducts,
    wishlist,
    activeUser
  } = useSelector(state => state);

  const [ quantityToAdd, setQuantityToAdd ] = useState(1);

  useEffect(() => {
    dispatch(getActiveProduct(productId));
    setQuantityToAdd(1);
  }, [productId]);
  useEffect(() => {
    if(activeProduct.id) {
      dispatch(getSimilarProducts(activeProduct.tags, activeProduct.id))
    }
  }, [activeProduct]);

  return (
    <ProductTemplate
      title={ activeProduct.productName }
      breadcrumbs={
        <BreadCrumbNavigation
          firstCrumb={ {
            to: '/',
            name: 'Home'
          } }
          secondCrumb={ {
            to: '/shop',
            name: 'Shop'
          } }
          thirdCrumb={ {
            to: `/products/${ activeProduct.id }`,
            name: activeProduct.productName
          } }
        />
      }
      product={
        <Product
          product={ activeProduct }
          user={ activeUser }
          quantityToAdd={ quantityToAdd }
          setQuantityToAdd={ setQuantityToAdd }
          wishlist={ wishlist.products }
        />
      }
      similarHeading={ !!similarProducts.length && 'Similar Products' }
      similar={
        !!similarProducts.length && (
          <ProductList
            products={ similarProducts }
            wishlist={ wishlist.products }
            user={ activeUser }
          />
        )
      }
    />
  );
};
