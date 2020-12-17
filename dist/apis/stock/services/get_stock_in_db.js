"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStockInDB;

var _stock = _interopRequireDefault(require("../models/stock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getStockInDB(offset, limit) {
  const Stock = (0, _stock.default)();
  const stockInDb = await Stock.find().skip(offset || 0).limit(limit || 20).lean();
  return stockInDb;
}
//# sourceMappingURL=get_stock_in_db.js.map
