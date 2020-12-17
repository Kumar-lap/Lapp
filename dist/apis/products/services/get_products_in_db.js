"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductsInDB;

var _products = _interopRequireDefault(require("../models/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductsInDB(offset, limit) {
  const Products = (0, _products.default)();
  const productsInDb = await Products.find().skip(offset || 0).limit(limit || 20).lean();
  return productsInDb;
}
//# sourceMappingURL=get_products_in_db.js.map
