import {
  Order,
  CartItem,
  Product
} from '../../db/index.js'

export const getOrder = async orderId => {
  try {
    const order = await Order.findByPk(orderId, {
      include: [{
        model: CartItem,
        include: [{ model: Product }]
      }],
    });
    return order;

  } catch(e) {
    throw Error(e.message, 'Error getting order');
  };
};

export const getAllOrders = async userId => {
  try {
    const order = await Order.findAll({
      where: { userId },
      include: [{
        model: CartItem,
        include: [{ model: Product }]
      }],
      order: [[ 'createdAt', 'DESC' ]]
    });
    return order;

  } catch(e) {
    throw Error(e.message, 'Error getting all orders');
  };
};

export const createOrder = async payload => {
  try {
    const order = await Order.create(payload);
    return order;
  
  } catch(e) {
    throw Error(e.message, 'Error creating order');
  };
};
