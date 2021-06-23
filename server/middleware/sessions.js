import express from 'express'
import session from 'express-session';
import dotenv from 'dotenv';

import { User } from '../db/index.js';

if (process.env.NODE !== 'production') {
  dotenv.config();
}

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24
  },
}));

app.use((req, res, next) => {
  User.findOne({
    where: {
      sessionId: req.session.id
    }
  })
  .then(userOrNull => {
    if (!userOrNull) {
      User.create({
        sessionId: req.session.id,
        userType: 'Guest',
        isOnline: true,
      })
      .then(user => {
        res.cookie('sessionId', user.sessionId)
        next();
      })
    } else {
      res.cookie('sessionId', userOrNull.sessionId)
      next();
    }
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

export default app;
