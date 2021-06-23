import Sequelize from 'sequelize';
const {
  UUID,
  UUIDV4,
  STRING,
  BOOLEAN,
  DATEONLY
} = Sequelize;

import db from '../database.js';

const User = db.define('users', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  sessionId: {
    type: STRING,
    allowNull: true
  },

  userType: {
    type: STRING,
    allowNull: false,
    //may need to update this later depends on how a user chooses his type
    validate: {
      isIn: [
        ['Guest', 'Standard', 'Admin', 'GitHub User']
      ]
    }
  },

  email: {
    type: STRING,
    allowNull: true,
    unique: true,
    validate: {
      customValidator(value) {
        if (value === null && this.userType !== 'Guest') {
          throw new Error('Email address cannot be null unless user type is guest');
        }
      },
      isEmail: {
        arg: true,
        msg: 'Email address must be valid'
      }
    }
  },

  password: {
    type: STRING,
    allowNull: true,
    validate: {
      customValidator(value) {
        if (value === null && this.userType !== 'Guest') {
          throw new Error('Password cannot be null unless user type is guest');
        }
      },
      len: {
        arg: [8, 20]
      }
    }
  },

  isLoggedIn: {
    type: BOOLEAN,
    defaultValue: false
  },

  firstName: {
    type: STRING
  },

  lastName: {
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
    len: {
      arg: 5
    }
  },

  cardNumber: {
    type: STRING,
  },

  cardholder: {
    type: STRING
  },

  expirationDate: {
    type: DATEONLY
  },

  securityCode: {
    type: STRING,
  },

  billingAddress: {
    type: STRING
  },

  billingCity: {
    type: STRING
  },

  billingState: {
    type: STRING
  },

  billingZip: {
    type: STRING,
    len: {
      arg: 5
    }
  },

  githubAccessToken: {
    type: STRING,
  }
});

export default User;
