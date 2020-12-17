"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductsListInDB;

var _products = _interopRequireDefault(require("../models/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductsListInDB(productsInRequest) {
  const Products = (0, _products.default)();
  const ProductsInDb = await Products.insertMany(productsInRequest);
  return ProductsInDb;
}
//# sourceMappingURL=create_products.js.map
