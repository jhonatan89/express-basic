/* const { mongoUtils, dataBase } = require('../lib/utils/mongo.js');
const COLLECTION_NAME = 'productos';

async function getProducts() {
  const client = await mongoUtils.conn();
  const products = await client
    .db(dataBase)
    .collection(COLLECTION_NAME)
    .find({})
    .toArray()
  return products;
}

function insertProduct(product) {
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .insertOne(product)
  });
}

module.exports = [getProducts, insertProduct];
 */


 const {db} = require('../lib/utils/mongo_root');
 const COLLECTION_NAME = 'productos';

 async function getProducts() {
  const products = await db()
    .collection(COLLECTION_NAME)
    .find({})
    .toArray()
  return products;
}

async function insertProduct(product) {
  await db().collection(COLLECTION_NAME)
    .insertOne(product)
  return;
}

async function getOneById(id) {
  const product = await db().collection(COLLECTION_NAME)
    .findOne({productId: id})
  return product;
}





module.exports = [getProducts, insertProduct,getOneById];