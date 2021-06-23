import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCard = styled.div`
  width: calc(100% / 3) - 1rem;
  margin: 1rem;
  background-color: white;
  boxShadow: 0px 8px 15px #D5D5D5;
  border: none;
  border-radius: 10px;
`;

export const ProductCardLink = styled(Link)`
  textDecoration: none;
  color: black;
`;

export const ProductCardImage = styled.img`
  width: 100%;
`;

export const ProductThumbnail = styled.img`
  width: 150px;
`;
