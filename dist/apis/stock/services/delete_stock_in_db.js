"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteStock;

var _stock = _interopRequireDefault(require("../models/stock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteStock(ids) {
  const Stock = (0, _stock.default)();
  await Stock.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Stock deleted successfully'
  };
}
//# sourceMappingURL=delete_stock_in_db.js.map
