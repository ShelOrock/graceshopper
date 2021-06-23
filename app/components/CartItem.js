import React from 'react';
import { connect } from 'react-redux';
import { updateCartList } from '../redux/thunks/CartThunks';

class CartItem extends React.Component {
  handleEditQuantity = ev => {
    const { item } = this.props;
    const newQuantity = ev.target.value;
    const newSubtotal = item.product.unitPrice * newQuantity;
    const updatedCartItem = { ...item, newQuantity, newSubtotal };
    this.props.updateCartList(updatedCartItem);
  };

  render() {
    const {
      product: { productImage, productName },
      productQuantity,
      subtotal,
    } = this.props.item;
    return (
      <div className='cart-item'>
        <div className='cart-item-quantity-edit'>
          Quantity:
          <input
            type='number'
            className='cart-item-quantity-select'
            min='1'
            value={productQuantity}
            onChange={ev => this.handleEditQuantity(ev)}
          />
        </div>
        <div className='cart-item-subtotal'>Subtotal: {`$${subtotal}`} </div>
      </div>
    );
  }
}

const mapState = ({ cartList }) => ({ cartList });
const mapDispatch = dispatch => {
  return {
    updateCartList: cartItem => dispatch(updateCartList(cartItem))
  };
};

export default connect(mapState, mapDispatch)(CartItem);
