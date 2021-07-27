import express from 'express'

import authenticationRouter from './authentication.js';
import usersRouter from './users.js';
import cartRouter from './cart.js';
import productsRouter from './products.js';
import ordersRouter from './orders.js';
import stripeRouter from './stripe.js';
import githubRouter from './github.js';

const router = express.Router();

router.use('/authentication', authenticationRouter)
router.use('/users', usersRouter);
router.use('/cart', cartRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/stripe', stripeRouter);
router.use('/github', githubRouter);

router.use((_req, res, next) => {
  const err = new Error('API route not found');
  res.status(404);
  next(err);
});

export default router;
