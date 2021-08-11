import styled from 'styled-components';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';

export const StyledCardNumber = styled(CardNumberElement)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
`;

export const StyledExpiration = styled(CardExpiryElement)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
  width: 100%;
`;

export const StyledSecurityCode = styled(CardCvcElement)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
  width: 100%;
`;
