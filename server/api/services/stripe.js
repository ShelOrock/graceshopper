import Stripe from 'stripe'
import dotenv from 'dotenv';

if (process.env.NODE !== 'production') {
  dotenv.config();
}

const activatedStripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async payload => {
  try {
    const paymentIntent = await activatedStripe.paymentIntents.create(payload);
    return paymentIntent;

  } catch(e) {
    throw Error(e.message, 'Error creating payment intent');
  };
};
