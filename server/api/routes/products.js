import express from 'express';

import { productControllers } from '../controllers/index.js';

import { paginate } from '../middleware.js';

import { Product } from '../../db/index.js';

const router = express.Router();

router.get('/limit/:limit/page/:page', paginate(Product), productControllers.getPaginatedProducts);
router.get('/:productId', productControllers.getProduct);
router.post('/featured', productControllers.getFeaturedProducts);
router.post('/popular', productControllers.getPopularProducts);
router.post('/similar', productControllers.getSimilarProducts);

export default router;
