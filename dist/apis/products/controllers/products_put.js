"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateProducts;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateProducts(req, res, next) {
  try {
    return res.json(_index.default.updateProductsInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=products_put.js.map
