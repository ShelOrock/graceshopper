import { wishlistServices, wishlistItemServices } from '../services/index.js';

export const getWishlist = async (req, res, next) => {
  try {
    const wishlistOrNull = await wishlistServices.getWishlist(req.params.userId);
    if(!wishlistOrNull) {
      await wishlistServices.createWishlist({ userId: req.params.userId });
      const createdWishlist = await wishlistServices.getWishlist(req.params.userId);
      res
        .status(202)
        .send(createdWishlist);

    } else {
      res
        .status(200)
        .send(wishlistOrNull);
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const addProductToWishlist = async (req, res, next) => {
  try {
    const wishlistOrNull = await wishlistServices.getWishlist(req.params.userId);
    if(!wishlistOrNull) {
      const createdWishlist = await wishlistServices.createWishlist({ userId: req.params.userId })
      await wishlistItemServices.createWishlistItem({
        wishlistId: createdWishlist.id,
        productId: req.body.productId
      });
      const createdWishlistWithProducts = await wishlistServices.getWishlist(req.params.userId);
      res
        .status(201)
        .send(createdWishlistWithProducts);

    } else {
      const wishlistItemOrNull = await wishlistItemServices.getWishlistItemByCartAndProduct(wishlistOrNull.id, req.body.productId);
      if(!wishlistItemOrNull) {
        await wishlistItemServices.createWishlistItem({
          wishlistId: wishlistOrNull.id,
          productId: req.body.productId
        });
        const wishlistWithProducts = await wishlistServices.getWishlist(req.params.userId);
        res
          .status(201)
          .send(wishlistWithProducts);

      } else {
        await wishlistItemServices.destroyWishlistItem(wishlistItemOrNull.id);
        const wishlist = await wishlistServices.getWishlist(req.params.userId);
        res
          .status(201)
          .send(wishlist);
      };
    };

  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  };
};

export const removeProductFromWishlist = async (req, res, next) => {
  try {
    const wishlistOrNull = await wishlistServices.getWishlist(req.params.userId);
    if(!wishlistOrNull) {
      const createdWishlist = await wishlistServices.createWishlist({ userId: req.params.userId });
      res
        .status(204)
        .send(createdWishlist);

    } else {
      const wishlistItemOrNull = await wishlistItemServices.getWishlistItemByCartAndProduct(wishlistOrNull.id, req.body.productId)
      if(!wishlistItemOrNull) {
        res
          .status(204)
          .send(wishlistOrNull);

      } else {
        await wishlistItemServices.destroyWishlistItem(wishlistItemOrNull.id);
        const wishlist = await wishlistServices.getWishlist(req.params.userId);
        res
          .status(204)
          .send(wishlist);
      };
    };
  } catch(e) {
      
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
}