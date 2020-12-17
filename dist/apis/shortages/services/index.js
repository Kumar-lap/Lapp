"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_shortages_in_db = _interopRequireDefault(require("./get_shortages_in_db"));

var _delete_shortages_in_db = _interopRequireDefault(require("./delete_shortages_in_db"));

var _create_shortages = _interopRequireDefault(require("./create_shortages"));

var _update_shortages_in_db = _interopRequireDefault(require("./update_shortages_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getShortagesInDB: _get_shortages_in_db.default,
  deleteShortagesInDB: _delete_shortages_in_db.default,
  createShortages: _create_shortages.default,
  updateShortagesInDB: _update_shortages_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
