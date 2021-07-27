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
  Tag
} from './models/index.js';

//MODEL ASSOCIATIONS
User.hasOne(Cart, {
  onDelete: 'cascade'
});
Cart.belongsTo(User);

User.hasOne(Wishlist, {
  onDelete: 'cascade'
});
Wishlist.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Product.hasMany(CartItem);
CartItem.belongsTo(Product);

Wishlist.belongsToMany(Product, { through: WishlistItem });
Product.belongsToMany(Wishlist, { through: WishlistItem });

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: 'order_product' });
Product.belongsToMany(Order, { through: 'order_product' });

Product.belongsToMany(Tag, { through: 'product_tag' });
Tag.belongsToMany(Product, { through: 'product_tag' });

export {
  db,
  User,
  Order,
  Product,
  Cart,
  CartItem,
  Wishlist,
  WishlistItem,
  Tag
};
