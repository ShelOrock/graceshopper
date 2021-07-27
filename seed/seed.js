import {
  users,
  products,
  orders,
  tags
} from './data/index.js';

import { 
  User,
  Product,
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
      let orderProducts = {};
      for(let i = 0; i < Math.floor(Math.random() * allProducts.length); i++) {
        let randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
        let randomProductName = randomProduct.productName
        if(!orderProducts[randomProductName]) {
          orderProducts.randomProductName = 1;
          await allOrders[i].addProduct(randomProduct)
        };
      };
    };
  }
  catch(e) {
    console.log(e);
  }
};

export default seed;