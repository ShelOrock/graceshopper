import bcrypt from 'bcrypt';

import {
  userServices,
  cartServices,
  cartItemServices,
} from '../services/index.js';

const SALT_ROUNDS = 12;

export const attemptUserLogin = async (req, res, next) => {
  try {
    const userOrNull = await userServices.getUserWithPasswordByCredentials(req.body.email);
    if(!userOrNull) {
      res.sendStatus(404);

    } else {
      const checkCredentials = await bcrypt.compare(req.body.password, userOrNull.password);
      if(!checkCredentials) {
        res.sendStatus(404);

      } else {
        const guestCart = await cartServices.getCart(req.user.id);
        const updatedUser = await userServices.logUserIn(userOrNull, { sessionId: req.user.sessionId });
        const updatedUserCartOrNull = await cartServices.getCart(updatedUser.id);
        if(!updatedUserCartOrNull) {
          const createdCart = await cartServices.createCart(updatedUser.id);
          const cartItemsToMerge = await cartItemServices.getAllCartItems(guestCart.id);
          cartItemsToMerge.forEach(async cartItem => {
            await cartItemServices.updateCartItem(cartItem, { cartId: createdCart.id });
          });

        } else {
          const cartItemsToMerge = await cartItemServices.getAllCartItems(guestCart.id);
          const updatedUserCartOrNullItems = await cartItemServices.getAllCartItems(updatedUserCartOrNull.id);
          cartItemsToMerge.forEach(async cartItem => {
            let cartItemAlreadyInUserCart = updatedUserCartOrNullItems.find(cartItemInCart => {
              return cartItemInCart.productId == cartItem.productId
            });
            if(!cartItemAlreadyInUserCart) {
              await cartItemServices.updateCartItem(cartItem, { cartId: updatedUserCartOrNull.id });

            } else {
              let quantityToUpdate = cartItem.quantity + cartItemAlreadyInUserCart.quantity;
              await cartItemServices.updateCartItem(cartItemAlreadyInUserCart, { quantity: quantityToUpdate });
            };
          });
        };

        const guestToDestroy = await userServices.getGuestByPrimaryKey(req.user.id);
        await userServices.destroyGuest(guestToDestroy);
        const loggedInUser = await userServices.getUserByCredentials(req.body.email);
        res
          .cookie('sessionId', loggedInUser.sessionId, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
          })
          .status(200)
          .send(loggedInUser);
      };
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

export const userLogout = async (req, res, next) => {
  try {
    await userServices.logUserOut(req.user);
    const guest = await userServices.createGuest(req.session.id);
    await cartServices.createCart({ userId: guest.id });
    res
      .status(200)
      .send(guest);

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

export const attemptUserSignup = async (req, res, next) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
    const createdUser = await userServices.createStandardUser({
      sessionId: req.user.id,
      email: req.body.email,
      password: hashedPassword,
      userType: 'Standard',
      isLoggedIn: true
    });
    const createdCart = await cartServices.createCart(createdUser.id);
    const guestCart = await cartServices.getCart(req.user.id);
    const cartItemsToMerge = await cartItemServices.getAllCartItems(guestCart.id);
    cartItemsToMerge.forEach(async cartItem => {
      await cartItemServices.updateCartItem(cartItem, { cartId: createdCart.id });
    });

    const userToDestroy = await userServices.getGuestByPrimaryKey(req.user.id);
    await userServices.destroyGuest(userToDestroy, req.session.id);

    const signedInUser = await userServices.getUserByCredentials(req.body.email);
    res
      .cookie('sessionId', signedInUser.sessionId, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
      })
      .status(201)
      .send(signedInUser);

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};
