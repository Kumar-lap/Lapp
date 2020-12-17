"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOrderForSupplyListInDB;

var _order_for_supply = _interopRequireDefault(require("../models/order_for_supply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getOrderForSupplyListInDB(orderforsupplyInRequest) {
  const OrderForSupply = (0, _order_for_supply.default)();
  const OrderForSupplyInDb = await OrderForSupply.insertMany(orderforsupplyInRequest);
  return OrderForSupplyInDb;
}
//# sourceMappingURL=create_orderforsupply.js.map
