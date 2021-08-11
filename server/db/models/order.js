import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  STRING,
  DECIMAL,
  INTEGER,
  DATE
} = Sequelize;
import moment from 'moment';

import db from '../database.js';

const Order = db.define('orders', {

  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  confirmationNumber: {
    type: INTEGER,
    autoIncrement: true,
  },

  total: {
    type: DECIMAL(10, 2),
    defaultValue: 0.00
  },

  name: {
    type: STRING,
  },

  address: {
    type: STRING
  },

  city: {
    type: STRING
  },

  state: {
    type: STRING
  },

  zip: {
    type: STRING
  },

  createdAt: {
    type: DATE,
    get() {
      return moment(this.getDataValue('createdAt')).format('MM/DD/YYYY h:mm:ss');
    }
  }
});

export default Order;
