import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  INTEGER
} = Sequelize;

import db from '../database.js';

const CartItem = db.define('cartItem', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  quantity: {
    type: INTEGER,
    defaultValue: 0,
  },
});

export default CartItem;
