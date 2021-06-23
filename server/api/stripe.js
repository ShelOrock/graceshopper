import express from 'express';
import stripe from 'stripe'

const router = express.Router();

const activatedStripe = stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', (req, res, next) => {
  const {
    amount,
    shipping: { name, address }
  } = req.body;

  activatedStripe.paymentIntents
    .create({
      amount: Number(amount * 100 || 100).toFixed(0),
      currency: 'usd',
      shipping: {
        name,
        address
      }
    })
    .then(paymentIntent => {
      res.status(200).send(paymentIntent);
    })
    .catch(e => {
      console.log(e);
      res.status(500);
      next(e);
    });
});

export default router;
