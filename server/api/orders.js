import express from 'express';

import { Order, User } from '../db/index.js';

import {
  paginate,
  sendEmail
} from './utils.js';

const router = express.Router();

//Finds and servers all orders
router.get('/', paginate(Order), (req, res, next) => {
  res
    .status(200)
    .send(res.foundModels)
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//Create new order
router.post('/', (req, res, next) => {
  const orderBody = new OrderObject(req.body.userId, req.body.cart);
  Order.create(orderBody)
    .then(order =>
      Promise.all(
        req.body.cart.map(_item =>
          OrderDetail.create({
            ..._item,
            orderId: order.id,
            productCost: _item.subtotal,
            productId: _item.productId
          })
        )
      )
    )
    .then(order => {
      User.findByPk(req.body.userId).then(user => {
        if (user.email) {
          sendEmail(
            user.email,
            'Purchase order recieved',
            'We go your order. <3 Juul'
          );
        }
        return res.status(201).send(order);
      });
    })
    .catch(e => {
      console.log(e);
      res.status(400);
      next(e);
    });
});

//Finds and serves a single order based on a primary key.
//Eager loads associated user.
router.get('/:id', (req, res, next) => {
  Order.findByPk(req.params.id, {
    include: [
      {
        model: User
      }
    ]
  })
    .then(order => res.status(200).send(order))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//Finds and serves a single order based on a primary key.
//Eager loads associated cart.
router.get('/:userId/orderDetails', (req, res, next) => {
  //Find all the orders
  Order.findAll({
    where: {
      userId: req.params.userId
    },
    include: [OrderDetail]
  })
    .then(orders => res.status(200).send(orders))
    .catch(e => {
      console.log('error getting order history');
      console.log(e);
      res.status(404);
      next(e);
    });
});

//Adds a new item to the cart
router.post('/:orderId/orderDetails', (req, res, next) => {
  const { productId, productQuantity, productCost } = req.body;
  const { orderId } = req.params;

  OrderDetail.create({
    orderId: orderId * 1,
    productId: productId * 1,
    productQuantity: productQuantity * 1,
    productCost: (productCost * 1).toFixed(2)
  })
    .then(() => res.status(201))
    .catch(e => {
      res.status(400);
      next(e);
    });
});

//Deletes an item from a cart
router.delete('/:orderId/orderDetails/:orderDetailId', (req, res, next) => {
  const { orderDetailId } = req.params;

  orderDetail
    .findByPk(orderDetailId)
    .then(orderDetail => orderDetail.destroy())
    .then(() => res.status(202))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//Updates an existing item in the cart
router.put('/:orderId/orderDetails/:orderDetailId', (req, res, next) => {
  const { productId, productQuantity, productCost } = req.body;
  const { orderId, orderDetailId } = req.params;

  OrderDetail.findByPk(orderDetailId)
    .then(orderDetail =>
      orderDetail.update({
        orderId: orderId * 1,
        productId: productId * 1 || orderDetail.productId,
        productQuantity: productQuantity * 1 || orderDetail.productQuantity,
        productCost: productCost * 1 || orderDetail.productCost
      })
    )
    .then(() => res.status(202))
    .catch(e => {
      res.status(304);
      next(e);
    });
});

export default router;
