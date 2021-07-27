import express from 'express'

import { authenticationControllers } from '../controllers/index.js';

const router = express.Router();

router.post('/login', authenticationControllers.attemptUserLogin);
router.post('/logout', authenticationControllers.userLogout);
router.post('/signup', authenticationControllers.attemptUserSignup);

export default router;