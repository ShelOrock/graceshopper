import express from 'express';

import { cartControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/:userId', cartControllers.getCart);
router.post('/createCart', cartControllers.createCart);
router.delete('/:userId', cartControllers.deleteCart);
router.post('/:userId/addProduct', cartControllers.addProductToCart);
router.post('/:userId/removeProduct', cartControllers.removeProductFromCart);
router.post('/:userId/updateCartItem', cartControllers.updateCartItem);

export default router;