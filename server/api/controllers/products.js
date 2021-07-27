import { productServices, tagServices } from '../services/index.js';

export const getPaginatedProducts = async (_req, res, next) => {

  try {
  res
    .status(200)
    .send(foundModels);

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const getSingleProduct = async (req, res, next) => {

  try {
    const productOrNull = await productServices.getProductByPrimaryKey(req.params.productId);

    if(!productOrNull) {
      res.sendStatus(404);

    } else {
      res
        .status(200)
        .send(productOrNull);
    };
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(e);
  };
};

export const getFeaturedProducts = async (_req, res, next) => {

  try {
    const productsOrNull = await productServices.getFeaturedProducts();

    if(!productsOrNull) {
      res.sendStatus(200)

    } else {
      res
        .status(200)
        .send(productsOrNull)
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const getPopularProducts = async (_req, res, next) => {

  try {
    const tagsOrNull = await tagServices.getPopularTags();
  
    if(!tagsOrNull) {
      res.sendStatus(200);

    } else {
      let productsToSend = [];
      tagsOrNull.forEach(tags => {
        productsToSend = [ ...productsToSend, ...tags.products ]
      });

      res
        .status(200)
        .send(productsToSend);
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const getSimilarProducts = async (req, res, next) => {

  try {
    let tagIds = [];
    if(req.body.tags.length) {
      tagIds = [ ...req.body.tags.map(tag => tag.id) ];
    };

    const tagsOrNull = await tagServices.getLimitedTags(tagIds);

    if(!tagsOrNull) {
      res.sendStatus(200);

    } else {
      const PRODUCT_LIMIT = 4;
  
      let productsOnAllTags= [];
      tagsOrNull.forEach(tag => {
        productsOnAllTags = [ ...productsOnAllTags, ...tag.products ]
      });
  
      let productIdsOnAllTags = productsOnAllTags.map(product => product.id);
  
      let uniqueProducts = [];
      productIdsOnAllTags.forEach(productId => {
        if(!uniqueProducts.includes(productId)) {
          uniqueProducts = [ ...uniqueProducts, productId ];
        };
      });
        
      //Remove the Active Product from the similar Product List
      let filteredProducts = uniqueProducts.filter(product => product !== req.body.productId);
  
      //Reduces similar Products to 4.
      const productIdsToSend = filteredProducts.slice(0, PRODUCT_LIMIT);
  
      const productsToSend = await productServices.getLimitedProducts(productIdsToSend);
      
      res
        .status(200)
        .send(productsToSend)
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};
