import styled from 'styled-components';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';

export const CardNumberInput = styled(CardNumberElement)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
`;

export const SecurityCodeInput = styled(CardCvcElement)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
`;

export const ExpirationInput = styled(CardExpiryElement)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
`;
