import { createPaymentIntent } from '../services/stripe.js'

export const attemptPayment = async (req, res, next) => {
  try {
    const paymentIntent = await createPaymentIntent({
      amount: Math.round(req.body.amount * 100),
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.status(200).send(paymentIntent);

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};