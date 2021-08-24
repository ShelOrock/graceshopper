import { cartServices, cartItemServices } from '../services/index.js';

export const getCart = async (req, res, next) => {
  try {
    const cartOrNull = await cartServices.getCart(req.user.id);
    if(!cartOrNull) {
      await cartServices.createCart({ userId: req.user.id });
      const createdCart = await cartServices.getCart(req.user.id);
      res
        .status(201)
        .send(createdCart);

    } else {
      res
        .status(200)
        .send(cartOrNull);
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const createCart = async (req, res, next) => {
  try {
  const createdCart = await cartServices.createCart({ userId: req.user.id });
  res
    .status(201)
    .send(createdCart);

  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(e);
  };
};

export const deleteCart = async (req, res, next) => {
  try {
    await cartServices.destroyCart(req.user.id);
    res
      .status(204)
      .send();

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const addProductToCart = async (req, res, next) => {
  try {
    const cartOrNull = await cartServices.getCart(req.user.id);
    if(!cartOrNull) {
      const createdCart = await cartServices.createCart({ userId: req.user.id });
      await cartItemServices.createCartItem({
        cartId: createdCart.id,
        productId: req.body.productId,
        quantity: req.body.quantity
      });

      const createdCartWithProducts = await cartServices.getCart(req.user.id);
      res
        .status(201)
        .send(createdCartWithProducts);

    } else {
      const cartItemOrNull = await cartItemServices.getCartItemByCartAndProduct(cartOrNull.id, req.body.productId);
      if(!cartItemOrNull) {
        await cartItemServices.createCartItem({
          cartId: cartOrNull.id,
          productId: req.body.productId,
          quantity: req.body.quantity
        });
        const cartWithProducts = await cartServices.getCart(req.user.id);
        res
          .status(201)
          .send(cartWithProducts);

      } else {
        const updatedQuantity = cartItemOrNull.quantity + req.body.quantity;
        await cartItemServices.increaseCartItemQuantity(cartItemOrNull.id, { quantity: updatedQuantity });
        const cartWithProducts = await cartServices.getCart(req.user.id);
        res
          .status(201)
          .send(cartWithProducts);
      }; 
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const removeProductFromCart = async (req, res, next) => {
  try {
  const cartOrNull = await cartServices.getCart(req.user.id);
  if(!cartOrNull) {
    res.sendStatus(404);

  } else {
    const cartItemToRemove = await cartItemServices.getCartItemByPrimaryKey(req.body.cartItemId);
    await cartItemServices.removeCartItemFromCart(cartOrNull, cartItemToRemove);
    res
      .status(204)
      .send()
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const updateCartItem = async (req, res, next) => {
  try {
    const cartOrNull = await cartServices.getCart(req.user.id);
    if(!cartOrNull) {
      res.sendStatus(404);

    } else {
      const cartItemOrNull = await cartItemServices.getCartItemByCartAndProduct(cartOrNull.id, req.body.productId);
      if(!cartItemOrNull) {
        res.sendStatus(404);

      } else {
        await cartItemServices.updateCartItem(cartItemOrNull, { quantity: req.body.quantity });
        res.sendStatus(200);

      };
    };

  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(e);
  };
};
