"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_healinventory_in_db = _interopRequireDefault(require("./get_healinventory_in_db"));

var _delete_healinventory_in_db = _interopRequireDefault(require("./delete_healinventory_in_db"));

var _create_healinventory = _interopRequireDefault(require("./create_healinventory"));

var _update_healinventory_in_db = _interopRequireDefault(require("./update_healinventory_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getHealInventoryInDB: _get_healinventory_in_db.default,
  deleteHealInventoryInDB: _delete_healinventory_in_db.default,
  createHealInventory: _create_healinventory.default,
  updateHealInventoryInDB: _update_healinventory_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
