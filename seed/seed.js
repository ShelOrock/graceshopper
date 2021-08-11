import {
  users,
  products,
  orders,
  tags
} from './data/index.js';

import { 
  User,
  Product,
  CartItem,
  Order,
  Tag
} from '../server/db/index.js';

const seed = async () => {
  try {
    const allUsers = await Promise.all(users.map(user => User.create({ ...user })));

    const allProducts = await Promise.all(products.map(product => Product.create({ ...product })));

    const allOrders = await Promise.all(orders.map(order => {
      return Order.create({
        ...order,
        userId: allUsers[Math.floor(Math.random() * allUsers.length)].id
      });
    }));

    let sampleArray = new Array(24);
    let idsToMap = [];
    for(let i = 0; i < sampleArray.length; i++) {
      let productId = allProducts[Math.floor(Math.random() * allProducts.length)].id;
      let containsIds = idsToMap.some(ids => ids === productId);
      if(!containsIds) {
        idsToMap.push(productId);
      };
    };

    const allCartItems = await Promise.all(idsToMap.map(item => {
      let quantity = Math.ceil(Math.random() * 10);
      return CartItem.create({
        quantity,
        productId: item
      });
    }));

    const allTags = await Promise.all(tags.map(tag => Tag.create({ name: tag })));

    for(let i = 0; i < allProducts.length; i++) {
      let productTags = {};
      for(let i = 0; i < Math.floor(Math.random() * allTags.length); i++) {
        let randomTag = allTags[Math.floor(Math.random() * allTags.length)];
        let randomTagName = randomTag.name
        if(!productTags.hasOwnProperty(randomTagName)) {
          productTags[randomTagName] = 1;
          await allProducts[i].addTag(randomTag);
        };
      };
    };

    for(let i = 0; i < allOrders.length; i++) {
      for(let j = 0; j < allCartItems.length; j++) {
        let randomCartItem = allCartItems[Math.floor(Math.random() * allCartItems.length)];
        await allOrders[i].addCartItem(randomCartItem)
      };
    };
  }
  catch(e) {
    console.log(e);
  }
};

export default seed;