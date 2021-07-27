import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();

//Allows file uploads no bigger than 5MB.
app.use((reqs, req, next) => {
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
  })
  next();
});

export default app;
