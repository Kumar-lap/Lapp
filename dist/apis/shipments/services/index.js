"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_shipments_in_db = _interopRequireDefault(require("./get_shipments_in_db"));

var _delete_shipments_in_db = _interopRequireDefault(require("./delete_shipments_in_db"));

var _create_shipments = _interopRequireDefault(require("./create_shipments"));

var _update_shipments_in_db = _interopRequireDefault(require("./update_shipments_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getShipmentsInDB: _get_shipments_in_db.default,
  deleteShipmentsInDB: _delete_shipments_in_db.default,
  createShipments: _create_shipments.default,
  updateShipmentsInDB: _update_shipments_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
