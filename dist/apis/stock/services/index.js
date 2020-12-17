"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_stock_in_db = _interopRequireDefault(require("./get_stock_in_db"));

var _delete_stock_in_db = _interopRequireDefault(require("./delete_stock_in_db"));

var _create_stock = _interopRequireDefault(require("./create_stock"));

var _update_stock_in_db = _interopRequireDefault(require("./update_stock_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getStockInDB: _get_stock_in_db.default,
  deleteStockInDB: _delete_stock_in_db.default,
  createStock: _create_stock.default,
  updateStockInDB: _update_stock_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
