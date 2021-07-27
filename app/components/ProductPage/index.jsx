import * as React from 'react';
const { useEffect } = React;
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductPageBreadCrumbs from './ProductPageBreadCrumbs.jsx';
import Product from './Product/index.jsx';
import SimilarProducts from './SimilarProducts/index.jsx';

import * as reduxThunks from '../../redux/thunks.jsx';
const {
  activeProductThunks: { getActiveProduct },
  similarProductsThunks: { getSimilarProducts },
} = reduxThunks;

export default () => {

  const dispatch = useDispatch();

  const { productId } = useParams();

  const { activeProduct, similarProducts } = useSelector(state => state);

  useEffect(() => {
    dispatch(getActiveProduct(productId));
  }, [productId]);
  useEffect(() => {
    if(activeProduct.id) {
      dispatch(getSimilarProducts(activeProduct.tags, activeProduct.id))
    }
  }, [activeProduct]);

  return (
    <>
      <ProductPageBreadCrumbs product={ activeProduct } />
      <Product product={ activeProduct } />
      { !!similarProducts.length && <SimilarProducts similarProducts={ similarProducts } /> }
    </>
  );
};
