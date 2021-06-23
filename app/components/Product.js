import * as React from 'react';
import { Link } from 'react-router-dom';
import emoji from 'node-emoji';

export default () => {

  handleAddToCart = ({
    productId,
    cartId,
    productQuantity,
    userId,
    subtotal,
  }, e) => {
    e.preventDefault()
    this.props.addToCart(
      productId,
      cartId,
      productQuantity,
      userId,
      subtotal
    );
  };

  handleAddToWishlist = (productId, userId, e) => {
    e.preventDefault();
    this.props.postWishlist(
      productId,
      userId,
    )
  }

  return (
    <div
      style={
        {
          width: 'calc(100%/4)',
          margin: '1rem',
          height: '450px',
          fontFamily: 'Roboto',
          padding: '0.5rem',
          border: '2px black solid',
        }
      }
    >
    <div
      style={
        {
          display: 'flex',
        }
      }
    >
        {emoji.get('heavy_plus_sign')}
        {emoji.get('heart')}
    </div>
      <Link to={`/products/${this.props.product.id}`}
        style={
          {
            textDecoration: 'none',
            color: 'black',
          }
        }
      >
        <div>
          <div>
            <img
              variant='bottom'
              src={this.props.product.productImage}
              style={
                {
                  width: '100%'
                }
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
}