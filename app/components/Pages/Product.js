import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductTemplate from '../Templates/Product';
import BreadCrumbs from '../Molecules/BreadCrumbs';
import Product from '../Molecules/Product';
import Grid from '../Organisms/Grid';
import ProductCard from '../Molecules/ProductCard';

import {
  activeProductThunks,
  similarProductsThunks,
  cartThunks
} from '../../redux/thunks';

const ProductPage = () => {

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
    setQuantityToAdd(1);
    dispatch(activeProductThunks.getActiveProduct(productId));
  }, [productId]);
  useEffect(() => {
    if(activeProduct.id) {
      dispatch(similarProductsThunks.getSimilarProducts(activeProduct.tags, activeProduct.id))
    }
  }, [activeProduct]);

  return (
    <ProductTemplate
      title={ activeProduct.productName }
      breadcrumbs={
        <BreadCrumbs
          crumbs={ [
            { to: '/', name: 'Home' },
            { to: '/shop', name: 'Shop' },
            { to: `/products/${ activeProduct.id }`, name: activeProduct.productName }
          ] }
        />
      }
      product={
        <Product
          product={ activeProduct }
          user={ activeUser }
          quantityToAdd={ quantityToAdd }
          removeProductFromCart={ () => cartThunks.addProductToCart(
            activeUser.id,
            { productId: activeProduct.id, quantity: quantityToAdd || 1 }
          )}
          decrementQuantityToAdd={ () => setQuantityToAdd(quantityToAdd - 1) }
          incrementQuantityToAdd={ () => setQuantityToAdd(quantityToAdd + 1) }
          wishlist={ wishlist.products }
          dispatch={ dispatch }
        />
      }
      similarHeading={ !!similarProducts.length && 'Similar Products' }
      similar={
        <Grid
          listData={ similarProducts }
          renderData={ product => (
            <ProductCard
              key={ product.id }
              product={ product }
              addProductToCart={ () => cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              ) }
              wishlist={ wishlist }
              user={ activeUser }
              dispatch={ dispatch }
            />
          ) }
        />
      }
    />
  );
};

export default ProductPage;
