import express from 'express';
import path from 'path';
import Sequelize from 'sequelize';

import { Product } from '../db/index.js';

import { paginate } from './utils.js';

const router = express.Router();

router.get('/limit/:limit/page/:page', paginate(Product), (req, res, next) => {
  res
    .status(200)
    .send(foundModels)
    .catch(e => {
      res.status(404);
      next(e);
    });
});

router.get('/similar/:id', (req, res, next) => {
  Product.findByPk(req.params.id)
    .then(({ tags }) => {
      return Product.findAll({
        where: {
          [Sequelize.Op.and]: [
            {
              tags
            },
            {
              id: {
                [Sequelize.Op.ne]: req.params.id
              }
            }
          ]
        }
      });
    })
    .then(products => res.status(200).send(products))
    .catch(e => {
      res.status(400);
      next(e);
    });
});

router.get('/featured', (req, res, next) => {
  Product.findAll({
    where: { featured: true },
    limit: 4,
  })
  .then(products => {
    res.status(200).send(products)
  })
  .catch(e => {
    res.status(404);
    next(e);
  })
})

router.get('/:id', (req, res, next) => {
  Product.findByPk(req.params.id)
    .then(product => {
      res.status(200).send(product);
    })
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//Creates a new product.
//Sets falsy field in req.body.productDescription to be null.
//Sets falsy field in req.body.inventory to 0.
router.post('/', (req, res, next) => {
  if (req.user.userType !== 'Admin')
    return res.status(400).send('Access Denied');
  const {
    productName,
    productDescription,
    unitPrice,
    inventory,
    tags
  } = req.body;

  if (req.files) {
    const imageFile = req.files.productImage;
    imageFile
      .mv(
        path.join(
          '__dirname',
          '..',
          '/public',
          '/uploads',
          `/${ imageFile.name.split(' ').join('-') }`
        )
      )
      .then(() => {
        Product.create({
          productName,
          productDescription,
          unitPrice: (unitPrice * 1).toFixed(2),
          inventory: inventory * 1 || 0,
          tags,
          featured,
          productImage: `/uploads/${imageFile.name.split(' ').join('-')}`
        });
      })
      .then(() => res.status(201).send('success creating'))
      .catch(e => {
        res.status(400);
        next(e);
      });
  } else {
    Product.create({
      productName,
      productDescription,
      unitPrice: (unitPrice * 1).toFixed(2),
      inventory: inventory * 1 || 0,
      tags
    })
      .then(() => res.status(201).send('success creating'))
      .catch(e => {
        res.status(400);
        next(e);
      });
  }
});

//Deletes a product based on a primary key.
router.delete('/:id', (req, res, next) => {
  if (req.user.userType !== 'Admin')
    return res.status(400).send('Access Denied');
  Product.findByPk(req.params.id)
    .then(product => product.destroy())
    .then(() => res.status(202))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//Updates a product based on a primary key.
//Falsy fields in req.body are set to the current values.
router.put('/:id', (req, res, next) => {
  if (req.user.userType !== 'Admin')
    return res.status(400).send('Access Denied');
  const { productName, productDescription, unitPrice, inventory } = req.body;

  Product.findByPk(req.params.id)
    .then(product =>
      product.update({
        productName: productName || product.productName,
        productDescription: productDescription || product.productDescription,
        unitPrice: (unitPrice * 1).toFixed(2) || product.unitPrice,
        inventory: inventory * 1 || product.inventory
      })
    )
    .then(product => res.status(202).send(product))
    .catch(e => {
      res.status(304);
      next(e);
    });
});

export default router;
