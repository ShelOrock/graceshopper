import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  STRING,
  TEXT
} = Sequelize;

import db from './../database.js';

const Cart = db.define('cart', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  shippingName: {
    type: STRING
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
    type: STRING,
    validate: {
      len: {
        args: 5
      }
    }
  },

  shippingCountry: {
    type: STRING
  },

  shippingNotes: {
    type: TEXT
  },

  cardNumber: {
    type: STRING,
    validate: {
      len: {
        arg: [13, 16]
      }
    }
  },

  cardHolder: {
    type: STRING
  },

  expirationDate: {
    type: STRING
  },

  securityCode: {
    type: STRING,
    validate: {
      len: {
        arg: 3
      }
    }
  }
});

export default Cart;
