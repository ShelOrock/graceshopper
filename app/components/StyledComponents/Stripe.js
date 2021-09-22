import styled, { css } from 'styled-components';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';

const CardElements = css`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
`;

export const CardNumber = styled(CardNumberElement)`
  ${ CardElements }
`;

export const Expiration = styled(CardExpiryElement)`
  ${ CardElements }
  width: 100%;
`;

export const SecurityCode = styled(CardCvcElement)`
  ${ CardElements }
  width: 100%;
`;
