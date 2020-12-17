"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOrderForSupplyInDB;

var _order_for_supply = _interopRequireDefault(require("../models/order_for_supply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getOrderForSupplyInDB(offset, limit) {
  const OrderForSupply = (0, _order_for_supply.default)();
  const orderforsupplyInDb = await OrderForSupply.find().skip(offset || 0).limit(limit || 20).lean();
  return orderforsupplyInDb;
}
//# sourceMappingURL=get_orderforsupply_in_db.js.map
