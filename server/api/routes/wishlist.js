import express from 'express';

import { wishlistControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/:userId', wishlistControllers.getWishlist);
router.post('/:userId/add', wishlistControllers.addProductToWishlist);
router.post('/:userId/remove', wishlistControllers.removeProductFromWishlist);

export default router;