"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_healdailyindents_in_db = _interopRequireDefault(require("./get_healdailyindents_in_db"));

var _delete_healdailyindents_in_db = _interopRequireDefault(require("./delete_healdailyindents_in_db"));

var _create_healdailyindents = _interopRequireDefault(require("./create_healdailyindents"));

var _update_healdailyindents_in_db = _interopRequireDefault(require("./update_healdailyindents_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getHealDailyIndentsInDB: _get_healdailyindents_in_db.default,
  deleteHealDailyIndentsInDB: _delete_healdailyindents_in_db.default,
  createHealDailyIndents: _create_healdailyindents.default,
  updateHealDailyIndentsInDB: _update_healdailyindents_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
