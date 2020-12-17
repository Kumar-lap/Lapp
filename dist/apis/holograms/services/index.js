"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_holograms_in_db = _interopRequireDefault(require("./get_holograms_in_db"));

var _delete_holograms_in_db = _interopRequireDefault(require("./delete_holograms_in_db"));

var _create_holograms = _interopRequireDefault(require("./create_holograms"));

var _update_holograms_in_db = _interopRequireDefault(require("./update_holograms_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getHologramsInDB: _get_holograms_in_db.default,
  deleteHologramsInDB: _delete_holograms_in_db.default,
  createHolograms: _create_holograms.default,
  updateHologramsInDB: _update_holograms_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
