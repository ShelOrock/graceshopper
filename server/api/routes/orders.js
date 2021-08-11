import express from 'express';

import { orderControllers } from '../controllers/index.js';

const router = express.Router();

router.post('/', orderControllers.getAllOrders);
router.get('/:orderId', orderControllers.getOrder);
router.post('/create-order', orderControllers.createOrder);

export default router;
