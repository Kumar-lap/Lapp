"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_healpurchaseindents_in_db = _interopRequireDefault(require("./get_healpurchaseindents_in_db"));

var _delete_healpurchaseindents_in_db = _interopRequireDefault(require("./delete_healpurchaseindents_in_db"));

var _create_healpurchaseindents = _interopRequireDefault(require("./create_healpurchaseindents"));

var _update_healpurchaseindents_in_db = _interopRequireDefault(require("./update_healpurchaseindents_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getHealPurchaseIndentsInDB: _get_healpurchaseindents_in_db.default,
  deleteHealPurchaseIndentsInDB: _delete_healpurchaseindents_in_db.default,
  createHealPurchaseIndents: _create_healpurchaseindents.default,
  updateHealPurchaseIndentsInDB: _update_healpurchaseindents_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
