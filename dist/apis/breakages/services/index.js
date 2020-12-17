"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_breakages_in_db = _interopRequireDefault(require("./get_breakages_in_db"));

var _delete_breakages_in_db = _interopRequireDefault(require("./delete_breakages_in_db"));

var _create_breakages = _interopRequireDefault(require("./create_breakages"));

var _update_breakages_in_db = _interopRequireDefault(require("./update_breakages_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getBreakagesInDB: _get_breakages_in_db.default,
  deleteBreakagesInDB: _delete_breakages_in_db.default,
  createBreakages: _create_breakages.default,
  updateBreakagesInDB: _update_breakages_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
