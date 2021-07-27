import express from 'express';

import { productControllers } from '../controllers/index.js';

import { paginate } from '../middleware.js';

import { Product } from '../../db/index.js';

const router = express.Router();

router.get('/limit/:limit/page/:page', paginate(Product), productControllers.getPaginatedProducts);
router.get('/:productId', productControllers.getSingleProduct);
router.post('/featured', productControllers.getFeaturedProducts);
router.post('/popular', productControllers.getPopularProducts);
router.post('/similar', productControllers.getSimilarProducts);

// //Creates a new product.
// //Sets falsy field in req.body.productDescription to be null.
// //Sets falsy field in req.body.inventory to 0.
// router.post('/', (req, res, next) => {
//   if (req.user.userType !== 'Admin')
//     return res.status(400).send('Access Denied');
//   const {
//     productName,
//     productDescription,
//     unitPrice,
//     inventory,
//     tags
//   } = req.body;

//   if (req.files) {
//     const imageFile = req.files.productImage;
//     imageFile
//       .mv(
//         path.join(
//           '__dirname',
//           '..',
//           '/public',
//           '/uploads',
//           `/${ imageFile.name.split(' ').join('-') }`
//         )
//       )
//       .then(() => {
//         Product.create({
//           productName,
//           productDescription,
//           unitPrice: (unitPrice * 1).toFixed(2),
//           inventory: inventory * 1 || 0,
//           tags,
//           featured,
//           productImage: `/uploads/${imageFile.name.split(' ').join('-')}`
//         });
//       })
//       .then(() => res.status(201).send('success creating'))
//       .catch(e => {
//         res.status(400);
//         next(e);
//       });
//   } else {
//     Product.create({
//       productName,
//       productDescription,
//       unitPrice: (unitPrice * 1).toFixed(2),
//       inventory: inventory * 1 || 0,
//       tags
//     })
//       .then(() => res.status(201).send('success creating'))
//       .catch(e => {
//         res.status(400);
//         next(e);
//       });
//   }
// });

// //Deletes a product based on a primary key.
// router.delete('/:id', (req, res, next) => {
//   if (req.user.userType !== 'Admin')
//     return res.status(400).send('Access Denied');
//   Product.findByPk(req.params.id)
//     .then(product => product.destroy())
//     .then(() => res.status(202))
//     .catch(e => {
//       res.status(404);
//       next(e);
//     });
// });

// //Updates a product based on a primary key.
// //Falsy fields in req.body are set to the current values.
// router.put('/:id', (req, res, next) => {
//   if (req.user.userType !== 'Admin')
//     return res.status(400).send('Access Denied');
//   const { productName, productDescription, unitPrice, inventory } = req.body;

//   Product.findByPk(req.params.id)
//     .then(product =>
//       product.update({
//         productName: productName || product.productName,
//         productDescription: productDescription || product.productDescription,
//         unitPrice: (unitPrice * 1).toFixed(2) || product.unitPrice,
//         inventory: inventory * 1 || product.inventory
//       })
//     )
//     .then(product => res.status(202).send(product))
//     .catch(e => {
//       res.status(304);
//       next(e);
//     });
// });

export default router;
