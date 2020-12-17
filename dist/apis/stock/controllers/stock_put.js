"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateStock;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateStock(req, res, next) {
  try {
    return res.json(_index.default.updateStockInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=stock_put.js.map
