"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteOrderForSupply;

var _order_for_supply = _interopRequireDefault(require("../models/order_for_supply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteOrderForSupply(ids) {
  const OrderForSupply = (0, _order_for_supply.default)();
  await OrderForSupply.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Order for supply deleted successfully'
  };
}
//# sourceMappingURL=delete_orderforsupply_in_db.js.map
