"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateStock;

var _stock = _interopRequireDefault(require("../models/stock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateStock(stockList) {
  const Stock = (0, _stock.default)();
  await Promise.all(stockList.map(async stockInRequest => {
    return Stock.findByIdAndUpdate({
      _id: stockInRequest._id
    }, stockInRequest.update);
  }));
  return {
    message: 'Stock updated successfully'
  };
}
//# sourceMappingURL=update_stock_in_db.js.map
