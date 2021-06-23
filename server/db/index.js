//collect all models and db connection
//export everything in the database from here
import db from './database.js';
import {
  User,
  Order,
  Product,
  Cart,
  CartItem,
  Wishlist,
  WishlistItem,
} from './models/index.js';

//MODEL ASSOCIATIONS
User.hasOne(Cart);
Cart.belongsTo(User);

User.hasOne(Wishlist);
Wishlist.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Wishlist.belongsToMany(Product, { through: WishlistItem });
Product.belongsToMany(Wishlist, { through: WishlistItem });

User.hasMany(Order);
Order.belongsTo(User);

export {
  db,
  User,
  Order,
  Product,
  Cart,
  CartItem,
  Wishlist,
  WishlistItem,
};
