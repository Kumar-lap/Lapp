"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProducts;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteProducts(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteProductsInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=products_delete.js.map
