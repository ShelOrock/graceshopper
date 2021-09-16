import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductTemplate from '../Templates/Product';
import BreadCrumbs from '../Molecules/BreadCrumbs';
import Product from '../Molecules/Product';
import ProductList from '../Organisms/ProductList';

import { activeProductThunks, similarProductsThunks } from '../../redux/thunks';

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
    dispatch(activeProductThunks.getActiveProduct(productId));
    setQuantityToAdd(1);
  }, [productId]);
  useEffect(() => {
    if(activeProduct.id) {
      dispatch(similarProductThunks.getSimilarProducts(activeProduct.tags, activeProduct.id))
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
          setQuantityToAdd={ setQuantityToAdd }
          wishlist={ wishlist.products }
          dispatch={ dispatch }
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

export default ProductPage;
