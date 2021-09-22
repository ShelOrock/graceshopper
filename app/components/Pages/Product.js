import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ProductTemplate } from '../Templates';
import { Grid } from '../Organisms';

import {
  BreadCrumbs,
  Product,
  ProductCard } from '../Molecules';

import {
  activeProductThunks,
  similarProductsThunks,
  cartThunks,
  wishlistThunks
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
          decrementQuantityToAdd={ () => setQuantityToAdd(quantityToAdd - 1) }
          incrementQuantityToAdd={ () => setQuantityToAdd(quantityToAdd + 1) }
          dispatch={ dispatch }
          addProductToCart={ () => cartThunks.addProductToCart(
            activeUser.id,
            { productId: activeProduct.id, quantity: quantityToAdd || 1 }
          ) }
          addTowishlist={ () => wishlistThunks.addToWishlist(
            activeUser.id,
            { productOd: activeProduct.id }
          ) }
          productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(product.id) }
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
              user={ activeUser }
              dispatch={ dispatch }
              addProductToCart={ () => cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              ) }
              addTowishlist={ () => wishlistThunks.addToWishlist(
                activeUser.id,
                { productOd: activeProduct.id }
              ) }
              productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(product.id) }
            />
          ) }
        />
      }
    />
  );
};

export default ProductPage;
