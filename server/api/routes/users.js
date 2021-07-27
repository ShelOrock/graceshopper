import express from 'express';

import { userControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/:userId', userControllers.getSingleUser);

// //Finds, counts and serves all users
// router.get('/', paginate(User), (req, res, next) => {
//   if (req.user.userType !== 'Admin') {
//     return res.status(400).send('Access Denied');
//   }
//   res
//     .status(200)
//     .send(res.foundModels)
//     .catch(e => {
//       res.status(404);
//       next(e);
//     });
// });

// //Deletes a user based on a primary key.
// router.delete('/:id', (req, res, next) => {
//   if (req.user.userType !== 'Admin' || req.user.id !== req.params.id)
//     return res.status(400).send('Access Denied');
//   User.findByPk(req.params.id)
//     .then(user => user.destroy())
//     .then(() => res.status(202))
//     .catch(e => {
//       res.status(404);
//       next(e);
//     });
// });

// //Updates a user based on a primary key.
// //Falsy fields in req.body are set to the current values.
// router.put('/:id', (req, res, next) => {
//   if (req.user.userType !== 'Admin' || req.user.id !== req.params.id)
//     return res.status(400).send('Access Denied');
//   const {
//     firstName,
//     lastName,
//     email,
//     password,
//     userType,
//     phone,
//     shippingAddress,
//     shippingCity,
//     shippingState,
//     shippingZip,
//     billingAddress,
//     billingCity,
//     billingState,
//     billingZip
//   } = req.body;

//   User.findByPk(req.params.id)
//     .then(user =>
//       user.update({
//         firstName: firstName || user.firstName,
//         lastName: lastName || user.lastName,
//         email: email || user.email,
//         password: password || user.password,
//         userType: userType || user.userType,
//         phone: phone || user.phone,
//         shippingAddress: shippingAddress || user.shippingAddress,
//         shippingCity: shippingCity || user.shippingCity,
//         shippingState: shippingState || user.shippingState,
//         shippingZip: shippingZip || user.shippingZip,
//         billingAddress: billingAddress || user.billingAddress,
//         billingCity: billingCity || user.billingCity,
//         billingState: billingState || user.billingState,
//         billingZip: billingZip || user.billingZip
//       })
//     )
//     .then(user => res.status(202).send(user))
//     .catch(e => {
//       res.status(304);
//       next(e);
//     });
// });

// //Finds and serves a single user based on a primary key.
// //Eager loads associated orders.
// router.get('/:userId/orders', (req, res, next) => {
//   console.log('this is the', req.user.id)
//   if (req.user.id !== req.params.userId)
//     return res.status(401).send('Access Denied');
//   Order.findOne({
//     where: { userId: req.params.userId }
//   })
//     .then(user => res.status(200).send(user))
//     .catch(e => {
//       console.log(e);
//       res.status(404);
//       next(e);
//     });
// });

// //Creates a new order for a specific User.
// router.post('/:userId/orders', (req, res, next) => {
//   if (req.user.id !== req.params.userId)
//     return res.status(401).send('Access Denied');
//   const orderBody = new OrderObject(req.params.userId, req.body);
//   Order.create(orderBody)
//     .then(() => {
//       res.status(201).send('success');
//     })
//     .catch(e => {
//       console.log('ERROR CREATING ORDER ', e);
//       res.status(400);
//       next(e);
//     });
// });

// //Deletes an order based on a primary key.
// router.delete('/:userId/order/:orderId', (req, res, next) => {
//   Order.findByPk(req.params.orderId)
//     .then(order => order.destroy())
//     .then(() => res.status(202))
//     .catch(e => {
//       res.status(404);
//       next(e);
//     });
// });

// //Updates an order based on a primary key.
// //Falsy fields in req.body are set to the current values.
// //No need to update a userId
// router.put('/:userId/orders/:orderId', (req, res, next) => {
//   const { shippingAddress, orderCost } = req.body;

//   Order.findByPk(req.params.orderid)
//     .then(order =>
//       order.update({
//         shippingAddress: shippingAddress || order.shippingAddress,
//         orderCost: (orderCost * 1).toFixed(2) || order.orderCost
//       })
//     )
//     .then(() => res.status(202))
//     .catch(e => {
//       res.status(304);
//       next(e);
//     });
// });

// router.get('/:userId/cart', (req, res, next) => {
//   if (req.user.id !== req.params.userId)
//     return res.status(400).send('Access Denied');
//   Cart.findOne({
//     where: { userId: req.params.userId }
//   })
//     .then(cart => res.status(200).send(cart))
//     .catch(e => {
//       res.status(404);
//       next(e);
//     });
// });

// router.get('/:userId/cart/set', (req, res, next) => {
//   if (req.user.id !== req.params.userId)
//     return res.status(400).send('Access Denied');
//   CartList.findAll({
//     where: { userId: req.params.userId },
//     include: [Product]
//   })
//     .then(cart => res.status(200).send(cart))
//     .catch(e => {
//       console.log('ERROR GETTING CART LIST');
//       console.error(e);
//       res.status(404);
//       next(e);
//     });
// });

// router.post('/cart/add', (req, res, next) => {
//   if (req.user.id !== req.body.userId)
//     return res.status(400).send('Access Denied');

//   const productId = req.body.productId;
//   const newQuantity = req.body.productQuantity;
//   const cartId = req.body.cartId;
//   const userId = req.body.userId;
//   const newSubtotal = req.body.subtotal;

//   //Check if the user has this product in cart

//   CartList.findOne({
//     where: {
//       userId,
//       productId
//     }
//   })
//     .then(product => {
//       if (!product) {
//         return CartList.create({
//           productId: productId,
//           productQuantity: newQuantity,
//           cartId: cartId,
//           userId: userId,
//           subtotal: newSubtotal
//         });
//       } else {
//         return CartList.increment(
//           {
//             productQuantity: newQuantity,
//             subtotal: parseFloat(newSubtotal)
//           },
//           {
//             where: { productId, userId }
//           }
//         );
//       }
//     })
//     .then(updatedList => res.status(200).send({ updatedList }))
//     .catch(err => {
//       console.log('ERROR ADDING TO CAR ', err);
//       res.status(400);
//       next();
//     });
// });

// //edit cart item quantity in cart
// router.put('/cart/cartlist/update', (req, res, next) => {
//   if (req.user.id !== req.body.cartItem.userId)
//     return res.status(400).send('Access Denied');
//   const { newQuantity, newSubtotal, id } = req.body.cartItem;

//   CartList.findByPk(id)
//     .then(cartItem =>
//       cartItem.update({
//         productQuantity: newQuantity,
//         subtotal: newSubtotal
//       })
//     )
//     .then(updatedItem => {
//       return res.status(202).send(updatedItem);
//     })
//     .catch(e => {
//       res.status(304);
//       next(e);
//     });
// });

// //edit cart item quantity in product page
// router.put('/cart/cartlist/quantity/merge', (req, res, next) => {
//   console.log('calling merge api');
//   const { newQuantity, newSubtotal, productId } = req.body;
//   CartList.increment(
//     {
//       productQuantity: newQuantity,
//       subtotal: parseFloat(newSubtotal)
//     },
//     {
//       where: { productId: productId }
//     }
//   )
//     .then(updatedItem => {
//       console.log('cartlist is updated');
//       return res.status(202).send(updatedItem);
//     })
//     .catch(e => {
//       res.status(304);
//       next(e);
//     });
// });

// router.delete('/:userId/cart/:cartListId', async (req, res, next) => {
//   try {
//     await CartList.destroy({
//       where: { id: req.params.cartListId }
//     });
//     res.status(202).send('Item deleted');
//   } catch (err) {
//     console.log('ERROR DELETING CART ', err);
//     res.status(400).next(err);
//   }
// });

// router.post(`/:userId/cart`, (req, res, next) => {
//   if (req.user.id !== req.params.userId)
//     return res.status(400).send('Access Denied');
//   Cart.findOne({
//     where: { userId: req.params.userId }
//   })
//     .then(cartOrNull => {
//       if (!cartOrNull) {
//         Cart.create({
//           userId: req.params.userId
//         })
//           .then(cart => res.status(200).send(cart))
//           .catch(e => {
//             res.status(400);
//             next(e);
//           });
//       } else {
//         res.status(200).send(cartOrNull);
//       }
//     })
//     .catch(e => {
//       res.status(404);
//       next(e);
//     });
// });

// //edit cart for shipping and billing details
// router.put(`/:userId/cart`, (req, res, next) => {
//   if (req.user.id !== req.params.userId)
//     return res.status(400).send('Access Denied');
//   const cartBody = new CartObject(req.body);
//   Cart.findOne({
//     where: { userId: req.params.userId }
//   })
//     .then(cart => cart.update(cartBody))
//     .then(() => {
//       res.status(202).send('updated');
//     })
//     .catch(e => {
//       res.status(304);
//       next(e);
//     });
// });

// //Route for deleting a cart.
// router.delete(`/:userId/cart`, (req, res, next) => {
//   if (req.user.id !== req.params.userId)
//     return res.status(400).send('Access Denied');
//   CartList.findAll({
//     where: {
//       userId: req.params.userId
//     }
//   })
//     .then(items =>
//       Promise.all(
//         items.map(item => CartList.destroy({ where: { userId: item.userId } }))
//       )
//     )
//     .then(destroyedItems =>
//       res.status(200).send('destroyed ', destroyedItems, ' items')
//     )
//     .catch(e => {
//       console.log(e);
//       res.status(400);
//       next();
//     });
// });

// router.get('/:userId/wishlist', (req, res, next) => {
//   Wishlist.findAll({
//     where: {
//       userId: req.params.userId
//     }
//   })
//     .then(wishlist => res.status(200).send(wishlist))
//     .catch(e => {
//       res.status(400);
//       next(e);
//     });
// });

// router.post('/wishlist', (req, res, next) => {
//   if (req.user.id !== req.body.userId)
//     return res.status(400).send('Access Denied');
//   const productId = req.body.productId;
//   const userId = req.body.userId;

//   Wishlist.create({ productId: productId, userId: userId })
//     .then(item => res.status(201).send(item))
//     .catch(e => {
//       res.status(400);
//       next(e);
//     });
// });

// router.delete('/:userId/wishlist/:wishlistId', (req, res, next) => {
//   Wishlist.findByPk(req.params.wishlistId)
//     .then(item => item.destroy())
//     .then(() => res.status(200).send('Item deleted'))
//     .catch(e => {
//       res.status(400);
//       next(e);
//     });
// });

export default router;
