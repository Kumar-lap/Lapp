"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_healusage_in_db = _interopRequireDefault(require("./get_healusage_in_db"));

var _delete_healusage_in_db = _interopRequireDefault(require("./delete_healusage_in_db"));

var _create_healusage = _interopRequireDefault(require("./create_healusage"));

var _update_healusage_in_db = _interopRequireDefault(require("./update_healusage_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getHealUsageInDB: _get_healusage_in_db.default,
  deleteHealUsageInDB: _delete_healusage_in_db.default,
  createHealUsage: _create_healusage.default,
  updateHealUsageInDB: _update_healusage_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
