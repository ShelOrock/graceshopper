import Sequelize from 'sequelize';
const { Op } = Sequelize;

import { Product, Tag } from '../../db/index.js';

export const getProductByPrimaryKey = async productId => {

  try {
    const product = await Product.findByPk(productId, {
      include: [{ model: Tag }]
    });

    return product

  } catch(e) {
    throw Error('Error getting product by primary key');
  };
};

export const getFeaturedProducts = async () => {
  
  try {
    const products = await Product.findAll({
      where: { isFeatured: true },
      limit: 4
    });

    return products;

  } catch(e) {
    throw Error('Error getting featured products');
  };
};

export const getLimitedProducts = async productIdArray => {
  
  try {
    const products = await Product.findAll({
      where: {
        id: {
          [Op.in]: productIdArray
        }
      }
    });

    return products

  } catch(e) {
    throw Error('Error getting limited products');
  };
};
