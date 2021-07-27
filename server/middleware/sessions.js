import express from 'express'
import session from 'express-session';
import dotenv from 'dotenv';

import { userServices } from '../api/services/index.js';

if (process.env.NODE !== 'production') {
  dotenv.config();
}

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24
  },
}));

app.use(async (req, res, next) => {

  try {
    const userOrNull = await userServices.getUserBySession(req.session.id);

    if (!userOrNull) {
      const createdUser = await userServices.createGuest(req.session.id);
      res.cookie('sessionId', createdUser.sessionId);
      next();

    } else {
      res.cookie('sessionId', userOrNull.sessionId)
      next();
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
});

export default app;
