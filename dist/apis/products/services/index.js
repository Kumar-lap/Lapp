"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_products_in_db = _interopRequireDefault(require("./get_products_in_db"));

var _delete_products_in_db = _interopRequireDefault(require("./delete_products_in_db"));

var _create_products = _interopRequireDefault(require("./create_products"));

var _update_products_in_db = _interopRequireDefault(require("./update_products_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getProductsInDB: _get_products_in_db.default,
  deleteProductsInDB: _delete_products_in_db.default,
  createProducts: _create_products.default,
  updateProductsInDB: _update_products_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
