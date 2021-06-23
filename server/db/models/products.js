import Sequelize from 'sequelize';

import db from './../database.js';

const {
  UUID,
  UUIDV4,
  STRING,
  DECIMAL,
  TEXT,
  INTEGER,
  BOOLEAN
} = Sequelize;

const Product = db.define('products', {

  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  productName: {
    type: STRING,
    allowNull: false,
  },

  productDescription: {
    type: TEXT
  },

  unitPrice: {
    type: DECIMAL(10, 2),
    allowNull: false
  },

  inventory: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  },

  productImage: {
    type: STRING,
    defaultValue: 'No image'
  },

  tags: {
    type: STRING
  },

  featured: {
    type: BOOLEAN
  }

});

export default Product;
