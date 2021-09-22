import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import store from './redux/store.js';
import Root from './Root.js';

const stripe = loadStripe('pk_test_51JCDlcJxm4J61jnKA83le7sgVjl87qtFuaICUMNr6Far0GiH0IupD3D7AC4Qh1hg1nIXrXRZF2TQpbptwn1aEs5200o5Q1A4Ve');

render(
  <Provider store={ store }>
    <Elements stripe={ stripe }>
      <Root />
    </Elements>
  </Provider>,
  document.getElementById('main')
);
