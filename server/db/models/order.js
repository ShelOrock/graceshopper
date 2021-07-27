import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  STRING,
  DECIMAL,
} = Sequelize;

import db from '../database.js';

const Order = db.define('orders', {

  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  orderTotal: {
    type: DECIMAL(10, 2),
    defaultValue: 0.00
  },

  shippingAddress: {
    type: STRING
  },

  shippingCity: {
    type: STRING
  },

  shippingState: {
    type: STRING
  },

  shippingZip: {
    type: STRING
  }
});

export default Order;
