import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser'

import sessionMiddleware from './middleware/sessions.js';
import fileUploadMiddleware from './middleware/fileUpload.js';
import apiRouter from './api/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', sessionMiddleware);
app.use('/', fileUploadMiddleware);
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Error-handling endware
app.use('/', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message } || 'Internal server error');
});

export default app;
