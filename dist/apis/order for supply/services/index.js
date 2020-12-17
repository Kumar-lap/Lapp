"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_orderforsupply_in_db = _interopRequireDefault(require("./get_orderforsupply_in_db"));

var _delete_orderforsupply_in_db = _interopRequireDefault(require("./delete_orderforsupply_in_db"));

var _create_orderforsupply = _interopRequireDefault(require("./create_orderforsupply"));

var _update_orderforsupply_in_db = _interopRequireDefault(require("./update_orderforsupply_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getOrderForSupplyInDB: _get_orderforsupply_in_db.default,
  deleteOrderForSupplyInDB: _delete_orderforsupply_in_db.default,
  createOrderForSupply: _create_orderforsupply.default,
  updateOrderForSupplyInDB: _update_orderforsupply_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
