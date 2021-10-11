import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ProductTemplate } from '../Templates';
import { Grid, BreadCrumbs } from '../Organisms';

import {
  Crumb,
  Product,
  ProductCard
} from '../Molecules';

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
          listData={ [
            { to: '/', name: 'Home' },
            { to: '/shop', name: 'Shop' },
            { to: `/products/${ activeProduct.id }`, name: activeProduct.productName }
          ] }
          renderData={ (
            crumb,
            index,
            breadcrumbs
          ) => (
            <Crumb
              key={ index }
              to={ crumb.to }
              name={ crumb.name }
              lastElement={ index === breadcrumbs.length - 1 }
            />
          ) }
        />
      }
      product={
        <Product
          product={ activeProduct }
          user={ activeUser }
          quantityToAdd={ quantityToAdd }
          decrementQuantityToAdd={ () => setQuantityToAdd(quantityToAdd - 1) }
          incrementQuantityToAdd={ () => setQuantityToAdd(quantityToAdd + 1) }
          addProductToCart={ () => dispatch(cartThunks.addProductToCart(
            activeUser.id,
            { productId: activeProduct.id, quantity: quantityToAdd || 1 }
          )) }
          addToWishlist={ () => dispatch(wishlistThunks.addToWishlist(
            activeUser.id,
            { productId: activeProduct.id }
          )) }
          productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(activeProduct.id) }
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
              addProductToCart={ () => dispatch(cartThunks.addProductToCart(
                activeUser.id,
                { productId: product.id, quantity: 1 }
              )) }
              addTowishlist={ () => dispatch(wishlistThunks.addToWishlist(
                activeUser.id,
                { productOd: activeProduct.id }
              )) }
              productOnWishlist={ !!wishlist.products.length && wishlist.products.map(item => item.id).includes(product.id) }
            />
          ) }
        />
      }
    />
  );
};

export default ProductPage;
