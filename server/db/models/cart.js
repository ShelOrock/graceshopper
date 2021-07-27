import Sequelize from 'sequelize';
const { UUID, UUIDV4 } = Sequelize;

import db from './../database.js';

const Cart = db.define('cart', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
});

export default Cart;
