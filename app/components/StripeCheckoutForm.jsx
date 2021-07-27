// import React, { Component } from 'react';

// import { deleteCart } from '../redux/thunks/CartThunks';
// import { postOrder } from '../redux/thunks/OrderThunks';

// import Loading from './Loading.jsx'

// class StripeCheckoutForm extends Component {

//   componentDidMount() {
//     this.setState({ cardReady: true })
//   }

//   handleOnClick = e => {
//     e.preventDefault();
//     axios
//       .post(`/api/stripe/create-payment-intent`, {
//       payment_method_types: ["card"],
//       amount: this.props.cartList.reduce((accum, item) => {
//         return accum += parseFloat(item.subtotal)
//       }, 0),
//       shipping: this.state
//       })
//       .then(res => {
//       this.props.stripe
//         .handleCardPayment(res.data.client_secret)
//       })
//       .then(() => {
//       this.props.postOrder({ userId: this.props.user.id, cart: this.props.cartList })
//       .then(() => this.props.deleteCart(this.props.user.id))
//       .then(() => {
//         if(this.props.statusMessage.status === SUCCESS) {
//           this.props.history.push('/receipt');
//         }
//       })
//     })
//   }

//   render() {
//     return (
//       <div className='container mt-4'>
//       {
//       this.state.cardReady
//       ? (
//       <div>
//         {
//           false
//           ? (
//             <div>
//               <h3>Payment Successful!</h3>
//               <a href={ receiptUrl }>View Receipt</a>
//               <Nav.Link href='/'>Return to Shopping</Nav.Link>
//             </div>
//           )
//           : (
//             <div className='checkout-form'>
//               <Form 
//                 style={
//                   {
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }
//                 }
//               >
//                 <h3>Checkout for { this.props.user.firstName || 'Guest' }</h3>
//                 <h5>Shipping Information</h5>
//                 <h5>Card Information</h5>
//                 <label>
//                   Card details
//                     <CardNumberElement />
//                 </label>
//                 <div
//                   style={
//                     {
//                       display: 'flex',
//                       margin: '1rem',
//                     }
//                   }
//                 >
//                   <label>
//                     Expiration date
//                     <CardExpiryElement />
//                   </label>
//                   <label>
//                     CVC 
//                     <CardCVCElement />
//                   </label>
//                 </div>
//                 <Button
//                   style={
//                     {
//                       margin: '1rem',
//                       backgroundColor: 'black',
//                       border: 'none',
//                       borderRadius: '0',
//                       width: '300px'
//                     }
//                   }
//                   onClick={ this.handleOnClick }
//                   className='order-button'
//                   disabled={
//                     Object.values(errors).every(value => value === '') &&
//                     Object.values(this.state.address).every(value => value !== '') &&
//                     name !== ''
//                     ? false
//                     : true
//                   }
//                 >
//                   Pay {this.props.cartList.reduce((accum, item) => {
//                     console.log(item)
//                     return accum += parseFloat(item.subtotal)
//                   }, 0)
//                   }
//                 </Button>
//              </Form>
//            </div>
//           )
//         }
//       </div>
//       )
//       : (
//         <Loading message='loading credit card input' />
//       )
//       }
//     )
//     </div>
//     )
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     postOrder: order => dispatch(postOrder(order)),
//     deleteCart: id => dispatch(deleteCart(id)),
//   }
// }
