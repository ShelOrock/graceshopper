import express from 'express';

import { stripeControllers } from '../controllers/index.js';

const router = express.Router();

router.post('/create-payment-intent', stripeControllers.attemptPayment);

export default router;
