import express from 'express'
import session from 'express-session';
import dotenv from 'dotenv';

import { userServices, cartServices } from '../api/services/index.js';

if (process.env.NODE !== 'production') {
  dotenv.config();
}

const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: oneDay
  },
}));

app.use(async (req, res, next) => {
  try {
    const userOrNull = await userServices.getUserBySession(req.session.id);
    if (!userOrNull) {
      const createdUser = await userServices.createGuest(req.session.id);
      await cartServices.createCart({ userId: createdUser.id })
      res.cookie('sessionId', createdUser.sessionId, {
        path: '/',
        expires: new Date(Date.now() + oneDay)
      });
      req.user = createdUser;
      next();

    } else {
      req.user = userOrNull
      next();
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
});

export default app;
