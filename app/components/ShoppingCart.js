import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem.js';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from './Loading';
import {
  fetchCartList,
  removeItemFromCart
} from '../redux/thunks/CartThunks.js';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      fetchedCart: false,
      userId: ''
    };
  }
  componentDidMount() {
    this.checkAndFetchCart();
  }
  componentDidUpdate() {
    this.checkAndFetchCart();
  }

  handleRemoveItem = async item => {
    await this.props.removeItem(item);
  };

  checkAndFetchCart = () => {
    const { user, fetchCartList } = this.props;
    if (
      (this.state.userId !== user.id && user.id !== undefined) ||
      (user.id && !this.state.fetchedCart)
    ) {
      fetchCartList(user.id);
      this.setState({ fetchedCart: true, userId: user.id });
    }
  };

  handleOnClick = e => {
    e.preventDefault();
    this.props.history.push('/checkout')
  }

  render() {
    const { cartList, user } = this.props;
    let total = this.state.total;
    if (!user.id) return <Loading message='Retrieving your cart' />;
    cartList.map(item => {
      total += parseFloat(item.subtotal);
    });
      return (
        <div className='shopping-cart'>
          <Link to='/products/page/1'>Back</Link>
          <div>TOTAL: ${total}</div>
          <button onClick={ this.handleOnClick }>CHECKOUT</button>
        </div>
      );
    }

}

const mapState = state => {
  const cartList = state.cartList;
  const user = state.user;
  return { cartList, user };
};

const mapDispatch = dispatch => {
  return {
    fetchCartList: userId => dispatch(fetchCartList(userId)),
    removeItem: item => dispatch(removeItemFromCart(item))
  };
};

export default connect(mapState, mapDispatch)(ShoppingCart);
