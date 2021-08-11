import { cartServices, cartItemServices } from '../services/index.js';

export const getCart = async (req, res, next) => {
  try {
    const cartOrNull = await cartServices.getCart(req.params.userId)
    if(!cartOrNull) {
      await cartServices.createCart({ userId: req.params.userId });
      const createdCart = await cartServices.getCart(req.params.userId);
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
  const createdCart = await cartServices.createCart({ userId: req.params.userId });
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
    await cartServices.destroyCart(req.params.userId);
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
    const cartOrNull = await cartServices.getCart(req.params.userId);
    if(!cartOrNull) {
      const createdCart = await cartServices.createCart({ userId: req.params.userId });
      await cartItemServices.createCartItem({
        cartId: createdCart.id,
        productId: req.body.productId,
        quantity: req.body.quantity
      });

      const createdCartWithProducts = await cartServices.getCart(req.params.userId);
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
        const cartWithProducts = await cartServices.getCart(req.params.userId);
        res
          .status(201)
          .send(cartWithProducts);

      } else {
        const updatedQuantity = cartItemOrNull.quantity + req.body.quantity;
        await cartItemServices.increaseCartItemQuantity(cartItemOrNull.id, { quantity: updatedQuantity });
        const cartWithProducts = await cartServices.getCart(req.params.userId);
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
  const cartOrNull = await cartServices.getCart(req.params.userId);
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
    const cartOrNull = await cartServices.getCart(req.params.userId);
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
