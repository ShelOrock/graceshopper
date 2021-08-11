import { orderServices, cartItemServices } from '../services/index.js';

export const getAllOrders = async (req, res, next) => {
  try {
    const ordersOrNull = await orderServices.getAllOrders(req.body.userId);
    if(!ordersOrNull) {
      res.sendStatus(404);

    } else {
      res
        .status(200)
        .send(ordersOrNull);
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const getOrder = async (req, res, next) => {
  try {
    const orderOrNull = await orderServices.getOrder(req.params.orderId);
    if(!orderOrNull) {
      res.sendStatus(404);

    } else {
      res
        .status(200)
        .send(orderOrNull);
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const createOrder = async (req, res, next) => {
  console.log(req.body);
  try {
    const order = await orderServices.createOrder({
      userId: req.body.userId,
      name: req.body.shipping.name,
      address: req.body.shipping.address,
      city: req.body.shipping.city,
      state: req.body.shipping.state,
      zip: req.body.shipping.zip,
      total: req.body.total
    });

    req.body.cartItems.forEach(async cartItem => {
      let cartItemToUpdate = await cartItemServices.getCartItemByPrimaryKey(cartItem.id);
      await cartItemServices.updateCartItem(cartItemToUpdate, {
        orderId: order.id,
        cartId: null
      });
    });

    res
      .status(201)
      .send(order);

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};
