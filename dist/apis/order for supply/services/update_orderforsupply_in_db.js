"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateOrderForSupply;

var _order_for_supply = _interopRequireDefault(require("../models/order_for_supply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateOrderForSupply(orderforsupplyList) {
  const OrderForSupply = (0, _order_for_supply.default)();
  await Promise.all(orderforsupplyList.map(async orderForSupply => {
    return OrderForSupply.findByIdAndUpdate({
      _id: orderForSupply._id
    }, orderForSupply.update);
  }));
  return {
    message: 'OrderForSupply updated successfully'
  };
}
//# sourceMappingURL=update_orderforsupply_in_db.js.map
