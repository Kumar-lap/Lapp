"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProducts;

var _products = _interopRequireDefault(require("../models/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteProducts(ids) {
  const Products = (0, _products.default)();
  await Products.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Products deleted successfully'
  };
}
//# sourceMappingURL=delete_products_in_db.js.map
