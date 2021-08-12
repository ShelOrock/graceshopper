import {
  users,
  products,
  tags
} from './data/index.js';
  
import { 
  User,
  Product,
  Tag
} from '../server/db/index.js';

const productionSeed = async () => {
  try {
    await Promise.all(users.map(user => User.create(user)));

    const allTags = await Promise.all(tags.map(tag => Tag.create({ name: tag })));
    const newTag = allTags.find(tag => tag.name === 'new');
    const popular = allTags.find(tag => tag.name === 'popular');
    const lawful = allTags.find(tag => tag.name === 'lawful');
    const neutral = allTags.find(tag => tag.name === 'neutral');
    const chaotic = allTags.find(tag => tag.name === 'chaotic');
    const good = allTags.find(tag => tag.name === 'good');
    const evil = allTags.find(tag => tag.name === 'evil');

    const allProducts = await Promise.all(products.map(product => Product.create(product)));

    const findProduct = productName => {
      return allProducts.find(product => product.productName === productName);
    };
    const khorkina = findProduct('Khorkina');
    await khorkina.addTags([newTag, lawful, neutral]);
    const dragulescu = findProduct('Dragulescu');
    await dragulescu.addTags([popular, chaotic, evil]);
    const jager = findProduct('Jager');
    await jager.addTags([popular, chaotic, good]);
    const tweddle = findProduct('Tweddle');
    await tweddle.addTags([newTag, neutral]);
    const shirai = findProduct('Shirai');
    await shirai.addTags([lawful, evil]);
    const tkatchev = findProduct('Tkatchev');
    await tkatchev.addTags([chaotic, neutral, popular, newTag]);
    const onodi = findProduct('Onodi');
    await onodi.addTags([good, lawful, popular]);
    const cassina = findProduct('Cassina');
    await cassina.addTags([neutral, chaotic]);

  } catch(e) {
    throw Error(e.message, 'Error seeding production database');
  };
};

export default productionSeed;
