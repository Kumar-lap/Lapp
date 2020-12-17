"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addProducts;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addProducts(req, res, next) {
  try {
    return res.json(_index.default.createProducts(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=products_post.js.map
