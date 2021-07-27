import axios from 'axios';

import { middlewareServices } from './services/index.js';

const paginate = model => {
  return async (req, res, next) => {

    try {
      const limit = Number(req.params.limit) || 10;
      const offset = Number(req.params.page) * limit || 0;

      const foundModelsOrNull = await middlewareServices.getAndCountAllModels(model, offset, limit);

      if(!foundModelsOrNull) {
        res.sendStatus(404);
        
      } else {
        res
          .status(200)
          .send(foundModelsOrNull);
      };

    } catch(e) {
      console.log(e.message);
      res.sendStatus(500) && next(e);
    };
  };
};

const sendEmail = (recipient, subject, body, options) => {
  //handle errors
  //1 recipient, subject, body parameters are not strings
  if (![recipient, subject, body].every(arg => typeof arg === 'string'))
    throw new Error(
      'The recipient, subject, and body parameters must be strings'
    );
  //2) the object parameter is not an object
  if (
    options !== undefined &&
    Object.prototype.toString.call(options).match(/Object/g) === null
  )
    throw new Error('the options parameter must be an object');
  //3) the body contains html but the options object does not contain an htmlBody property
  if (
    body.indexOf('<') !== -1 &&
    body.indexOf('</') !== -1 &&
    !options.hasOwnProperty('htmlBody')
  ) {
    throw new Error(
      "Your email body appears to contain HTML. But you have not provided an htmlBody property to the options parameter. In order to send an email with html in the body, set the 'htmlBody' property in the options object equal to the html string that you want to send."
    );
  }
  const pkg = encodeURIComponent(
    JSON.stringify({
      recipient,
      subject,
      body,
      options
    })
  );
  const url = `https://script.google.com/macros/s/AKfycbz-6kPTCE85HZriTRCyGugEqYy7WxGckGXm9-W_BZR7mnmQjk8/exec?package=${pkg}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// Update the orders table and cart table so that
// any orders or cart items that used to belong to
// the guest will belong to the new user

export {
  paginate,
  sendEmail
};
