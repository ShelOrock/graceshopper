import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  DECIMAL
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
    allowNull: false
  },
});

export default Order;
