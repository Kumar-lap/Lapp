"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateProducts;

var _products = _interopRequireDefault(require("../models/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateProducts(productsList) {
  const Products = (0, _products.default)();
  await Promise.all(productsList.map(async product => {
    return Products.findByIdAndUpdate({
      _id: product._id
    }, product.update);
  }));
  return {
    message: 'Products updated successfully'
  };
}
//# sourceMappingURL=update_products_in_db.js.map
