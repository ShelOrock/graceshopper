import express from 'express';

import { userControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/:userId', userControllers.getUser);

export default router;
