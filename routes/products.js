var express = require('express');
var router = express.Router();
var [getProducts, insertProduct, getOneById] = require('../controllers/product');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.send(products);
});
/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  try {
    await insertProduct(req.body);
    console.log('productId', req.body.productId)
    const newProduct = await getOneById(req.body.productId)
    res.send(newProduct);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

module.exports = router;
