import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWishlist, deleteWishlist } from '../redux/thunks/WishlistThunks.jsx';
import WishlistItem from './WishlistItem.jsx';
import Loading from './Loading.jsx';
import { Button } from './StyledComponents/Button'

class Wishlist extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchedWL: false
    };
  }

  componentDidMount() {
    this.checkAndFetchWishlist();
  }

  handleRemoveItem = item => {
    console.log('ITEM', item)
    this.props.removeItem(item, this.props.user.id);
  };

  componentDidUpdate() {
    this.checkAndFetchWishlist();
  }

  checkAndFetchWishlist = () => {
    const { user, fetchWishlist } = this.props;
    if (user.userType !== 'Guest' && user.userType && !this.state.fetchedWL) {
      fetchWishlist(user.id);
      this.setState({ fetchedWL: true });
    }
  };

  render() {
    const { wishlist, user } = this.props;

    if (!user.userType) return <Loading message='retrieving your wishlist' />;
    if (user.userType === 'Guest') {
      return <div>Please create an account to create a wishlist.</div>;
    }
    return (
      <div>
        {wishlist.length === 0 ? (
          <div>
            <h4>WISHLIST</h4>
            <p>Your wishlist is empty.</p>
          </div>
        ) : (
          <div>
            <Link to='/products/page/1'>Back</Link>
            <h4>WISHLIST</h4>
            <div className='wishlist-product-list'>
              {wishlist.map(item => (
                <div key={item.id}>
                  <WishlistItem key={item.id} item={item} />
                  <Button onClick={() => this.handleRemoveItem(item)}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  const wishlist = state.wishlist;
  const user = state.user;
  return { wishlist, user };
};

const mapDispatch = dispatch => {
  return {
    fetchWishlist: userId => dispatch(fetchWishlist(userId)),
    removeItem: (item, userId) => dispatch(deleteWishlist(item, userId))
  };
};

export default connect(mapState, mapDispatch)(Wishlist);
