import express from 'express';

import { Cart, CartItem } from '../db/index.js';

const router = express.Router();

router.get('/:userId', (req, res, next) => {
  Cart.findOne({
    where: {
      userId: req.params.userId
    }
  })
  .then(cartOrNull => {
    if(!cartOrNull) {
      Cart.create()
      .then(createdCart => {
        res
          .status(201)
          .send(createdCart, {
            include: [{ model: CartItem }]
          });
      });
    } else {
      res
        .status(200)
        .send(cartOrNull, {
          include: [{ model: CartItem }]
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

export default router;