"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_production_details = _interopRequireDefault(require("./get_production_details"));

var _delete_production_in_db = _interopRequireDefault(require("./delete_production_in_db"));

var _create_production = _interopRequireDefault(require("./create_production"));

var _update_production_in_db = _interopRequireDefault(require("./update_production_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getProductionInDB: _get_production_details.default,
  deleteProductionInDB: _delete_production_in_db.default,
  createProduction: _create_production.default,
  updateProductionInDB: _update_production_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
