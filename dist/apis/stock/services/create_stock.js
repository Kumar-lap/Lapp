"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStockListInDB;

var _stock = _interopRequireDefault(require("../models/stock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getStockListInDB(stockInRequest) {
  const Stock = (0, _stock.default)();
  const StockInDb = await Stock.insertMany(stockInRequest);
  return StockInDb;
}
//# sourceMappingURL=create_stock.js.map
