import express from 'express'

import authenticationRouter from './authentication.js';
import usersRouter from './users.js';
import productsRouter from './products.js';
import cartRouter from './cart.js';
import wishlistRouter from './wishlist.js';
import ordersRouter from './orders.js';
import stripeRouter from './stripe.js';

const router = express.Router();

router.use('/authentication', authenticationRouter)
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/wishlist', wishlistRouter);
router.use('/orders', ordersRouter);
router.use('/stripe', stripeRouter);

router.use((_req, res, next) => {
  const err = new Error('API route not found');
  res.status(404);
  next(err);
});

export default router;
