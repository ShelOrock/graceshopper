import express from 'express'
import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';

import {
  User,
  Cart,
  CartItem
} from '../db/index.js';

const router = express.Router();

const SALT_ROUNDS = 12;

router.post('/login', (req, res, next) => {
  User.scope('withPassword').findOne({
    where: {
      email: req.body.email
    }
  })
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send('User not found');
    } else {
      bcrypt.compare(req.body.password, userOrNull.password)
      .then(result => {
        if(!result) {
          res
            .status(401)
            .send('Credentials incorrect')
        } else {
          userOrNull.update({
            sessionId: req.session.id,
            isLoggedIn: true
          })
          .then(() => {
            User.findOne({
              where: Sequelize.and(
                { sessionId: req.sessionId },
                { userType: 'Guest' }
              )
            })
            .then(userToDestroy => {
              CartItem.findAll({
                where: {
                  cartId: userToDestroy.cartId
                }
              })
              .then(cartItemsToMerge => {
                cartItemsToMerge.forEach(cartItem => {
                  cartItem.update({
                    cartId: userOrNull.cartId
                  });
                });
              });
            })
            .then(() => {
              userToDestroy.destroy({
                include: [{ model: Cart }]
              })
            })
            .then(() => {
              User.findOne({
                where: {
                  email: req.body.email
                },
                attributes: {
                  exclude: [ 'password' ]
                }
              })
              .then(user => {
                res
                  .status(201)
                  .send(user)
              });
            });
          });
        };
      });
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/logout', (req, res, next) => {
  User.update({
    isLoggedIn: false,
    where: {
      userId: req.body.userId
    }
  })
  .then(() => {
    User.create({
      userType: 'Guest',
      session: req.session.id
    })
    .then(guest => {
      res
        .status(201)
        .send(guest)
    })
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/signup', (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
  User.create({
    sessionId: req.session.id,
    email: req.body.email,
    password: hashedPassword,
    userType: 'Standard'
  })
  .then(createdUser => {
    User.findOne({
      where: Sequelize.and(
        { sessionId: req.session.id },
        { userType: 'Guest' }
      )
    })
    .then(userToDestroy => {
      CartItem.findAll({
        where: {
          cartId: userToDestroy.cartId
        }
      })
      .then(cartItemsToMerge => {
        cartItemsToMerge.forEach(cartItem => {
          cartItem.update({
            cartId: createdUser.cartId
          })
        });
      });
    })
    .then(() => {
      userToDestroy.destroy({
        include: [{ model: Cart }]
      })
    })
  })
  .then(() => {
    User.findOne({
      where: {
        email: req.body.email
      },
      attributes: {
        exclude: [ 'password' ]
      }
    })
    .then(user => {
      res
        .status(201)
        .send(user)
    });
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  })
})

export default router;